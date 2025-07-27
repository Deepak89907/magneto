/**
 * DECORATOR PATTERN
 *
 * Real-life example: Coffee Shop Ordering System
 * Use case: Add different ingredients/modifications to coffee orders
 * without changing the base coffee classes. Each decorator adds cost and description.
 */
export interface Coffee {
    getDescription(): string;
    getCost(): number;
    getIngredients(): string[];
}
export declare class Espresso implements Coffee {
    getDescription(): string;
    getCost(): number;
    getIngredients(): string[];
}
export declare class Americano implements Coffee {
    getDescription(): string;
    getCost(): number;
    getIngredients(): string[];
}
export declare class Latte implements Coffee {
    getDescription(): string;
    getCost(): number;
    getIngredients(): string[];
}
export declare abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;
    constructor(coffee: Coffee);
    getDescription(): string;
    getCost(): number;
    getIngredients(): string[];
}
export declare class MilkDecorator extends CoffeeDecorator {
    private milkType;
    constructor(coffee: Coffee, milkType?: 'regular' | 'oat' | 'almond' | 'soy');
    getDescription(): string;
    getCost(): number;
    getIngredients(): string[];
}
export declare class SyrupDecorator extends CoffeeDecorator {
    private syrupFlavor;
    private pumps;
    constructor(coffee: Coffee, syrupFlavor: string, pumps?: number);
    getDescription(): string;
    getCost(): number;
    getIngredients(): string[];
}
export declare class WhippedCreamDecorator extends CoffeeDecorator {
    getDescription(): string;
    getCost(): number;
    getIngredients(): string[];
}
export declare class ExtraShotDecorator extends CoffeeDecorator {
    private shots;
    constructor(coffee: Coffee, shots?: number);
    getDescription(): string;
    getCost(): number;
    getIngredients(): string[];
}
export declare class SizeDecorator extends CoffeeDecorator {
    private size;
    constructor(coffee: Coffee, size: 'small' | 'medium' | 'large' | 'extra-large');
    getDescription(): string;
    getCost(): number;
    getIngredients(): string[];
}
export declare class TemperatureDecorator extends CoffeeDecorator {
    private temperature;
    constructor(coffee: Coffee, temperature: 'iced' | 'hot' | 'extra-hot');
    getDescription(): string;
    getCost(): number;
    getIngredients(): string[];
}
export declare class CoffeeOrder {
    private items;
    addCoffee(coffee: Coffee): void;
    getTotal(): number;
    printReceipt(): void;
}
export declare function demonstrateDecorator(): void;
//# sourceMappingURL=CoffeeShop.d.ts.map