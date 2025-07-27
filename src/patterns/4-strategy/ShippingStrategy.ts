/**
 * STRATEGY PATTERN
 * 
 * Real-life example: E-commerce Shipping Calculator
 * Use case: Calculate shipping costs using different strategies (Standard, Express, Overnight)
 * based on user selection without changing the main shipping logic.
 */

export interface ShippingInfo {
  weight: number; // in kg
  distance: number; // in km
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

// Strategy interface
export interface ShippingStrategy {
  calculateShipping(info: ShippingInfo): ShippingResult;
  getMethodName(): string;
}

// Concrete strategies
export class StandardShippingStrategy implements ShippingStrategy {
  calculateShipping(info: ShippingInfo): ShippingResult {
    const baseCost = 5.99;
    const weightCost = info.weight * 0.50;
    const distanceCost = info.distance * 0.001;
    const volumeCost = (info.dimensions.length * info.dimensions.width * info.dimensions.height) * 0.0001;
    
    return {
      cost: parseFloat((baseCost + weightCost + distanceCost + volumeCost).toFixed(2)),
      estimatedDays: Math.ceil(5 + (info.distance / 500)), // 5-7 days base + distance factor
      method: 'Standard Shipping',
      tracking: true,
      insurance: false
    };
  }

  getMethodName(): string {
    return 'Standard';
  }
}

export class ExpressShippingStrategy implements ShippingStrategy {
  calculateShipping(info: ShippingInfo): ShippingResult {
    const baseCost = 15.99;
    const weightCost = info.weight * 1.20;
    const distanceCost = info.distance * 0.003;
    const volumeCost = (info.dimensions.length * info.dimensions.width * info.dimensions.height) * 0.0003;
    const expressFee = 8.00;
    
    return {
      cost: parseFloat((baseCost + weightCost + distanceCost + volumeCost + expressFee).toFixed(2)),
      estimatedDays: Math.ceil(2 + (info.distance / 1000)), // 2-3 days base
      method: 'Express Shipping',
      tracking: true,
      insurance: true
    };
  }

  getMethodName(): string {
    return 'Express';
  }
}

export class OvernightShippingStrategy implements ShippingStrategy {
  calculateShipping(info: ShippingInfo): ShippingResult {
    const baseCost = 35.99;
    const weightCost = info.weight * 2.50;
    const distanceCost = info.distance * 0.005;
    const volumeCost = (info.dimensions.length * info.dimensions.width * info.dimensions.height) * 0.0005;
    const overnightFee = 25.00;
    
    // Overnight has distance limits
    if (info.distance > 1500) {
      throw new Error('Overnight shipping not available for distances over 1500km');
    }
    
    return {
      cost: parseFloat((baseCost + weightCost + distanceCost + volumeCost + overnightFee).toFixed(2)),
      estimatedDays: 1,
      method: 'Overnight Shipping',
      tracking: true,
      insurance: true
    };
  }

  getMethodName(): string {
    return 'Overnight';
  }
}

export class FreeShippingStrategy implements ShippingStrategy {
  private minimumOrderValue: number;

  constructor(minimumOrderValue: number = 50) {
    this.minimumOrderValue = minimumOrderValue;
  }

  calculateShipping(info: ShippingInfo): ShippingResult {
    return {
      cost: 0,
      estimatedDays: Math.ceil(7 + (info.distance / 300)), // Slower than standard
      method: `Free Shipping (min. order $${this.minimumOrderValue})`,
      tracking: true,
      insurance: false
    };
  }

  getMethodName(): string {
    return 'Free';
  }
}

// Context class
export class ShippingCalculator {
  private strategy: ShippingStrategy;

  constructor(strategy: ShippingStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: ShippingStrategy): void {
    this.strategy = strategy;
    console.log(`Shipping method changed to: ${strategy.getMethodName()}`);
  }

  calculateShipping(info: ShippingInfo): ShippingResult {
    try {
      const result = this.strategy.calculateShipping(info);
      console.log(`\n📦 Shipping calculated using ${this.strategy.getMethodName()} method:`);
      console.log(`   Cost: $${result.cost}`);
      console.log(`   Estimated delivery: ${result.estimatedDays} day(s)`);
      console.log(`   Method: ${result.method}`);
      console.log(`   Tracking: ${result.tracking ? 'Yes' : 'No'}`);
      console.log(`   Insurance: ${result.insurance ? 'Yes' : 'No'}`);
      return result;
    } catch (error) {
      console.error(`Error calculating shipping: ${error}`);
      throw error;
    }
  }

  compareAllMethods(info: ShippingInfo): ShippingResult[] {
    const strategies = [
      new StandardShippingStrategy(),
      new ExpressShippingStrategy(),
      new FreeShippingStrategy()
    ];

    // Add overnight if distance allows
    try {
      strategies.push(new OvernightShippingStrategy());
    } catch {
      // Overnight not available for this distance
    }

    console.log('\n📋 Comparing all shipping methods:');
    const results: ShippingResult[] = [];

    strategies.forEach(strategy => {
      try {
        const tempCalculator = new ShippingCalculator(strategy);
        const result = tempCalculator.calculateShipping(info);
        results.push(result);
      } catch (error) {
        console.log(`   ${strategy.getMethodName()}: Not available (${error})`);
      }
    });

    return results;
  }
}

// Example usage
export function demonstrateStrategy(): void {
  console.log('\n=== STRATEGY PATTERN DEMO ===');
  
  const packageInfo: ShippingInfo = {
    weight: 2.5, // 2.5 kg
    distance: 500, // 500 km
    dimensions: {
      length: 30,
      width: 20,
      height: 15
    },
    destination: 'New York'
  };

  console.log('Package details:');
  console.log(`   Weight: ${packageInfo.weight}kg`);
  console.log(`   Distance: ${packageInfo.distance}km`);
  console.log(`   Dimensions: ${packageInfo.dimensions.length}x${packageInfo.dimensions.width}x${packageInfo.dimensions.height}cm`);
  console.log(`   Destination: ${packageInfo.destination}`);

  // Start with standard shipping
  const calculator = new ShippingCalculator(new StandardShippingStrategy());
  calculator.calculateShipping(packageInfo);

  // Change to express shipping
  calculator.setStrategy(new ExpressShippingStrategy());
  calculator.calculateShipping(packageInfo);

  // Change to overnight shipping
  calculator.setStrategy(new OvernightShippingStrategy());
  calculator.calculateShipping(packageInfo);

  // Compare all methods
  const allResults = calculator.compareAllMethods(packageInfo);
  
  console.log('\n💰 Cost comparison:');
  const sortedResults = allResults.sort((a, b) => a.cost - b.cost);
  sortedResults.forEach((result, index) => {
    console.log(`   ${index + 1}. ${result.method}: $${result.cost} (${result.estimatedDays} days)`);
  });

  // Test with long distance (overnight should fail)
  console.log('\n--- Testing with long distance package ---');
  const longDistancePackage: ShippingInfo = {
    ...packageInfo,
    distance: 2000, // 2000 km - too far for overnight
    destination: 'Los Angeles'
  };

  console.log(`Package to ${longDistancePackage.destination} (${longDistancePackage.distance}km):`);
  const longDistanceCalculator = new ShippingCalculator(new StandardShippingStrategy());
  longDistanceCalculator.compareAllMethods(longDistancePackage);
}