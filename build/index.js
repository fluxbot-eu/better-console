'use strict';

var fs = require('fs');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var fs__namespace = /*#__PURE__*/_interopNamespaceDefault(fs);

let ColorObject = Object.freeze({
    "BgBlack": "\u001b[40m",
    "BgBlue": "\u001b[44m",
    "BgCyan": "\u001b[46m",
    "BgGreen": "\u001b[42m",
    "BgGrey": "\u001b[90m",
    "BgMagenta": "\u001b[45m",
    "BgRed": "\u001b[41m",
    "BgWhite": "\u001b[47m",
    "BgYellow": "\u001b[103m",
    "BgOrange": "\x1b[48;5;202m",
    "BgClose": "\u001b[49m",

    "Black": "\u001b[30m",
    "Blue": "\u001b[34m",
    "Cyan": "\u001b[36m",
    "Green": "\u001b[32m",
    "Grey": "\u001b[90m",
    "Magenta": "\u001b[35m",
    "Red": "\u001b[31m",
    "White": "\u001b[37m",
    "Yellow": "\u001b[93m",
    "Orange": "\x1b[38;5;208m",
    "Close": "\u001b[39m",

    "Reset": "\u001b[0m",
});


/**
 * Colors Enum
 * @readonly
 * @enum {string}
 */
let Colors = {
    /** @member {string} */
    BgBlack: "\u001b[40m",
    /** @member {string} */
    BgBlue: "\u001b[44m",
    /** @member {string} */
    BgCyan: "\u001b[46m",
    /** @member {string} */
    BgGreen: "\u001b[42m",
    /** @member {string} */
    BgGrey: "\u001b[90m",
    /** @member {string} */
    BgMagenta: "\u001b[45m",
    /** @member {string} */
    BgRed: "\u001b[41m",
    /** @member {string} */
    BgWhite: "\u001b[47m",
    /** @member {string} */
    BgYellow: "\u001b[103m",
    /** @member {string} */
    BgOrange: "\x1b[48;5;202m",
    /** @member {string} */
    BgClose: "\u001b[49m",

    /** @member {string} */
    Black: "\u001b[30m",
    /** @member {string} */
    Blue: "\u001b[34m",
    /** @member {string} */
    Cyan: "\u001b[36m",
    /** @member {string} */
    Green: "\u001b[32m",
    /** @member {string} */
    Grey: "\u001b[90m",
    /** @member {string} */
    Magenta: "\u001b[35m",
    /** @member {string} */
    Red: "\u001b[31m",
    /** @member {string} */
    White: "\u001b[37m",
    /** @member {string} */
    Yellow: "\u001b[93m",
    /** @member {string} */
    Orange: "\x1b[38;5;208m",
    /** @member {string} */
    Close: "\u001b[39m",

    /** @member {string} */
    Reset: "\u001b[0m",
};

/**
 * @namespace ConsoleLogger
 */
class ConsoleLogger {
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
        let display = this.getDisplay();
        display = display.replace(/{\|}/g, `${color}┃${ColorObject.Close}`)
            .replace(/{:}/g, `${ColorObject.Grey}:${ColorObject.Close}`)
            .replace(/{ts}/g, `${ColorObject.Grey}${new Date().toLocaleString()}${ColorObject.Close}`)
            .replace(/{type}/g, `${ColorObject.Grey}[${ColorObject.Close}${color}${type}${ColorObject.Close}${ColorObject.Grey}]${ColorObject.Close}`)
            .replace(/{msgs}/g, ColorObject.Reset + msgs.join(", "));

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
        if(this.filelogger === null) return
        this.filelogger.addString(string + "\n");
    }

    info(...args) {
        let s = this.parseDisplay(ColorObject.Blue, "Info", args);
        console.log(s);
        this.addToFile(this.parseDisplayNoColor("Info", args));
    }

    success(...args) {
        let s = this.parseDisplay(ColorObject.Green, "Success", args);
        console.log(s);
        this.addToFile(this.parseDisplayNoColor("Success", args));
    }

    warn(...args) {
        let s = this.parseDisplay(ColorObject.Orange, "Warn", args);
        console.log(s);
        this.addToFile(this.parseDisplayNoColor("Warn", args));
    }

    startup(...args) {
        let s = this.parseDisplay(ColorObject.Cyan, "Startup", args);
        console.log(s);
        this.addToFile(this.parseDisplayNoColor("Startup", args));
    }

    error(...args) {
        let s = this.parseDisplay(ColorObject.Red, "Error", args);
        console.log(s);
        this.addToFile(this.parseDisplayNoColor("Error", args));
    }

    debug(...args) {
        let s = this.parseDisplay(ColorObject.Yellow, "Debug", args);
        console.log(s);
        this.addToFile(this.parseDisplayNoColor("Debug", args));
    }

    database(...args) {
        let s = this.parseDisplay(ColorObject.Magenta, "Database", args);
        console.log(s);
        this.addToFile(this.parseDisplayNoColor("Database", args));
    }

    custom(prefix, color, ...args) {
        let s = this.parseDisplay(color, prefix, args);
        console.log(s);
        this.addToFile(this.parseDisplayNoColor(prefix, args));
    }

}

class ConsoleConfig {
    data;

    constructor() {
        this.data = { display: "default", filelogger: null };
    }

    setDisplay(display) {
        this.data.display = display;
        return this;
    }

    setFileLogger(logger) {
        this.data.filelogger = logger;
        return this;
    }
}

class FileLogger {
    path;

    constructor(path) {
        this.path = path;
    }

    addString(string) {
        fs__namespace.appendFileSync(this.path, string);
    }
}

exports.Colors = Colors;
exports.ConsoleConfig = ConsoleConfig;
exports.ConsoleLogger = ConsoleLogger;
exports.FileLogger = FileLogger;
