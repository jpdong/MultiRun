#!/usr/bin/env node

/**
 * Sitemap generation script
 * This script can be run standalone or as part of the build process
 */

const { SitemapGenerator } = require('../src/lib/sitemap/sitemap-generator');
const path = require('path');

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    verbose: false,
    outputPath: null,
    baseUrl: null,
    help: false
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    switch (arg) {
      case '-v':
      case '--verbose':
        options.verbose = true;
        break;
      case '-o':
      case '--output':
        options.outputPath = args[++i];
        break;
      case '-u':
      case '--url':
        options.baseUrl = args[++i];
        break;
      case '-h':
      case '--help':
        options.help = true;
        break;
      default:
        console.warn(`Unknown argument: ${arg}`);
    }
  }

  return options;
}

/**
 * Show help information
 */
function showHelp() {
  console.log(`
Sitemap Generator

Usage: node scripts/generate-sitemap.js [options]

Options:
  -v, --verbose     Enable verbose logging
  -o, --output      Specify output path (default: public/sitemap.xml)
  -u, --url         Specify base URL (default: from config)
  -h, --help        Show this help message

Examples:
  node scripts/generate-sitemap.js
  node scripts/generate-sitemap.js --verbose
  node scripts/generate-sitemap.js --output ./dist/sitemap.xml
  node scripts/generate-sitemap.js --url https://example.com --verbose
`);
}

/**
 * Main execution function
 */
async function main() {
  const options = parseArgs();

  if (options.help) {
    showHelp();
    process.exit(0);
  }

  try {
    console.log('🚀 Starting sitemap generation...');
    
    // Create generator with options
    const generatorOptions = {
      verbose: options.verbose,
      config: {}
    };

    if (options.outputPath) {
      generatorOptions.config.outputPath = options.outputPath;
    }

    if (options.baseUrl) {
      generatorOptions.config.baseUrl = options.baseUrl;
    }

    const generator = new SitemapGenerator(generatorOptions);

    // Validate setup
    if (options.verbose) {
      console.log('🔍 Validating setup...');
      const validation = await generator.validateSetup();
      
      if (!validation.isValid) {
        console.error('❌ Setup validation failed:');
        validation.issues.forEach(issue => console.error(`  - ${issue}`));
        process.exit(1);
      }

      if (validation.warnings.length > 0) {
        console.warn('⚠️  Setup warnings:');
        validation.warnings.forEach(warning => console.warn(`  - ${warning}`));
      }
    }

    // Generate sitemap with statistics
    const startTime = Date.now();
    const { xml, stats } = await generator.generateWithStats();

    // Write to file
    await generator.generateAndWrite();

    const endTime = Date.now();
    const totalTime = endTime - startTime;

    // Show results
    console.log('✅ Sitemap generation completed successfully!');
    console.log(`📊 Statistics:`);
    console.log(`  - Total entries: ${stats.totalEntries}`);
    console.log(`  - Static routes: ${stats.staticRoutes}`);
    console.log(`  - Dynamic routes: ${stats.dynamicRoutes}`);
    console.log(`  - Blog entries: ${stats.blogEntries}`);
    console.log(`  - Generation time: ${totalTime}ms`);
    console.log(`  - Output: ${generator.getConfig().outputPath}`);

    if (options.verbose) {
      console.log(`📄 Generated XML preview (first 500 chars):`);
      console.log(xml.substring(0, 500) + (xml.length > 500 ? '...' : ''));
    }

  } catch (error) {
    console.error('❌ Sitemap generation failed:', error.message);
    
    if (options.verbose) {
      console.error('Full error details:', error);
    }
    
    process.exit(1);
  }
}

/**
 * Handle uncaught errors
 */
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Run the script
if (require.main === module) {
  main();
}

module.exports = { main, parseArgs, showHelp };