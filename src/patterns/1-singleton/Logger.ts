/**
 * SINGLETON PATTERN
 * 
 * Real-life example: Application Logger
 * Use case: Ensure only one instance of logger exists throughout the application
 * to maintain consistent logging and avoid resource conflicts.
 */

export class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  // Private constructor prevents direct instantiation
  private constructor() {
    console.log('Logger instance created');
  }

  // Static method to get the single instance
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string, level: 'INFO' | 'ERROR' | 'WARN' = 'INFO'): void {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    this.logs.push(logEntry);
    console.log(logEntry);
  }

  public getLogs(): string[] {
    return [...this.logs]; // Return a copy to prevent external modification
  }

  public clearLogs(): void {
    this.logs = [];
    console.log('Logs cleared');
  }
}

// Example usage
export function demonstrateSingleton(): void {
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