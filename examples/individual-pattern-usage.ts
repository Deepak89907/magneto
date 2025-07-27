/**
 * Individual Pattern Usage Examples
 * 
 * This file demonstrates how you can import and use individual design patterns
 * in your own TypeScript projects without running the full demonstration.
 */

// Import individual patterns
import { Logger } from '../src/patterns/1-singleton/Logger';
import { PaymentProcessorFactory, PaymentProcessor } from '../src/patterns/2-factory/PaymentFactory';
import { NewsletterPublisher, EmailSubscriber } from '../src/patterns/3-observer/NewsletterSystem';
import { ShippingCalculator, StandardShippingStrategy, ExpressShippingStrategy } from '../src/patterns/4-strategy/ShippingStrategy';
import { Espresso, SyrupDecorator, MilkDecorator } from '../src/patterns/5-decorator/CoffeeShop';
import { AudioPlayer } from '../src/patterns/6-adapter/MediaPlayer';

// Example 1: Using Singleton Logger in your application
function exampleSingletonUsage(): void {
  console.log('\n=== Example 1: Singleton Logger ===');
  
  const logger = Logger.getInstance();
  
  // Use throughout your application
  logger.log('Application starting...', 'INFO');
  logger.log('Database connected', 'INFO');
  logger.log('User authentication failed', 'ERROR');
  
  // Another part of your application
  const sameLogger = Logger.getInstance();
  sameLogger.log('Processing user request', 'INFO');
  
  console.log('Total logs:', sameLogger.getLogs().length);
}

// Example 2: Using Factory for payment processing
async function exampleFactoryUsage(): Promise<void> {
  console.log('\n=== Example 2: Factory Pattern ===');
  
  const userPaymentMethod = 'stripe'; // This could come from user input
  
  try {
    const processor: PaymentProcessor = PaymentProcessorFactory.createProcessor(userPaymentMethod);
    const result = await processor.processPayment(50.00, 'USD');
    
    console.log('Payment processed:', result.success);
    console.log('Transaction ID:', result.transactionId);
    console.log('Processing fee:', result.processingFee);
  } catch (error) {
    console.error('Payment failed:', error);
  }
}

// Example 3: Using Observer for event notifications
function exampleObserverUsage(): void {
  console.log('\n=== Example 3: Observer Pattern ===');
  
  const publisher = new NewsletterPublisher();
  
  // Add subscribers
  const subscriber1 = new EmailSubscriber({
    id: '1',
    email: 'user1@example.com',
    preferences: ['tech', 'news']
  });
  
  const subscriber2 = new EmailSubscriber({
    id: '2',
    email: 'user2@example.com',
    preferences: ['business']
  });
  
  publisher.subscribe(subscriber1);
  publisher.subscribe(subscriber2);
  
  // Publish content - only relevant subscribers will be notified
  publisher.publish({
    id: 'news-001',
    title: 'Breaking Tech News',
    content: 'Major breakthrough in AI development...',
    category: 'tech',
    publishDate: new Date()
  });
}

// Example 4: Using Strategy for runtime algorithm selection
function exampleStrategyUsage(): void {
  console.log('\n=== Example 4: Strategy Pattern ===');
  
  const packageInfo = {
    weight: 1.5,
    distance: 300,
    dimensions: { length: 20, width: 15, height: 10 },
    destination: 'Chicago'
  };
  
  // Start with standard shipping
  const calculator = new ShippingCalculator(new StandardShippingStrategy());
  const standardCost = calculator.calculateShipping(packageInfo);
  
  // Switch to express shipping for urgent delivery
  calculator.setStrategy(new ExpressShippingStrategy());
  const expressCost = calculator.calculateShipping(packageInfo);
  
  console.log(`Standard: $${standardCost.cost}, Express: $${expressCost.cost}`);
}

// Example 5: Using Decorator to build complex objects
function exampleDecoratorUsage(): void {
  console.log('\n=== Example 5: Decorator Pattern ===');
  
  // Build a custom coffee order step by step
  let coffee = new Espresso();
  console.log(`Base: ${coffee.getDescription()} - $${coffee.getCost()}`);
  
  // Add vanilla syrup
  coffee = new SyrupDecorator(coffee, 'vanilla');
  console.log(`+ Syrup: ${coffee.getDescription()} - $${coffee.getCost()}`);
  
  // Add oat milk
  coffee = new MilkDecorator(coffee, 'oat');
  console.log(`+ Milk: ${coffee.getDescription()} - $${coffee.getCost()}`);
  
  console.log(`Final ingredients: ${coffee.getIngredients().join(', ')}`);
}

// Example 6: Using Adapter to integrate different systems
function exampleAdapterUsage(): void {
  console.log('\n=== Example 6: Adapter Pattern ===');
  
  const mediaPlayer = new AudioPlayer();
  
  // Play different formats through the same interface
  const files = [
    { type: 'mp3', file: 'song.mp3' },
    { type: 'mp4', file: 'video.mp4' },
    { type: 'youtube', file: 'dQw4w9WgXcQ' }
  ];
  
  files.forEach(({ type, file }) => {
    mediaPlayer.play(type, file);
  });
}

// Real-world integration example
class UserService {
  private logger: Logger;
  private paymentFactory: typeof PaymentProcessorFactory;
  
  constructor() {
    this.logger = Logger.getInstance();
    this.paymentFactory = PaymentProcessorFactory;
  }
  
  async processUserOrder(userId: string, amount: number, paymentMethod: 'paypal' | 'stripe' | 'bank'): Promise<boolean> {
    try {
      this.logger.log(`Processing order for user ${userId}`, 'INFO');
      
      const processor = this.paymentFactory.createProcessor(paymentMethod);
      const result = await processor.processPayment(amount, 'USD');
      
      if (result.success) {
        this.logger.log(`Order processed successfully: ${result.transactionId}`, 'INFO');
        return true;
      } else {
        this.logger.log(`Order processing failed for user ${userId}`, 'ERROR');
        return false;
      }
    } catch (error) {
      this.logger.log(`Error processing order: ${error}`, 'ERROR');
      return false;
    }
  }
}

// Example of combining multiple patterns
async function exampleCombinedPatterns(): Promise<void> {
  console.log('\n=== Example 7: Combined Patterns ===');
  
  const userService = new UserService();
  
  // This combines Singleton (Logger) and Factory (PaymentProcessor) patterns
  const success = await userService.processUserOrder('user123', 99.99, 'stripe');
  console.log('Order processed:', success);
}

// Main function to run all examples
async function runExamples(): Promise<void> {
  console.log('🎯 Individual Pattern Usage Examples');
  console.log('='.repeat(50));
  
  exampleSingletonUsage();
  await exampleFactoryUsage();
  exampleObserverUsage();
  exampleStrategyUsage();
  exampleDecoratorUsage();
  exampleAdapterUsage();
  await exampleCombinedPatterns();
  
  console.log('\n✅ All examples completed!');
  console.log('💡 Copy these patterns into your own projects and adapt them to your needs.');
}

// Export for use in other files
export {
  exampleSingletonUsage,
  exampleFactoryUsage,
  exampleObserverUsage,
  exampleStrategyUsage,
  exampleDecoratorUsage,
  exampleAdapterUsage,
  UserService,
  runExamples
};

// Run examples if this file is executed directly
if (require.main === module) {
  runExamples().catch(console.error);
}