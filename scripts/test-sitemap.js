#!/usr/bin/env node

/**
 * Simple test script to verify sitemap generation works
 */

const { SitemapGenerator } = require('../src/lib/sitemap/sitemap-generator');

async function testSitemapGeneration() {
  console.log('🧪 Testing sitemap generation...');
  
  try {
    // Create generator with verbose output
    const generator = new SitemapGenerator({ 
      verbose: true,
      config: {
        baseUrl: 'https://multirun.space'
      }
    });
    
    // Validate setup
    console.log('🔍 Validating setup...');
    const validation = await generator.validateSetup();
    
    if (!validation.isValid) {
      console.error('❌ Setup validation failed:');
      validation.issues.forEach(issue => console.error(`  - ${issue}`));
      return false;
    }
    
    if (validation.warnings.length > 0) {
      console.warn('⚠️  Setup warnings:');
      validation.warnings.forEach(warning => console.warn(`  - ${warning}`));
    }
    
    // Generate sitemap with stats
    console.log('🚀 Generating sitemap...');
    const { xml, stats } = await generator.generateWithStats();
    
    // Display results
    console.log('✅ Sitemap generated successfully!');
    console.log('📊 Statistics:');
    console.log(`  - Total entries: ${stats.totalEntries}`);
    console.log(`  - Static routes: ${stats.staticRoutes}`);
    console.log(`  - Dynamic routes: ${stats.dynamicRoutes}`);
    console.log(`  - Blog entries: ${stats.blogEntries}`);
    console.log(`  - Generation time: ${stats.generationTime}ms`);
    console.log(`  - XML size: ${xml.length} characters`);
    
    // Show preview
    console.log('📄 XML Preview (first 500 characters):');
    console.log(xml.substring(0, 500) + (xml.length > 500 ? '...' : ''));
    
    // Check for errors
    const errorSummary = generator.getErrorSummary();
    console.log(`📋 Error summary: ${errorSummary}`);
    
    return true;
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (process.env.DEBUG) {
      console.error('Full error:', error);
    }
    return false;
  }
}

// Run test
if (require.main === module) {
  testSitemapGeneration()
    .then(success => {
      if (success) {
        console.log('🎉 All tests passed!');
        process.exit(0);
      } else {
        console.log('💥 Tests failed!');
        process.exit(1);
      }
    })
    .catch(error => {
      console.error('💥 Test execution failed:', error);
      process.exit(1);
    });
}

module.exports = { testSitemapGeneration };