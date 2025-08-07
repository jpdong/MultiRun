/**
 * Error handling utilities for sitemap generation
 */

export class SitemapError extends Error {
  public readonly code: string;
  public readonly context?: string;
  public readonly originalError?: Error;

  constructor(message: string, code: string, context?: string, originalError?: Error) {
    super(message);
    this.name = 'SitemapError';
    this.code = code;
    this.context = context;
    this.originalError = originalError;
  }
}

export class SitemapValidationError extends SitemapError {
  constructor(message: string, context?: string, originalError?: Error) {
    super(message, 'VALIDATION_ERROR', context, originalError);
    this.name = 'SitemapValidationError';
  }
}

export class SitemapFileError extends SitemapError {
  constructor(message: string, context?: string, originalError?: Error) {
    super(message, 'FILE_ERROR', context, originalError);
    this.name = 'SitemapFileError';
  }
}

export class SitemapConfigError extends SitemapError {
  constructor(message: string, context?: string, originalError?: Error) {
    super(message, 'CONFIG_ERROR', context, originalError);
    this.name = 'SitemapConfigError';
  }
}

/**
 * Error handler for sitemap generation
 */
export class SitemapErrorHandler {
  private verbose: boolean;
  private errors: SitemapError[] = [];
  private warnings: string[] = [];

  constructor(verbose: boolean = false) {
    this.verbose = verbose;
  }

  /**
   * Handle an error with graceful degradation
   */
  handleError(error: Error, context: string, critical: boolean = false): void {
    const sitemapError = this.wrapError(error, context);
    this.errors.push(sitemapError);

    if (critical) {
      this.logError(sitemapError);
      throw sitemapError;
    } else {
      this.logWarning(`Non-critical error in ${context}: ${error.message}`);
    }
  }

  /**
   * Handle a validation error
   */
  handleValidationError(message: string, context: string, critical: boolean = false): void {
    const error = new SitemapValidationError(message, context);
    this.handleError(error, context, critical);
  }

  /**
   * Handle a file system error
   */
  handleFileError(error: Error, context: string, critical: boolean = false): void {
    const fileError = new SitemapFileError(error.message, context, error);
    this.handleError(fileError, context, critical);
  }

  /**
   * Handle a configuration error
   */
  handleConfigError(error: Error, context: string, critical: boolean = true): void {
    const configError = new SitemapConfigError(error.message, context, error);
    this.handleError(configError, context, critical);
  }

  /**
   * Add a warning
   */
  addWarning(message: string): void {
    this.warnings.push(message);
    this.logWarning(message);
  }

  /**
   * Get all errors
   */
  getErrors(): SitemapError[] {
    return [...this.errors];
  }

  /**
   * Get all warnings
   */
  getWarnings(): string[] {
    return [...this.warnings];
  }

  /**
   * Check if there are any critical errors
   */
  hasCriticalErrors(): boolean {
    return this.errors.some(error => 
      error.code === 'CONFIG_ERROR' || 
      error.code === 'VALIDATION_ERROR'
    );
  }

  /**
   * Clear all errors and warnings
   */
  clear(): void {
    this.errors = [];
    this.warnings = [];
  }

  /**
   * Get error summary
   */
  getErrorSummary(): string {
    const errorCount = this.errors.length;
    const warningCount = this.warnings.length;
    
    if (errorCount === 0 && warningCount === 0) {
      return 'No errors or warnings';
    }

    const parts = [];
    if (errorCount > 0) {
      parts.push(`${errorCount} error${errorCount > 1 ? 's' : ''}`);
    }
    if (warningCount > 0) {
      parts.push(`${warningCount} warning${warningCount > 1 ? 's' : ''}`);
    }

    return parts.join(', ');
  }

  /**
   * Wrap a generic error in a SitemapError
   */
  private wrapError(error: Error, context: string): SitemapError {
    if (error instanceof SitemapError) {
      return error;
    }

    // Determine error type based on error message or type
    if (error.message.includes('ENOENT') || error.message.includes('EACCES')) {
      return new SitemapFileError(error.message, context, error);
    }

    if (error.message.includes('Invalid') || error.message.includes('validation')) {
      return new SitemapValidationError(error.message, context, error);
    }

    return new SitemapError(error.message, 'UNKNOWN_ERROR', context, error);
  }

  /**
   * Log an error
   */
  private logError(error: SitemapError): void {
    console.error(`[SitemapError] ${error.message}`);
    
    if (this.verbose && error.context) {
      console.error(`  Context: ${error.context}`);
    }
    
    if (this.verbose && error.originalError) {
      console.error(`  Original error:`, error.originalError);
    }
  }

  /**
   * Log a warning
   */
  private logWarning(message: string): void {
    console.warn(`[SitemapWarning] ${message}`);
  }
}

/**
 * URL validation utilities
 */
export class UrlValidator {
  private static readonly MAX_URL_LENGTH = 2048;
  private static readonly VALID_PROTOCOLS = ['http:', 'https:'];

  /**
   * Validate a single URL
   */
  static validateUrl(url: string): ValidationResult {
    const issues: string[] = [];

    try {
      // Basic URL parsing
      const urlObj = new URL(url);

      // Check protocol
      if (!this.VALID_PROTOCOLS.includes(urlObj.protocol)) {
        issues.push(`Invalid protocol: ${urlObj.protocol}`);
      }

      // Check length
      if (url.length > this.MAX_URL_LENGTH) {
        issues.push(`URL too long: ${url.length} characters (max: ${this.MAX_URL_LENGTH})`);
      }

      // Check for suspicious characters
      if (url.includes(' ')) {
        issues.push('URL contains spaces');
      }

      // Check for double slashes (except after protocol)
      if (url.replace(/^https?:\/\//, '').includes('//')) {
        issues.push('URL contains double slashes');
      }

    } catch (error) {
      issues.push(`Malformed URL: ${(error as Error).message}`);
    }

    return {
      isValid: issues.length === 0,
      issues
    };
  }

  /**
   * Validate multiple URLs
   */
  static validateUrls(urls: string[]): BatchValidationResult {
    const results: { url: string; result: ValidationResult }[] = [];
    let validCount = 0;

    for (const url of urls) {
      const result = this.validateUrl(url);
      results.push({ url, result });
      
      if (result.isValid) {
        validCount++;
      }
    }

    return {
      totalUrls: urls.length,
      validUrls: validCount,
      invalidUrls: urls.length - validCount,
      results
    };
  }

  /**
   * Clean and normalize URL
   */
  static cleanUrl(url: string): string {
    return url
      .trim()
      .replace(/\/+/g, '/') // Remove duplicate slashes
      .replace(/^\//, '') // Remove leading slash for processing
      .replace(/\/$/, ''); // Remove trailing slash
  }
}

/**
 * Validation result interfaces
 */
export interface ValidationResult {
  isValid: boolean;
  issues: string[];
}

export interface BatchValidationResult {
  totalUrls: number;
  validUrls: number;
  invalidUrls: number;
  results: { url: string; result: ValidationResult }[];
}