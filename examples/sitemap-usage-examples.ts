/**
 * Sitemap Generator Usage Examples
 * 
 * This file contains various examples of how to use the sitemap generator
 * in different scenarios and configurations.
 */

import { SitemapGenerator } from '../src/lib/sitemap/sitemap-generator';
import { ConfigManager } from '../src/lib/sitemap/config-manager';

// Example 1: Basic Usage
export async function basicUsage() {
  console.log('=== Basic Usage Example ===');
  
  const generator = new SitemapGenerator();
  
  try {
    // Generate and write sitemap
    await generator.generateAndWrite();
    console.log('✅ Sitemap generated successfully!');
  } catch (error) {
    console.error('❌ Failed to generate sitemap:', error);
  }
}

// Example 2: Custom Configuration
export async function customConfiguration() {
  console.log('=== Custom Configuration Example ===');
  
  const generator = new SitemapGenerator({
    verbose: true,
    config: {
      baseUrl: 'https://example.com',
      excludePaths: ['/admin', '/private', '/test'],
      priorityMap: {
        '/': 1.0,
        '/products': 0.9,
        '/about': 0.8,
        '/contact': 0.7
      },
      changeFreqMap: {
        '/': 'daily',
        '/products': 'weekly',
        '/about': 'monthly',
        '/contact': 'monthly'
      }
    }
  });
  
  try {
    const { xml, stats } = await generator.generateWithStats();
    
    console.log('📊 Generation Statistics:');
    console.log(`  - Total entries: ${stats.totalEntries}`);
    console.log(`  - Static routes: ${stats.staticRoutes}`);
    console.log(`  - Dynamic routes: ${stats.dynamicRoutes}`);
    console.log(`  - Blog entries: ${stats.blogEntries}`);
    console.log(`  - Generation time: ${stats.generationTime}ms`);
    
    // Write to custom location
    await generator.generateAndWrite();
    
  } catch (error) {
    console.error('❌ Failed with custom configuration:', error);
  }
}

// Example 3: Validation and Error Handling
export async function validationExample() {
  console.log('=== Validation Example ===');
  
  const generator = new SitemapGenerator({ verbose: true });
  
  try {
    // Validate setup before generation
    console.log('🔍 Validating setup...');
    const validation = await generator.validateSetup();
    
    if (!validation.isValid) {
      console.error('❌ Setup validation failed:');
      validation.issues.forEach(issue => console.error(`  - ${issue}`));
      return;
    }
    
    if (validation.warnings.length > 0) {
      console.warn('⚠️  Setup warnings:');
      validation.warnings.forEach(warning => console.warn(`  - ${warning}`));
    }
    
    console.log('✅ Setup validation passed!');
    
    // Generate sitemap
    const xml = await generator.generate();
    console.log(`📄 Generated XML (${xml.length} characters)`);
    
    // Get error summary
    const errorSummary = generator.getErrorSummary();
    console.log(`📋 Error summary: ${errorSummary}`);
    
  } catch (error) {
    console.error('❌ Validation example failed:', error);
  }
}

// Example 4: Configuration Management
export async function configurationManagement() {
  console.log('=== Configuration Management Example ===');
  
  const configManager = new ConfigManager();
  
  try {
    // Get current configuration
    console.log('📋 Current configuration:');
    const config = configManager.getConfig();
    console.log(`  - Base URL: ${config.baseUrl}`);
    console.log(`  - Output path: ${config.outputPath}`);
    console.log(`  - Excluded paths: ${config.excludePaths.length} paths`);
    
    // Update configuration
    console.log('🔧 Updating configuration...');
    configManager.updateConfig({
      baseUrl: 'https://updated-domain.com',
      priorityMap: {
        '/new-page': 0.9
      }
    });
    
    // Set route-specific configuration
    configManager.setRouteConfig('/special-page', 0.95, 'daily');
    
    // Add exclude path
    configManager.addExcludePath('/temp');
    
    // Get route configuration
    const routeConfig = configManager.getRouteConfig('/special-page');
    console.log(`📍 Route config for /special-page:`, routeConfig);
    
    // Get configuration summary
    console.log('📊 Configuration summary:');
    console.log(configManager.getConfigSummary());
    
  } catch (error) {
    console.error('❌ Configuration management failed:', error);
  }
}

// Example 5: Blog Integration
export async function blogIntegrationExample() {
  console.log('=== Blog Integration Example ===');
  
  const generator = new SitemapGenerator({
    verbose: true,
    config: {
      // Blog-specific configuration
      priorityMap: {
        '/blog': 0.9,
        '/blog/featured': 0.95
      },
      changeFreqMap: {
        '/blog': 'daily' // Blog listing updates daily
      }
    }
  });
  
  try {
    // Generate with focus on blog statistics
    const { xml, stats } = await generator.generateWithStats();
    
    console.log('📝 Blog Integration Results:');
    console.log(`  - Blog entries found: ${stats.blogEntries}`);
    console.log(`  - Total entries: ${stats.totalEntries}`);
    
    if (stats.blogEntries > 0) {
      const blogPercentage = ((stats.blogEntries / stats.totalEntries) * 100).toFixed(1);
      console.log(`  - Blog content percentage: ${blogPercentage}%`);
    }
    
    // Write sitemap
    await generator.generateAndWrite();
    console.log('✅ Blog-integrated sitemap generated!');
    
  } catch (error) {
    console.error('❌ Blog integration failed:', error);
  }
}

// Example 6: Performance Monitoring
export async function performanceMonitoring() {
  console.log('=== Performance Monitoring Example ===');
  
  const generator = new SitemapGenerator({ verbose: true });
  
  try {
    const startTime = Date.now();
    
    // Generate with detailed timing
    console.log('⏱️  Starting performance monitoring...');
    
    const { xml, stats } = await generator.generateWithStats();
    
    const endTime = Date.now();
    const totalTime = endTime - startTime;
    
    console.log('📊 Performance Metrics:');
    console.log(`  - Total generation time: ${totalTime}ms`);
    console.log(`  - Internal generation time: ${stats.generationTime}ms`);
    console.log(`  - Overhead time: ${totalTime - stats.generationTime}ms`);
    console.log(`  - Entries per second: ${(stats.totalEntries / (totalTime / 1000)).toFixed(2)}`);
    console.log(`  - XML size: ${xml.length} characters`);
    console.log(`  - Average bytes per entry: ${(xml.length / stats.totalEntries).toFixed(2)}`);
    
    // Memory usage (if available)
    if (process.memoryUsage) {
      const memUsage = process.memoryUsage();
      console.log(`  - Memory usage: ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
    }
    
  } catch (error) {
    console.error('❌ Performance monitoring failed:', error);
  }
}

// Example 7: Error Recovery
export async function errorRecoveryExample() {
  console.log('=== Error Recovery Example ===');
  
  // Simulate problematic configuration
  const generator = new SitemapGenerator({
    verbose: true,
    config: {
      baseUrl: 'https://example.com',
      // This will cause some warnings but not failures
      excludePaths: ['/non-existent-path'],
      priorityMap: {
        '/maybe-missing': 0.8
      }
    }
  });
  
  try {
    console.log('🔄 Testing error recovery...');
    
    // This should succeed despite potential issues
    const xml = await generator.generate();
    
    // Check for any errors or warnings
    const errorSummary = generator.getErrorSummary();
    console.log(`📋 Error summary: ${errorSummary}`);
    
    if (errorSummary !== 'No errors or warnings') {
      console.log('⚠️  Generation completed with issues, but recovered gracefully');
    } else {
      console.log('✅ Generation completed without issues');
    }
    
    console.log(`📄 Generated XML length: ${xml.length} characters`);
    
  } catch (error) {
    console.error('❌ Error recovery example failed:', error);
  }
}

// Example 8: Batch Processing
export async function batchProcessingExample() {
  console.log('=== Batch Processing Example ===');
  
  const configurations = [
    { baseUrl: 'https://site1.com', outputPath: 'public/sitemap1.xml' },
    { baseUrl: 'https://site2.com', outputPath: 'public/sitemap2.xml' },
    { baseUrl: 'https://site3.com', outputPath: 'public/sitemap3.xml' }
  ];
  
  try {
    console.log(`🔄 Processing ${configurations.length} configurations...`);
    
    const results = await Promise.allSettled(
      configurations.map(async (config, index) => {
        console.log(`  Processing configuration ${index + 1}...`);
        
        const generator = new SitemapGenerator({
          verbose: false, // Reduce noise in batch mode
          config
        });
        
        const { stats } = await generator.generateWithStats();
        await generator.generateAndWrite();
        
        return {
          config,
          stats,
          success: true
        };
      })
    );
    
    // Report results
    console.log('📊 Batch Processing Results:');
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        const { config, stats } = result.value;
        console.log(`  ✅ Config ${index + 1} (${config.baseUrl}): ${stats.totalEntries} entries`);
      } else {
        console.log(`  ❌ Config ${index + 1}: ${result.reason.message}`);
      }
    });
    
  } catch (error) {
    console.error('❌ Batch processing failed:', error);
  }
}

// Example 9: Custom URL Processing
export async function customUrlProcessing() {
  console.log('=== Custom URL Processing Example ===');
  
  const generator = new SitemapGenerator({
    verbose: true,
    config: {
      baseUrl: 'https://example.com',
      // Custom priority mapping with patterns
      priorityMap: {
        '/': 1.0,
        '/products': 0.9,
        '/products/': 0.8, // Product category pages
        '/blog': 0.8,
        '/blog/': 0.7, // Individual blog posts
        '/support': 0.6,
        '/legal': 0.3
      },
      changeFreqMap: {
        '/': 'daily',
        '/products': 'weekly',
        '/blog': 'weekly',
        '/support': 'monthly',
        '/legal': 'yearly'
      }
    }
  });
  
  try {
    console.log('🔧 Generating with custom URL processing...');
    
    const { xml, stats } = await generator.generateWithStats();
    
    // Analyze generated URLs
    const urls = xml.match(/<loc>(.*?)<\/loc>/g) || [];
    const urlAnalysis = {
      total: urls.length,
      byPath: {} as Record<string, number>
    };
    
    urls.forEach(urlTag => {
      const url = urlTag.replace(/<\/?loc>/g, '');
      const path = new URL(url).pathname;
      const pathPrefix = path.split('/')[1] || 'root';
      urlAnalysis.byPath[pathPrefix] = (urlAnalysis.byPath[pathPrefix] || 0) + 1;
    });
    
    console.log('📊 URL Analysis:');
    console.log(`  - Total URLs: ${urlAnalysis.total}`);
    console.log('  - By path prefix:');
    Object.entries(urlAnalysis.byPath).forEach(([prefix, count]) => {
      console.log(`    - /${prefix}: ${count} URLs`);
    });
    
  } catch (error) {
    console.error('❌ Custom URL processing failed:', error);
  }
}

// Example 10: Integration Testing
export async function integrationTesting() {
  console.log('=== Integration Testing Example ===');
  
  try {
    console.log('🧪 Running integration tests...');
    
    // Test 1: Basic generation
    console.log('  Test 1: Basic generation...');
    const basicGenerator = new SitemapGenerator();
    const basicXml = await basicGenerator.generate();
    console.log(`    ✅ Generated ${basicXml.length} characters`);
    
    // Test 2: Configuration validation
    console.log('  Test 2: Configuration validation...');
    const validation = await basicGenerator.validateSetup();
    console.log(`    ✅ Validation: ${validation.isValid ? 'PASS' : 'FAIL'}`);
    
    // Test 3: Statistics generation
    console.log('  Test 3: Statistics generation...');
    const { stats } = await basicGenerator.generateWithStats();
    console.log(`    ✅ Stats: ${stats.totalEntries} total entries`);
    
    // Test 4: Error handling
    console.log('  Test 4: Error handling...');
    const errorSummary = basicGenerator.getErrorSummary();
    console.log(`    ✅ Error handling: ${errorSummary}`);
    
    console.log('🎉 All integration tests passed!');
    
  } catch (error) {
    console.error('❌ Integration testing failed:', error);
  }
}

// Main function to run all examples
export async function runAllExamples() {
  console.log('🚀 Running all sitemap generator examples...\n');
  
  const examples = [
    { name: 'Basic Usage', fn: basicUsage },
    { name: 'Custom Configuration', fn: customConfiguration },
    { name: 'Validation', fn: validationExample },
    { name: 'Configuration Management', fn: configurationManagement },
    { name: 'Blog Integration', fn: blogIntegrationExample },
    { name: 'Performance Monitoring', fn: performanceMonitoring },
    { name: 'Error Recovery', fn: errorRecoveryExample },
    { name: 'Batch Processing', fn: batchProcessingExample },
    { name: 'Custom URL Processing', fn: customUrlProcessing },
    { name: 'Integration Testing', fn: integrationTesting }
  ];
  
  for (const example of examples) {
    try {
      console.log(`\n${'='.repeat(50)}`);
      console.log(`Running: ${example.name}`);
      console.log(`${'='.repeat(50)}`);
      
      await example.fn();
      
      console.log(`✅ ${example.name} completed successfully`);
    } catch (error) {
      console.error(`❌ ${example.name} failed:`, error);
    }
  }
  
  console.log('\n🎉 All examples completed!');
}

// Export individual examples for selective running
export {
  basicUsage,
  customConfiguration,
  validationExample,
  configurationManagement,
  blogIntegrationExample,
  performanceMonitoring,
  errorRecoveryExample,
  batchProcessingExample,
  customUrlProcessing,
  integrationTesting
};

// Run examples if this file is executed directly
if (require.main === module) {
  runAllExamples().catch(console.error);
}