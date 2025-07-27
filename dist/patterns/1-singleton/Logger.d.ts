/**
 * SINGLETON PATTERN
 *
 * Real-life example: Application Logger
 * Use case: Ensure only one instance of logger exists throughout the application
 * to maintain consistent logging and avoid resource conflicts.
 */
export declare class Logger {
    private static instance;
    private logs;
    private constructor();
    static getInstance(): Logger;
    log(message: string, level?: 'INFO' | 'ERROR' | 'WARN'): void;
    getLogs(): string[];
    clearLogs(): void;
}
export declare function demonstrateSingleton(): void;
//# sourceMappingURL=Logger.d.ts.map