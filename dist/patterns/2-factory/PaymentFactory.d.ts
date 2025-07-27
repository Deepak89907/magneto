/**
 * FACTORY PATTERN
 *
 * Real-life example: Payment Processing System
 * Use case: Create different payment processors (PayPal, Stripe, Bank Transfer)
 * without exposing the creation logic to the client.
 */
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
export declare class PayPalProcessor implements PaymentProcessor {
    processPayment(amount: number, currency: string): Promise<PaymentResult>;
    validatePayment(paymentData: any): boolean;
}
export declare class StripeProcessor implements PaymentProcessor {
    processPayment(amount: number, currency: string): Promise<PaymentResult>;
    validatePayment(paymentData: any): boolean;
}
export declare class BankTransferProcessor implements PaymentProcessor {
    processPayment(amount: number, currency: string): Promise<PaymentResult>;
    validatePayment(paymentData: any): boolean;
}
export declare class PaymentProcessorFactory {
    static createProcessor(type: 'paypal' | 'stripe' | 'bank'): PaymentProcessor;
    static getSupportedProcessors(): string[];
}
export declare function demonstrateFactory(): Promise<void>;
//# sourceMappingURL=PaymentFactory.d.ts.map