import ConsoleConfig from './config';
import { Colors, TsColors, colors } from '../colors/index';
import { FileLogger } from '../file';

export class ConsoleLogger {
    display: string;
    filelogger: FileLogger | null;

    constructor(config: ConsoleConfig) {
        this.display = config.data.display;
        this.filelogger = config.data.filelogger;
    }
    
    private getDisplay() {
        if(this.display === "default") {
            return "{|} {ts} {type} {:} {msgs}"
        }

        return this.display
    }

    private parseDisplay(color: string, type: string, msgs: any[]): string {
        let display = this.getDisplay()
        display = display.replace(/{\|}/g, `${color}┃${colors.Close}`)
            .replace(/{:}/g, `${colors.Grey}:${colors.Close}`)
            .replace(/{ts}/g, `${colors.Grey}${new Date().toLocaleString()}${colors.Close}`)
            .replace(/{type}/g, `${colors.Grey}[${colors.Close}${color}${type}${colors.Close}${colors.Grey}]${colors.Close}`)
            .replace(/{msgs}/g, colors.Reset + msgs.join(", "))

        return display;
    }

    private parseDisplayNoColor(type: string, msgs: any[]): string {
        let display = this.getDisplay()
        display = display.replace(/{\|}/g, `┃`)
            .replace(/{:}/g, `:`)
            .replace(/{ts}/g, `${new Date().toLocaleString()}`)
            .replace(/{type}/g, `[${type}]`)
            .replace(/{msgs}/g, msgs.join(", "))

        return display;
    }

    private addToFile(string: string) {
        if(this.filelogger === null) return

        this.filelogger.update(string + "\n")
    }

   /**
     * Emits an info level log.
     * 
     * @param {any[]} args 
     */
    
    info(...args: any[]) {
        let s = this.parseDisplay(Colors.Blue, "Info", args)
        console.log(s)
        this.addToFile(this.parseDisplayNoColor("Info", args))
    }

    /**
     * Emits an success level log.
     * 
     * @param {any[]} args 
     */

    success(...args: any[]) {
        let s = this.parseDisplay(Colors.Green, "Success", args)
        console.log(s)
        this.addToFile(this.parseDisplayNoColor("Success", args))
    }

    /**
     * Emits an warn level log.
     * 
     * @param {any[]} args 
     */

    warn(...args: any[]) {
        let s = this.parseDisplay(Colors.Orange, "Warn", args)
        console.log(s)
        this.addToFile(this.parseDisplayNoColor("Warn", args))
    }

    /**
     * Emits an startup level log.
     * 
     * @param {any[]} args 
     */

    startup(...args: any[]) {
        let s = this.parseDisplay(Colors.Cyan, "Startup", args)
        console.log(s)
        this.addToFile(this.parseDisplayNoColor("Startup", args))
    }

    /**
     * Emits an error level log.
     * 
     * @param {any[]} args 
     */

    error(...args: any[]) {
        let s = this.parseDisplay(Colors.Red, "Error", args)
        console.log(s)
        this.addToFile(this.parseDisplayNoColor("Error", args))
    }

    /**
     * Emits an debug level log.
     * 
     * @param {any[]} args 
     */

    debug(...args: any[]) {
        let s = this.parseDisplay(Colors.Yellow, "Debug", args)
        console.log(s)
        this.addToFile(this.parseDisplayNoColor("Debug", args))
    }

    /**
     * Emits an database level log.
     * 
     * @param {any[]} args 
     */

    database(...args: any[]) {
        let s = this.parseDisplay(Colors.Magenta, "Database", args)
        console.log(s)
        this.addToFile(this.parseDisplayNoColor("Database", args))
    }

    /**
     * 
     * @param {String} prefix The prefix to use
     * @param {keyof colors} color
     * @param {any[]} args
     */
    
    custom(prefix: string, color: TsColors, ...args: any[]) {
        let s = this.parseDisplay(color, prefix, args)
        console.log(s)
        this.addToFile(this.parseDisplayNoColor(prefix, args))
    }

}