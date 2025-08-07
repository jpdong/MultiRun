import { SitemapEntry } from './types';
import { SITEMAP_CONSTANTS } from './constants';

/**
 * XML generator for creating sitemap.xml files
 */
export class XmlGenerator {
  
  /**
   * Generate complete sitemap XML from entries
   */
  generateSitemapXml(entries: SitemapEntry[]): string {
    // Validate and filter entries
    const validEntries = entries.filter(entry => this.validateEntry(entry));
    
    if (validEntries.length === 0) {
      console.warn('No valid entries found for sitemap generation');
    }

    // Limit entries to maximum allowed
    const limitedEntries = validEntries.slice(0, SITEMAP_CONSTANTS.MAX_URLS);
    
    if (limitedEntries.length < validEntries.length) {
      console.warn(`Sitemap truncated to ${SITEMAP_CONSTANTS.MAX_URLS} URLs (had ${validEntries.length})`);
    }

    // Sort entries by priority (highest first) and then by URL
    const sortedEntries = this.sortEntries(limitedEntries);

    // Generate XML
    const xmlContent = this.buildXmlContent(sortedEntries);
    
    return xmlContent;
  }

  /**
   * Build the complete XML content
   */
  private buildXmlContent(entries: SitemapEntry[]): string {
    const xmlHeader = SITEMAP_CONSTANTS.XML_HEADER;
    const urlsetOpen = `<urlset xmlns="${SITEMAP_CONSTANTS.SITEMAP_NAMESPACE}">`;
    const urlsetClose = '</urlset>';
    
    const urlEntries = entries.map(entry => this.buildUrlEntry(entry)).join('\n');
    
    return [
      xmlHeader,
      urlsetOpen,
      urlEntries,
      urlsetClose
    ].join('\n');
  }

  /**
   * Build individual URL entry XML
   */
  private buildUrlEntry(entry: SitemapEntry): string {
    const indent = '  ';
    const lines: string[] = [];
    
    lines.push(`${indent}<url>`);
    lines.push(`${indent}${indent}<loc>${this.escapeXml(entry.url)}</loc>`);
    
    if (entry.lastmod) {
      lines.push(`${indent}${indent}<lastmod>${entry.lastmod}</lastmod>`);
    }
    
    if (entry.changefreq) {
      lines.push(`${indent}${indent}<changefreq>${entry.changefreq}</changefreq>`);
    }
    
    if (entry.priority !== undefined) {
      lines.push(`${indent}${indent}<priority>${entry.priority.toFixed(1)}</priority>`);
    }
    
    lines.push(`${indent}</url>`);
    
    return lines.join('\n');
  }

  /**
   * Escape XML special characters
   */
  private escapeXml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  /**
   * Sort entries by priority and URL
   */
  private sortEntries(entries: SitemapEntry[]): SitemapEntry[] {
    return entries.sort((a, b) => {
      // Sort by priority first (highest first)
      const priorityA = a.priority ?? SITEMAP_CONSTANTS.DEFAULT_PRIORITY;
      const priorityB = b.priority ?? SITEMAP_CONSTANTS.DEFAULT_PRIORITY;
      
      if (priorityA !== priorityB) {
        return priorityB - priorityA;
      }
      
      // Then sort by URL alphabetically
      return a.url.localeCompare(b.url);
    });
  }

  /**
   * Validate sitemap entry
   */
  private validateEntry(entry: SitemapEntry): boolean {
    // Check required URL
    if (!entry.url || typeof entry.url !== 'string') {
      console.warn('Invalid entry: missing or invalid URL', entry);
      return false;
    }

    // Validate URL format
    try {
      new URL(entry.url);
    } catch {
      console.warn('Invalid entry: malformed URL', entry.url);
      return false;
    }

    // Check URL length
    if (entry.url.length > SITEMAP_CONSTANTS.MAX_URL_LENGTH) {
      console.warn('Invalid entry: URL too long', entry.url);
      return false;
    }

    // Validate priority if present
    if (entry.priority !== undefined) {
      if (typeof entry.priority !== 'number' || entry.priority < 0 || entry.priority > 1) {
        console.warn('Invalid entry: priority must be between 0 and 1', entry);
        return false;
      }
    }

    // Validate change frequency if present
    if (entry.changefreq) {
      const validFreqs = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];
      if (!validFreqs.includes(entry.changefreq)) {
        console.warn('Invalid entry: invalid changefreq', entry);
        return false;
      }
    }

    // Validate lastmod format if present
    if (entry.lastmod) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.lastmod)) {
        console.warn('Invalid entry: lastmod must be in YYYY-MM-DD format', entry);
        return false;
      }
    }

    return true;
  }

  /**
   * Generate sitemap index XML (for multiple sitemaps)
   */
  generateSitemapIndexXml(sitemapUrls: string[]): string {
    const xmlHeader = SITEMAP_CONSTANTS.XML_HEADER;
    const indexOpen = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const indexClose = '</sitemapindex>';
    
    const sitemapEntries = sitemapUrls.map(url => {
      const lastmod = new Date().toISOString().split('T')[0];
      return [
        '  <sitemap>',
        `    <loc>${this.escapeXml(url)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        '  </sitemap>'
      ].join('\n');
    }).join('\n');
    
    return [
      xmlHeader,
      indexOpen,
      sitemapEntries,
      indexClose
    ].join('\n');
  }

  /**
   * Pretty print XML with proper indentation
   */
  prettyPrintXml(xml: string): string {
    // This is a simple implementation - for production, consider using a proper XML formatter
    return xml
      .replace(/></g, '>\n<')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .join('\n');
  }

  /**
   * Validate complete XML structure
   */
  validateXml(xml: string): boolean {
    try {
      // Basic XML structure validation
      if (!xml.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
        return false;
      }
      
      if (!xml.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) {
        return false;
      }
      
      if (!xml.includes('</urlset>')) {
        return false;
      }
      
      // Count opening and closing tags
      const openTags = (xml.match(/<[^/][^>]*>/g) || []).length;
      const closeTags = (xml.match(/<\/[^>]*>/g) || []).length;
      const selfClosingTags = (xml.match(/<[^>]*\/>/g) || []).length;
      
      // Basic tag balance check
      return openTags === closeTags + selfClosingTags;
    } catch (error) {
      console.error('XML validation error:', error);
      return false;
    }
  }
}