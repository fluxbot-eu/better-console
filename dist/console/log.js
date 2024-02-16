"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
const index_1 = require("../colors/index");
class ConsoleLogger {
    constructor(config) {
        this.display = config.data.display;
        this.filelogger = config.data.filelogger;
    }
    getDisplay() {
        if (this.display === "default") {
            return "{|} {ts} {type} {:} {msgs}";
        }
        return this.display;
    }
    parseDisplay(color, type, msgs) {
        let display = this.getDisplay();
        display = display.replace(/{\|}/g, `${color}┃${index_1.colors.Close}`)
            .replace(/{:}/g, `${index_1.colors.Grey}:${index_1.colors.Close}`)
            .replace(/{ts}/g, `${index_1.colors.Grey}${new Date().toLocaleString()}${index_1.colors.Close}`)
            .replace(/{type}/g, `${index_1.colors.Grey}[${index_1.colors.Close}${color}${type}${index_1.colors.Close}${index_1.colors.Grey}]${index_1.colors.Close}`)
            .replace(/{msgs}/g, index_1.colors.Reset + msgs.join(", "));
        return display;
    }
    parseDisplayNoColor(type, msgs) {
        let display = this.getDisplay();
        display = display.replace(/{\|}/g, `┃`)
            .replace(/{:}/g, `:`)
            .replace(/{ts}/g, `${new Date().toLocaleString()}`)
            .replace(/{type}/g, `[${type}]`)
            .replace(/{msgs}/g, msgs.join(", "));
        return display;
    }
    addToFile(string) {
        if (this.filelogger === null)
            return;
        this.filelogger.update(string + "\n");
    }
    /**
      * Emits an info level log.
      *
      * @param {any[]} args
      */
    info(...args) {
        let s = this.parseDisplay(index_1.Colors.Blue, "Info", args);
        console.log(s);
        this.addToFile(this.parseDisplayNoColor("Info", args));
    }
    /**
     * Emits an success level log.
     *
     * @param {any[]} args
     */
    success(...args) {
        let s = this.parseDisplay(index_1.Colors.Green, "Success", args);
        console.log(s);
        this.addToFile(this.parseDisplayNoColor("Success", args));
    }
    /**
     * Emits an warn level log.
     *
     * @param {any[]} args
     */
    warn(...args) {
        let s = this.parseDisplay(index_1.Colors.Orange, "Warn", args);
        console.log(s);
        this.addToFile(this.parseDisplayNoColor("Warn", args));
    }
    /**
     * Emits an startup level log.
     *
     * @param {any[]} args
     */
    startup(...args) {
        let s = this.parseDisplay(index_1.Colors.Cyan, "Startup", args);
        console.log(s);
        this.addToFile(this.parseDisplayNoColor("Startup", args));
    }
    /**
     * Emits an error level log.
     *
     * @param {any[]} args
     */
    error(...args) {
        let s = this.parseDisplay(index_1.Colors.Red, "Error", args);
        console.log(s);
        this.addToFile(this.parseDisplayNoColor("Error", args));
    }
    /**
     * Emits an debug level log.
     *
     * @param {any[]} args
     */
    debug(...args) {
        let s = this.parseDisplay(index_1.Colors.Yellow, "Debug", args);
        console.log(s);
        this.addToFile(this.parseDisplayNoColor("Debug", args));
    }
    /**
     * Emits an database level log.
     *
     * @param {any[]} args
     */
    database(...args) {
        let s = this.parseDisplay(index_1.Colors.Magenta, "Database", args);
        console.log(s);
        this.addToFile(this.parseDisplayNoColor("Database", args));
    }
    /**
     *
     * @param {String} prefix The prefix to use
     * @param {keyof colors} color
     * @param {any[]} args
     */
    custom(prefix, color, ...args) {
        let s = this.parseDisplay(color, prefix, args);
        console.log(s);
        this.addToFile(this.parseDisplayNoColor(prefix, args));
    }
}
exports.ConsoleLogger = ConsoleLogger;
