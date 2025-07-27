/**
 * STRATEGY PATTERN
 *
 * Real-life example: E-commerce Shipping Calculator
 * Use case: Calculate shipping costs using different strategies (Standard, Express, Overnight)
 * based on user selection without changing the main shipping logic.
 */
export interface ShippingInfo {
    weight: number;
    distance: number;
    dimensions: {
        length: number;
        width: number;
        height: number;
    };
    destination: string;
}
export interface ShippingResult {
    cost: number;
    estimatedDays: number;
    method: string;
    tracking: boolean;
    insurance: boolean;
}
export interface ShippingStrategy {
    calculateShipping(info: ShippingInfo): ShippingResult;
    getMethodName(): string;
}
export declare class StandardShippingStrategy implements ShippingStrategy {
    calculateShipping(info: ShippingInfo): ShippingResult;
    getMethodName(): string;
}
export declare class ExpressShippingStrategy implements ShippingStrategy {
    calculateShipping(info: ShippingInfo): ShippingResult;
    getMethodName(): string;
}
export declare class OvernightShippingStrategy implements ShippingStrategy {
    calculateShipping(info: ShippingInfo): ShippingResult;
    getMethodName(): string;
}
export declare class FreeShippingStrategy implements ShippingStrategy {
    private minimumOrderValue;
    constructor(minimumOrderValue?: number);
    calculateShipping(info: ShippingInfo): ShippingResult;
    getMethodName(): string;
}
export declare class ShippingCalculator {
    private strategy;
    constructor(strategy: ShippingStrategy);
    setStrategy(strategy: ShippingStrategy): void;
    calculateShipping(info: ShippingInfo): ShippingResult;
    compareAllMethods(info: ShippingInfo): ShippingResult[];
}
export declare function demonstrateStrategy(): void;
//# sourceMappingURL=ShippingStrategy.d.ts.map