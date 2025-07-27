/**
 * FACTORY PATTERN
 * 
 * Real-life example: Payment Processing System
 * Use case: Create different payment processors (PayPal, Stripe, Bank Transfer)
 * without exposing the creation logic to the client.
 */

// Abstract Payment interface
export interface PaymentProcessor {
  processPayment(amount: number, currency: string): Promise<PaymentResult>;
  validatePayment(paymentData: any): boolean;
}

export interface PaymentResult {
  success: boolean;
  transactionId: string;
  message: string;
  processingFee?: number;
}

// Concrete implementations
export class PayPalProcessor implements PaymentProcessor {
  async processPayment(amount: number, currency: string): Promise<PaymentResult> {
    // Simulate PayPal processing
    console.log(`Processing $${amount} ${currency} via PayPal...`);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    
    return {
      success: true,
      transactionId: `PP_${Date.now()}`,
      message: 'Payment processed successfully via PayPal',
      processingFee: amount * 0.029 + 0.30 // PayPal's typical fee structure
    };
  }

  validatePayment(paymentData: any): boolean {
    return paymentData.email && paymentData.password;
  }
}

export class StripeProcessor implements PaymentProcessor {
  async processPayment(amount: number, currency: string): Promise<PaymentResult> {
    console.log(`Processing $${amount} ${currency} via Stripe...`);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      success: true,
      transactionId: `ST_${Date.now()}`,
      message: 'Payment processed successfully via Stripe',
      processingFee: amount * 0.029 + 0.30
    };
  }

  validatePayment(paymentData: any): boolean {
    return paymentData.cardNumber && paymentData.expiryDate && paymentData.cvv;
  }
}

export class BankTransferProcessor implements PaymentProcessor {
  async processPayment(amount: number, currency: string): Promise<PaymentResult> {
    console.log(`Processing $${amount} ${currency} via Bank Transfer...`);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Bank transfers take longer
    
    return {
      success: true,
      transactionId: `BT_${Date.now()}`,
      message: 'Bank transfer initiated successfully',
      processingFee: 5.00 // Fixed fee for bank transfers
    };
  }

  validatePayment(paymentData: any): boolean {
    return paymentData.accountNumber && paymentData.routingNumber;
  }
}

// Factory class
export class PaymentProcessorFactory {
  static createProcessor(type: 'paypal' | 'stripe' | 'bank'): PaymentProcessor {
    switch (type) {
      case 'paypal':
        return new PayPalProcessor();
      case 'stripe':
        return new StripeProcessor();
      case 'bank':
        return new BankTransferProcessor();
      default:
        throw new Error(`Unsupported payment processor type: ${type}`);
    }
  }

  static getSupportedProcessors(): string[] {
    return ['paypal', 'stripe', 'bank'];
  }
}

// Example usage
export async function demonstrateFactory(): Promise<void> {
  console.log('\n=== FACTORY PATTERN DEMO ===');
  
  const amount = 100;
  const currency = 'USD';
  
  // Process payments using different processors
  const processorTypes: ('paypal' | 'stripe' | 'bank')[] = ['paypal', 'stripe', 'bank'];
  
  for (const type of processorTypes) {
    try {
      console.log(`\n--- Processing with ${type.toUpperCase()} ---`);
      const processor = PaymentProcessorFactory.createProcessor(type);
      const result = await processor.processPayment(amount, currency);
      
      console.log('Result:', result);
    } catch (error) {
      console.error(`Error processing payment with ${type}:`, error);
    }
  }
  
  console.log('\nSupported processors:', PaymentProcessorFactory.getSupportedProcessors());
}