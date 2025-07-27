"use strict";
/**
 * FACTORY PATTERN
 *
 * Real-life example: Payment Processing System
 * Use case: Create different payment processors (PayPal, Stripe, Bank Transfer)
 * without exposing the creation logic to the client.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProcessorFactory = exports.BankTransferProcessor = exports.StripeProcessor = exports.PayPalProcessor = void 0;
exports.demonstrateFactory = demonstrateFactory;
// Concrete implementations
class PayPalProcessor {
    async processPayment(amount, currency) {
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
    validatePayment(paymentData) {
        return paymentData.email && paymentData.password;
    }
}
exports.PayPalProcessor = PayPalProcessor;
class StripeProcessor {
    async processPayment(amount, currency) {
        console.log(`Processing $${amount} ${currency} via Stripe...`);
        await new Promise(resolve => setTimeout(resolve, 800));
        return {
            success: true,
            transactionId: `ST_${Date.now()}`,
            message: 'Payment processed successfully via Stripe',
            processingFee: amount * 0.029 + 0.30
        };
    }
    validatePayment(paymentData) {
        return paymentData.cardNumber && paymentData.expiryDate && paymentData.cvv;
    }
}
exports.StripeProcessor = StripeProcessor;
class BankTransferProcessor {
    async processPayment(amount, currency) {
        console.log(`Processing $${amount} ${currency} via Bank Transfer...`);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Bank transfers take longer
        return {
            success: true,
            transactionId: `BT_${Date.now()}`,
            message: 'Bank transfer initiated successfully',
            processingFee: 5.00 // Fixed fee for bank transfers
        };
    }
    validatePayment(paymentData) {
        return paymentData.accountNumber && paymentData.routingNumber;
    }
}
exports.BankTransferProcessor = BankTransferProcessor;
// Factory class
class PaymentProcessorFactory {
    static createProcessor(type) {
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
    static getSupportedProcessors() {
        return ['paypal', 'stripe', 'bank'];
    }
}
exports.PaymentProcessorFactory = PaymentProcessorFactory;
// Example usage
async function demonstrateFactory() {
    console.log('\n=== FACTORY PATTERN DEMO ===');
    const amount = 100;
    const currency = 'USD';
    // Process payments using different processors
    const processorTypes = ['paypal', 'stripe', 'bank'];
    for (const type of processorTypes) {
        try {
            console.log(`\n--- Processing with ${type.toUpperCase()} ---`);
            const processor = PaymentProcessorFactory.createProcessor(type);
            const result = await processor.processPayment(amount, currency);
            console.log('Result:', result);
        }
        catch (error) {
            console.error(`Error processing payment with ${type}:`, error);
        }
    }
    console.log('\nSupported processors:', PaymentProcessorFactory.getSupportedProcessors());
}
//# sourceMappingURL=PaymentFactory.js.map