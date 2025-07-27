"use strict";
/**
 * SINGLETON PATTERN
 *
 * Real-life example: Application Logger
 * Use case: Ensure only one instance of logger exists throughout the application
 * to maintain consistent logging and avoid resource conflicts.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
exports.demonstrateSingleton = demonstrateSingleton;
class Logger {
    // Private constructor prevents direct instantiation
    constructor() {
        this.logs = [];
        console.log('Logger instance created');
    }
    // Static method to get the single instance
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message, level = 'INFO') {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level}] ${message}`;
        this.logs.push(logEntry);
        console.log(logEntry);
    }
    getLogs() {
        return [...this.logs]; // Return a copy to prevent external modification
    }
    clearLogs() {
        this.logs = [];
        console.log('Logs cleared');
    }
}
exports.Logger = Logger;
// Example usage
function demonstrateSingleton() {
    console.log('\n=== SINGLETON PATTERN DEMO ===');
    // Try to create multiple instances
    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();
    console.log('Are both loggers the same instance?', logger1 === logger2); // true
    logger1.log('User logged in', 'INFO');
    logger2.log('Database connection established', 'INFO');
    logger1.log('Invalid input detected', 'ERROR');
    console.log('\nAll logs from logger1:');
    logger1.getLogs().forEach(log => console.log(log));
    console.log('\nAll logs from logger2 (should be the same):');
    logger2.getLogs().forEach(log => console.log(log));
}
//# sourceMappingURL=Logger.js.map