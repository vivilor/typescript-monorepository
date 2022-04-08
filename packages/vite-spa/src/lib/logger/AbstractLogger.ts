export abstract class AbstractLogger {
  public abstract log (...args: any[]): this
  public abstract warn (...args: any[]): this
}

