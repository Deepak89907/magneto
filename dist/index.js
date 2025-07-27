"use strict";
/**
 * TypeScript Design Patterns - Real Life Examples
 *
 * This file demonstrates various design patterns implemented in TypeScript
 * with practical, real-world scenarios that you might encounter in software development.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.demonstrateAdapter = exports.demonstrateDecorator = exports.demonstrateStrategy = exports.demonstrateObserver = exports.demonstrateFactory = exports.demonstrateSingleton = void 0;
const Logger_1 = require("./patterns/1-singleton/Logger");
Object.defineProperty(exports, "demonstrateSingleton", { enumerable: true, get: function () { return Logger_1.demonstrateSingleton; } });
const PaymentFactory_1 = require("./patterns/2-factory/PaymentFactory");
Object.defineProperty(exports, "demonstrateFactory", { enumerable: true, get: function () { return PaymentFactory_1.demonstrateFactory; } });
const NewsletterSystem_1 = require("./patterns/3-observer/NewsletterSystem");
Object.defineProperty(exports, "demonstrateObserver", { enumerable: true, get: function () { return NewsletterSystem_1.demonstrateObserver; } });
const ShippingStrategy_1 = require("./patterns/4-strategy/ShippingStrategy");
Object.defineProperty(exports, "demonstrateStrategy", { enumerable: true, get: function () { return ShippingStrategy_1.demonstrateStrategy; } });
const CoffeeShop_1 = require("./patterns/5-decorator/CoffeeShop");
Object.defineProperty(exports, "demonstrateDecorator", { enumerable: true, get: function () { return CoffeeShop_1.demonstrateDecorator; } });
const MediaPlayer_1 = require("./patterns/6-adapter/MediaPlayer");
Object.defineProperty(exports, "demonstrateAdapter", { enumerable: true, get: function () { return MediaPlayer_1.demonstrateAdapter; } });
function printIntroduction() {
    console.log('🚀 Welcome to TypeScript Design Patterns!');
    console.log('='.repeat(60));
    console.log('This demonstration showcases 6 essential design patterns');
    console.log('with real-world examples that you can use in your projects.');
    console.log('='.repeat(60));
}
function printPatternSummary() {
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
function printTips() {
    console.log('\n💡 TIPS FOR USING DESIGN PATTERNS');
    console.log('='.repeat(60));
    console.log('✅ Don\'t force patterns - use them when they solve real problems');
    console.log('✅ Start simple and refactor to patterns when complexity grows');
    console.log('✅ Understand the problem before choosing a pattern');
    console.log('✅ Consider TypeScript-specific features (interfaces, generics, etc.)');
    console.log('✅ Focus on maintainability and readability');
    console.log('✅ Test your pattern implementations thoroughly');
}
async function runAllDemonstrations() {
    try {
        // Run all pattern demonstrations
        (0, Logger_1.demonstrateSingleton)();
        await (0, PaymentFactory_1.demonstrateFactory)();
        (0, NewsletterSystem_1.demonstrateObserver)();
        (0, ShippingStrategy_1.demonstrateStrategy)();
        (0, CoffeeShop_1.demonstrateDecorator)();
        (0, MediaPlayer_1.demonstrateAdapter)();
    }
    catch (error) {
        console.error('❌ Error running demonstrations:', error);
    }
}
async function main() {
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
//# sourceMappingURL=index.js.map