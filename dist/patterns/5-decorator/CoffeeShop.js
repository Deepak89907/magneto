"use strict";
/**
 * DECORATOR PATTERN
 *
 * Real-life example: Coffee Shop Ordering System
 * Use case: Add different ingredients/modifications to coffee orders
 * without changing the base coffee classes. Each decorator adds cost and description.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeOrder = exports.TemperatureDecorator = exports.SizeDecorator = exports.ExtraShotDecorator = exports.WhippedCreamDecorator = exports.SyrupDecorator = exports.MilkDecorator = exports.CoffeeDecorator = exports.Latte = exports.Americano = exports.Espresso = void 0;
exports.demonstrateDecorator = demonstrateDecorator;
// Concrete component - Base coffees
class Espresso {
    getDescription() {
        return 'Espresso';
    }
    getCost() {
        return 2.50;
    }
    getIngredients() {
        return ['espresso'];
    }
}
exports.Espresso = Espresso;
class Americano {
    getDescription() {
        return 'Americano';
    }
    getCost() {
        return 3.00;
    }
    getIngredients() {
        return ['espresso', 'hot water'];
    }
}
exports.Americano = Americano;
class Latte {
    getDescription() {
        return 'Latte';
    }
    getCost() {
        return 4.50;
    }
    getIngredients() {
        return ['espresso', 'steamed milk'];
    }
}
exports.Latte = Latte;
// Base decorator
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    getDescription() {
        return this.coffee.getDescription();
    }
    getCost() {
        return this.coffee.getCost();
    }
    getIngredients() {
        return this.coffee.getIngredients();
    }
}
exports.CoffeeDecorator = CoffeeDecorator;
// Concrete decorators
class MilkDecorator extends CoffeeDecorator {
    constructor(coffee, milkType = 'regular') {
        super(coffee);
        this.milkType = milkType;
    }
    getDescription() {
        const milkDescription = this.milkType === 'regular' ? 'milk' : `${this.milkType} milk`;
        return `${this.coffee.getDescription()} with ${milkDescription}`;
    }
    getCost() {
        const milkCosts = {
            regular: 0.50,
            oat: 0.75,
            almond: 0.65,
            soy: 0.60
        };
        return this.coffee.getCost() + milkCosts[this.milkType];
    }
    getIngredients() {
        const milkName = this.milkType === 'regular' ? 'milk' : `${this.milkType} milk`;
        return [...this.coffee.getIngredients(), milkName];
    }
}
exports.MilkDecorator = MilkDecorator;
class SyrupDecorator extends CoffeeDecorator {
    constructor(coffee, syrupFlavor, pumps = 1) {
        super(coffee);
        this.syrupFlavor = syrupFlavor;
        this.pumps = pumps;
    }
    getDescription() {
        const pumpText = this.pumps === 1 ? 'pump' : 'pumps';
        return `${this.coffee.getDescription()} with ${this.pumps} ${pumpText} of ${this.syrupFlavor} syrup`;
    }
    getCost() {
        return this.coffee.getCost() + (this.pumps * 0.60);
    }
    getIngredients() {
        return [...this.coffee.getIngredients(), `${this.syrupFlavor} syrup`];
    }
}
exports.SyrupDecorator = SyrupDecorator;
class WhippedCreamDecorator extends CoffeeDecorator {
    getDescription() {
        return `${this.coffee.getDescription()} with whipped cream`;
    }
    getCost() {
        return this.coffee.getCost() + 0.75;
    }
    getIngredients() {
        return [...this.coffee.getIngredients(), 'whipped cream'];
    }
}
exports.WhippedCreamDecorator = WhippedCreamDecorator;
class ExtraShotDecorator extends CoffeeDecorator {
    constructor(coffee, shots = 1) {
        super(coffee);
        this.shots = shots;
    }
    getDescription() {
        const shotText = this.shots === 1 ? 'shot' : 'shots';
        return `${this.coffee.getDescription()} with ${this.shots} extra ${shotText}`;
    }
    getCost() {
        return this.coffee.getCost() + (this.shots * 0.80);
    }
    getIngredients() {
        const extraShots = Array(this.shots).fill('espresso shot');
        return [...this.coffee.getIngredients(), ...extraShots];
    }
}
exports.ExtraShotDecorator = ExtraShotDecorator;
class SizeDecorator extends CoffeeDecorator {
    constructor(coffee, size) {
        super(coffee);
        this.size = size;
    }
    getDescription() {
        return `${this.size.charAt(0).toUpperCase() + this.size.slice(1)} ${this.coffee.getDescription()}`;
    }
    getCost() {
        const sizeMultipliers = {
            small: 0.85,
            medium: 1.0,
            large: 1.25,
            'extra-large': 1.50
        };
        return this.coffee.getCost() * sizeMultipliers[this.size];
    }
    getIngredients() {
        return this.coffee.getIngredients();
    }
}
exports.SizeDecorator = SizeDecorator;
class TemperatureDecorator extends CoffeeDecorator {
    constructor(coffee, temperature) {
        super(coffee);
        this.temperature = temperature;
    }
    getDescription() {
        if (this.temperature === 'hot') {
            return this.coffee.getDescription(); // Hot is default
        }
        return `${this.temperature.charAt(0).toUpperCase() + this.temperature.slice(1)} ${this.coffee.getDescription()}`;
    }
    getCost() {
        // Iced drinks might have a small upcharge for ice and cold preparation
        return this.coffee.getCost() + (this.temperature === 'iced' ? 0.25 : 0);
    }
    getIngredients() {
        const ingredients = [...this.coffee.getIngredients()];
        if (this.temperature === 'iced') {
            ingredients.push('ice');
        }
        return ingredients;
    }
}
exports.TemperatureDecorator = TemperatureDecorator;
// Coffee shop order system
class CoffeeOrder {
    constructor() {
        this.items = [];
    }
    addCoffee(coffee) {
        this.items.push(coffee);
    }
    getTotal() {
        return parseFloat(this.items.reduce((total, coffee) => total + coffee.getCost(), 0).toFixed(2));
    }
    printReceipt() {
        console.log('\n☕ COFFEE SHOP RECEIPT ☕');
        console.log('='.repeat(40));
        this.items.forEach((coffee, index) => {
            console.log(`${index + 1}. ${coffee.getDescription()}`);
            console.log(`   Ingredients: ${coffee.getIngredients().join(', ')}`);
            console.log(`   Price: $${coffee.getCost().toFixed(2)}`);
            console.log('');
        });
        console.log('-'.repeat(40));
        console.log(`TOTAL: $${this.getTotal()}`);
        console.log('='.repeat(40));
    }
}
exports.CoffeeOrder = CoffeeOrder;
// Example usage
function demonstrateDecorator() {
    console.log('\n=== DECORATOR PATTERN DEMO ===');
    const order = new CoffeeOrder();
    // Simple espresso
    console.log('\n1. Creating a simple espresso...');
    let coffee1 = new Espresso();
    console.log(`${coffee1.getDescription()} - $${coffee1.getCost()}`);
    order.addCoffee(coffee1);
    // Complex latte with multiple decorators
    console.log('\n2. Creating a complex latte...');
    let coffee2 = new Latte();
    console.log(`Base: ${coffee2.getDescription()} - $${coffee2.getCost()}`);
    coffee2 = new SizeDecorator(coffee2, 'large');
    console.log(`+ Large size: ${coffee2.getDescription()} - $${coffee2.getCost()}`);
    coffee2 = new SyrupDecorator(coffee2, 'vanilla', 2);
    console.log(`+ Vanilla syrup: ${coffee2.getDescription()} - $${coffee2.getCost()}`);
    coffee2 = new WhippedCreamDecorator(coffee2);
    console.log(`+ Whipped cream: ${coffee2.getDescription()} - $${coffee2.getCost()}`);
    coffee2 = new MilkDecorator(coffee2, 'oat');
    console.log(`+ Oat milk: ${coffee2.getDescription()} - $${coffee2.getCost()}`);
    order.addCoffee(coffee2);
    // Iced americano with extra shot
    console.log('\n3. Creating an iced americano with extra shot...');
    let coffee3 = new Americano();
    coffee3 = new TemperatureDecorator(coffee3, 'iced');
    coffee3 = new ExtraShotDecorator(coffee3, 2);
    coffee3 = new SizeDecorator(coffee3, 'extra-large');
    console.log(`Final: ${coffee3.getDescription()} - $${coffee3.getCost()}`);
    order.addCoffee(coffee3);
    // Custom espresso creation
    console.log('\n4. Creating a custom espresso...');
    let coffee4 = new Espresso();
    coffee4 = new SizeDecorator(coffee4, 'medium');
    coffee4 = new ExtraShotDecorator(coffee4, 1);
    coffee4 = new SyrupDecorator(coffee4, 'caramel');
    coffee4 = new MilkDecorator(coffee4, 'almond');
    coffee4 = new TemperatureDecorator(coffee4, 'extra-hot');
    console.log(`Final: ${coffee4.getDescription()} - $${coffee4.getCost()}`);
    order.addCoffee(coffee4);
    // Print final receipt
    order.printReceipt();
    // Demonstrate flexibility - same base, different decorations
    console.log('\n--- Demonstrating Flexibility ---');
    console.log('Same base coffee (Latte), different customizations:');
    const baseLatte = new Latte();
    const student = new SizeDecorator(baseLatte, 'small');
    const business = new SizeDecorator(new ExtraShotDecorator(baseLatte), 'large');
    const luxury = new WhippedCreamDecorator(new SyrupDecorator(new MilkDecorator(new SizeDecorator(baseLatte, 'extra-large'), 'oat'), 'vanilla', 2));
    console.log(`Student special: ${student.getDescription()} - $${student.getCost()}`);
    console.log(`Business choice: ${business.getDescription()} - $${business.getCost()}`);
    console.log(`Luxury drink: ${luxury.getDescription()} - $${luxury.getCost()}`);
}
//# sourceMappingURL=CoffeeShop.js.map