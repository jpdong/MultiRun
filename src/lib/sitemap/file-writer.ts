import fs from 'fs';
import path from 'path';

/**
 * File writer for sitemap files
 */
export class SitemapFileWriter {
  
  /**
   * Write sitemap XML to file
   */
  async writeSitemap(xml: string, outputPath: string): Promise<void> {
    try {
      // Ensure output directory exists
      const outputDir = path.dirname(outputPath);
      await this.ensureDirectoryExists(outputDir);
      
      // Write the file
      fs.writeFileSync(outputPath, xml, 'utf8');
      
      console.log(`Sitemap written to: ${outputPath}`);
    } catch (error) {
      console.error(`Failed to write sitemap to ${outputPath}:`, error);
      throw error;
    }
  }

  /**
   * Write sitemap with backup
   */
  async writeSitemapWithBackup(xml: string, outputPath: string): Promise<void> {
    try {
      // Create backup if file exists
      if (fs.existsSync(outputPath)) {
        await this.createBackup(outputPath);
      }
      
      // Write new sitemap
      await this.writeSitemap(xml, outputPath);
      
    } catch (error) {
      console.error('Failed to write sitemap with backup:', error);
      throw error;
    }
  }

  /**
   * Validate file can be written
   */
  async validateOutputPath(outputPath: string): Promise<boolean> {
    try {
      const outputDir = path.dirname(outputPath);
      
      // Check if directory exists or can be created
      if (!fs.existsSync(outputDir)) {
        try {
          fs.mkdirSync(outputDir, { recursive: true });
          fs.rmdirSync(outputDir); // Clean up test directory
        } catch {
          return false;
        }
      }
      
      // Check write permissions
      try {
        const testFile = path.join(outputDir, '.sitemap-test');
        fs.writeFileSync(testFile, 'test');
        fs.unlinkSync(testFile);
        return true;
      } catch {
        return false;
      }
      
    } catch {
      return false;
    }
  }

  /**
   * Get file information
   */
  async getFileInfo(filePath: string): Promise<FileInfo | null> {
    try {
      if (!fs.existsSync(filePath)) {
        return null;
      }
      
      const stats = fs.statSync(filePath);
      const content = fs.readFileSync(filePath, 'utf8');
      
      return {
        path: filePath,
        size: stats.size,
        lastModified: stats.mtime,
        created: stats.birthtime,
        urlCount: this.countUrlsInSitemap(content)
      };
      
    } catch (error) {
      console.error(`Failed to get file info for ${filePath}:`, error);
      return null;
    }
  }

  /**
   * Compare two sitemap files
   */
  async compareSitemaps(oldPath: string, newPath: string): Promise<SitemapComparison> {
    try {
      const oldInfo = await this.getFileInfo(oldPath);
      const newInfo = await this.getFileInfo(newPath);
      
      if (!oldInfo || !newInfo) {
        return {
          hasChanges: true,
          oldUrlCount: oldInfo?.urlCount || 0,
          newUrlCount: newInfo?.urlCount || 0,
          sizeDifference: (newInfo?.size || 0) - (oldInfo?.size || 0)
        };
      }
      
      const oldContent = fs.readFileSync(oldPath, 'utf8');
      const newContent = fs.readFileSync(newPath, 'utf8');
      
      return {
        hasChanges: oldContent !== newContent,
        oldUrlCount: oldInfo.urlCount,
        newUrlCount: newInfo.urlCount,
        sizeDifference: newInfo.size - oldInfo.size
      };
      
    } catch (error) {
      console.error('Failed to compare sitemaps:', error);
      return {
        hasChanges: true,
        oldUrlCount: 0,
        newUrlCount: 0,
        sizeDifference: 0
      };
    }
  }

  /**
   * Create backup of existing file
   */
  private async createBackup(filePath: string): Promise<void> {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = `${filePath}.backup.${timestamp}`;
      
      fs.copyFileSync(filePath, backupPath);
      console.log(`Backup created: ${backupPath}`);
      
      // Clean up old backups (keep only last 5)
      await this.cleanupOldBackups(filePath);
      
    } catch (error) {
      console.warn('Failed to create backup:', error);
      // Don't throw - backup failure shouldn't prevent sitemap generation
    }
  }

  /**
   * Clean up old backup files
   */
  private async cleanupOldBackups(originalPath: string): Promise<void> {
    try {
      const dir = path.dirname(originalPath);
      const basename = path.basename(originalPath);
      const backupPattern = `${basename}.backup.`;
      
      const files = fs.readdirSync(dir);
      const backupFiles = files
        .filter(file => file.startsWith(backupPattern))
        .map(file => ({
          name: file,
          path: path.join(dir, file),
          stats: fs.statSync(path.join(dir, file))
        }))
        .sort((a, b) => b.stats.mtime.getTime() - a.stats.mtime.getTime());
      
      // Keep only the 5 most recent backups
      const filesToDelete = backupFiles.slice(5);
      
      for (const file of filesToDelete) {
        try {
          fs.unlinkSync(file.path);
          console.log(`Cleaned up old backup: ${file.name}`);
        } catch (error) {
          console.warn(`Failed to delete backup ${file.name}:`, error);
        }
      }
      
    } catch (error) {
      console.warn('Failed to cleanup old backups:', error);
    }
  }

  /**
   * Ensure directory exists
   */
  private async ensureDirectoryExists(dirPath: string): Promise<void> {
    try {
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Created directory: ${dirPath}`);
      }
    } catch (error) {
      console.error(`Failed to create directory ${dirPath}:`, error);
      throw error;
    }
  }

  /**
   * Count URLs in sitemap content
   */
  private countUrlsInSitemap(content: string): number {
    const matches = content.match(/<loc>/g);
    return matches ? matches.length : 0;
  }

  /**
   * Validate XML content before writing
   */
  private validateXmlContent(xml: string): boolean {
    try {
      // Basic XML validation
      return xml.includes('<?xml') && 
             xml.includes('<urlset') && 
             xml.includes('</urlset>') &&
             xml.trim().endsWith('</urlset>');
    } catch {
      return false;
    }
  }
}

/**
 * File information interface
 */
export interface FileInfo {
  path: string;
  size: number;
  lastModified: Date;
  created: Date;
  urlCount: number;
}

/**
 * Sitemap comparison result
 */
export interface SitemapComparison {
  hasChanges: boolean;
  oldUrlCount: number;
  newUrlCount: number;
  sizeDifference: number;
}