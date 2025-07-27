/**
 * TypeScript Design Patterns - Real Life Examples
 * 
 * This file demonstrates various design patterns implemented in TypeScript
 * with practical, real-world scenarios that you might encounter in software development.
 */

import { demonstrateSingleton } from './patterns/1-singleton/Logger';
import { demonstrateFactory } from './patterns/2-factory/PaymentFactory';
import { demonstrateObserver } from './patterns/3-observer/NewsletterSystem';
import { demonstrateStrategy } from './patterns/4-strategy/ShippingStrategy';
import { demonstrateDecorator } from './patterns/5-decorator/CoffeeShop';
import { demonstrateAdapter } from './patterns/6-adapter/MediaPlayer';

function printIntroduction(): void {
  console.log('🚀 Welcome to TypeScript Design Patterns!');
  console.log('='.repeat(60));
  console.log('This demonstration showcases 6 essential design patterns');
  console.log('with real-world examples that you can use in your projects.');
  console.log('='.repeat(60));
}

function printPatternSummary(): void {
  console.log('\n📚 DESIGN PATTERNS SUMMARY');
  console.log('='.repeat(60));
  
  const patterns = [
    {
      name: 'Singleton',
      purpose: 'Ensure a class has only one instance',
      example: 'Application Logger',
      useCase: 'Global configuration, database connections'
    },
    {
      name: 'Factory',
      purpose: 'Create objects without specifying exact classes',
      example: 'Payment Processors',
      useCase: 'API integrations, plugin systems'
    },
    {
      name: 'Observer',
      purpose: 'Notify multiple objects about state changes',
      example: 'Newsletter Subscriptions',
      useCase: 'Event systems, real-time updates'
    },
    {
      name: 'Strategy',
      purpose: 'Choose algorithms at runtime',
      example: 'Shipping Calculators',
      useCase: 'Pricing engines, sorting algorithms'
    },
    {
      name: 'Decorator',
      purpose: 'Add behavior to objects dynamically',
      example: 'Coffee Shop Orders',
      useCase: 'Feature toggles, middleware, UI components'
    },
    {
      name: 'Adapter',
      purpose: 'Make incompatible interfaces work together',
      example: 'Media Players',
      useCase: 'Third-party integrations, legacy systems'
    }
  ];

  patterns.forEach((pattern, index) => {
    console.log(`\n${index + 1}. ${pattern.name.toUpperCase()} PATTERN`);
    console.log(`   Purpose: ${pattern.purpose}`);
    console.log(`   Example: ${pattern.example}`);
    console.log(`   Use Cases: ${pattern.useCase}`);
  });
}

function printTips(): void {
  console.log('\n💡 TIPS FOR USING DESIGN PATTERNS');
  console.log('='.repeat(60));
  console.log('✅ Don\'t force patterns - use them when they solve real problems');
  console.log('✅ Start simple and refactor to patterns when complexity grows');
  console.log('✅ Understand the problem before choosing a pattern');
  console.log('✅ Consider TypeScript-specific features (interfaces, generics, etc.)');
  console.log('✅ Focus on maintainability and readability');
  console.log('✅ Test your pattern implementations thoroughly');
}

async function runAllDemonstrations(): Promise<void> {
  try {
    // Run all pattern demonstrations
    demonstrateSingleton();
    
    await demonstrateFactory();
    
    demonstrateObserver();
    
    demonstrateStrategy();
    
    demonstrateDecorator();
    
    demonstrateAdapter();
    
  } catch (error) {
    console.error('❌ Error running demonstrations:', error);
  }
}

async function main(): Promise<void> {
  printIntroduction();
  
  // Run all demonstrations
  await runAllDemonstrations();
  
  // Print educational content
  printPatternSummary();
  printTips();
  
  console.log('\n🎉 Thank you for exploring TypeScript Design Patterns!');
  console.log('Feel free to explore the source code and adapt these examples');
  console.log('to your own projects. Happy coding! 🚀');
}

// Run the main function
if (require.main === module) {
  main().catch(console.error);
}

export {
  demonstrateSingleton,
  demonstrateFactory,
  demonstrateObserver,
  demonstrateStrategy,
  demonstrateDecorator,
  demonstrateAdapter
};