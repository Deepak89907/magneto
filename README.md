# TypeScript Design Patterns - Real Life Examples

A comprehensive collection of design patterns implemented in TypeScript with practical, real-world examples that you can use in your projects.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run all pattern demonstrations
npm run dev

# Build the project
npm run build

# Run compiled version
npm start
```

## 📚 Design Patterns Included

### 1. **Singleton Pattern** - Application Logger
- **Purpose**: Ensure a class has only one instance
- **Real-world example**: Application-wide logger system
- **Use cases**: Database connections, configuration managers, caching systems
- **Key benefits**: Global access point, resource conservation, consistency

### 2. **Factory Pattern** - Payment Processing
- **Purpose**: Create objects without specifying their exact classes
- **Real-world example**: Payment processor factory (PayPal, Stripe, Bank Transfer)
- **Use cases**: API integrations, plugin systems, service providers
- **Key benefits**: Loose coupling, easy extensibility, encapsulated creation logic

### 3. **Observer Pattern** - Newsletter System
- **Purpose**: Notify multiple objects about state changes
- **Real-world example**: Newsletter subscription system with multiple notification channels
- **Use cases**: Event systems, real-time updates, MVC architectures
- **Key benefits**: Loose coupling, dynamic relationships, broadcast communication

### 4. **Strategy Pattern** - Shipping Calculator
- **Purpose**: Choose algorithms at runtime
- **Real-world example**: E-commerce shipping cost calculation (Standard, Express, Overnight)
- **Use cases**: Pricing engines, sorting algorithms, payment processing
- **Key benefits**: Runtime algorithm selection, easy testing, clean code organization

### 5. **Decorator Pattern** - Coffee Shop
- **Purpose**: Add behavior to objects dynamically
- **Real-world example**: Coffee ordering system with customizable ingredients
- **Use cases**: Feature toggles, middleware, UI component enhancement
- **Key benefits**: Flexible object composition, runtime behavior modification, single responsibility

### 6. **Adapter Pattern** - Media Player
- **Purpose**: Make incompatible interfaces work together
- **Real-world example**: Universal media player supporting multiple formats
- **Use cases**: Third-party integrations, legacy system integration, API wrappers
- **Key benefits**: Interface compatibility, code reusability, legacy system integration

## 🏗️ Project Structure

```
src/
├── patterns/
│   ├── 1-singleton/
│   │   └── Logger.ts              # Application logger implementation
│   ├── 2-factory/
│   │   └── PaymentFactory.ts      # Payment processor factory
│   ├── 3-observer/
│   │   └── NewsletterSystem.ts    # Newsletter subscription system
│   ├── 4-strategy/
│   │   └── ShippingStrategy.ts    # Shipping calculation strategies
│   ├── 5-decorator/
│   │   └── CoffeeShop.ts          # Coffee ordering with decorators
│   └── 6-adapter/
│       └── MediaPlayer.ts         # Universal media player adapter
└── index.ts                       # Main demonstration file
```

## 💡 Key Features

- **Real-world scenarios**: Each pattern solves actual business problems
- **TypeScript best practices**: Proper interfaces, types, and modern syntax
- **Comprehensive examples**: Multiple use cases for each pattern
- **Educational comments**: Detailed explanations of pattern benefits
- **Runnable demonstrations**: Interactive examples you can execute
- **Production-ready**: Code quality suitable for real projects

## 🎯 Learning Objectives

After exploring this repository, you'll understand:

- When and why to use each design pattern
- How to implement patterns using TypeScript features
- Real-world applications of design patterns
- Trade-offs and considerations for each pattern
- How patterns can improve code maintainability and flexibility

## 🛠️ Technologies Used

- **TypeScript 5.0+**: Modern TypeScript with strict type checking
- **Node.js**: Runtime environment
- **ts-node**: Direct TypeScript execution for development

## 📖 Usage Examples

### Running Individual Patterns

```typescript
import { demonstrateSingleton } from './patterns/1-singleton/Logger';
import { demonstrateFactory } from './patterns/2-factory/PaymentFactory';

// Run specific pattern demonstration
demonstrateSingleton();
await demonstrateFactory();
```

### Using Patterns in Your Code

```typescript
// Singleton: Application Logger
const logger = Logger.getInstance();
logger.log('Application started', 'INFO');

// Factory: Payment Processing
const processor = PaymentProcessorFactory.createProcessor('stripe');
await processor.processPayment(100, 'USD');

// Strategy: Shipping Calculation
const calculator = new ShippingCalculator(new ExpressShippingStrategy());
const result = calculator.calculateShipping(packageInfo);
```

## 🎨 Pattern Categories

### Creational Patterns
- **Singleton**: Control object instantiation
- **Factory**: Encapsulate object creation

### Behavioral Patterns
- **Observer**: Define subscription mechanisms
- **Strategy**: Encapsulate algorithms

### Structural Patterns
- **Decorator**: Extend object functionality
- **Adapter**: Bridge incompatible interfaces

## 🔧 Development

### Prerequisites
- Node.js 16+
- npm or yarn

### Setup
```bash
git clone <repository-url>
cd typescript-design-patterns
npm install
```

### Available Scripts
- `npm run dev`: Run with ts-node for development
- `npm run build`: Compile TypeScript to JavaScript
- `npm start`: Run compiled JavaScript
- `npm run watch`: Watch mode compilation

## 💭 Best Practices

1. **Don't overuse patterns**: Use them when they solve real problems
2. **Start simple**: Refactor to patterns when complexity grows
3. **Understand the problem**: Choose the right pattern for the situation
4. **Leverage TypeScript**: Use interfaces, generics, and type safety
5. **Focus on maintainability**: Patterns should make code easier to understand
6. **Test thoroughly**: Ensure pattern implementations work correctly

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Ideas for contributions:

- Additional design patterns (Command, State, Proxy, etc.)
- More real-world examples
- Performance optimizations
- Better documentation
- Unit tests

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♂️ Questions or Issues?

If you have questions about design patterns or find issues with the implementations, please open an issue on GitHub. This project is meant to be educational, so don't hesitate to ask for clarifications!

---

Happy coding! 🚀 Remember: the best pattern is the one that solves your specific problem clearly and maintainably.
