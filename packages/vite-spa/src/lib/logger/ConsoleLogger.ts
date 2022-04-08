import {AbstractLogger} from './AbstractLogger'

export class ConsoleLogger extends AbstractLogger {
  log(...args: any[]): this {
    console.log('%c Logger ', 'background: green; color: white', ...args)
    return this
  }

  warn(...args: any[]): this {
    console.warn('%c Logger ', 'background: green; color: white', ...args)
    return this
  }
}
