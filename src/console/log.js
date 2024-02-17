import { ColorObject } from '../colors.js';

/**
 * @namespace ConsoleLogger
 */
export class ConsoleLogger {
    display;
    filelogger;

    constructor(config) {
        this.display = config.data.display;
        this.filelogger = config.data.filelogger;
    }
    
    getDisplay() {
        if(this.display === "default") {
            return "{|} {ts} {type} {:} {msgs}"
        }

        return this.display
    }
    
    parseDisplay(color, type, msgs) {
        let display = this.getDisplay()
        display = display.replace(/{\|}/g, `${color}┃${ColorObject.Close}`)
            .replace(/{:}/g, `${ColorObject.Grey}:${ColorObject.Close}`)
            .replace(/{ts}/g, `${ColorObject.Grey}${new Date().toLocaleString()}${ColorObject.Close}`)
            .replace(/{type}/g, `${ColorObject.Grey}[${ColorObject.Close}${color}${type}${ColorObject.Close}${ColorObject.Grey}]${ColorObject.Close}`)
            .replace(/{msgs}/g, ColorObject.Reset + msgs.join(", "))

        return display;
    }

    parseDisplayNoColor(type, msgs) {
        let display = this.getDisplay()
        display = display.replace(/{\|}/g, `┃`)
            .replace(/{:}/g, `:`)
            .replace(/{ts}/g, `${new Date().toLocaleString()}`)
            .replace(/{type}/g, `[${type}]`)
            .replace(/{msgs}/g, msgs.join(", "))

        return display;
    }

    addToFile(string) {
        if(this.filelogger === null) return
        this.filelogger.addString(string + "\n")
    }

    info(...args) {
        let s = this.parseDisplay(ColorObject.Blue, "Info", args)
        console.log(s)
        this.addToFile(this.parseDisplayNoColor("Info", args))
    }

    success(...args) {
        let s = this.parseDisplay(ColorObject.Green, "Success", args)
        console.log(s)
        this.addToFile(this.parseDisplayNoColor("Success", args))
    }

    warn(...args) {
        let s = this.parseDisplay(ColorObject.Orange, "Warn", args)
        console.log(s)
        this.addToFile(this.parseDisplayNoColor("Warn", args))
    }

    startup(...args) {
        let s = this.parseDisplay(ColorObject.Cyan, "Startup", args)
        console.log(s)
        this.addToFile(this.parseDisplayNoColor("Startup", args))
    }

    error(...args) {
        let s = this.parseDisplay(ColorObject.Red, "Error", args)
        console.log(s)
        this.addToFile(this.parseDisplayNoColor("Error", args))
    }

    debug(...args) {
        let s = this.parseDisplay(ColorObject.Yellow, "Debug", args)
        console.log(s)
        this.addToFile(this.parseDisplayNoColor("Debug", args))
    }

    database(...args) {
        let s = this.parseDisplay(ColorObject.Magenta, "Database", args)
        console.log(s)
        this.addToFile(this.parseDisplayNoColor("Database", args))
    }

    custom(prefix, color, ...args) {
        let s = this.parseDisplay(color, prefix, args)
        console.log(s)
        this.addToFile(this.parseDisplayNoColor(prefix, args))
    }

}