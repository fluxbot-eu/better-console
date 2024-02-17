
export declare class FileLogger {
    path: string;

    constructor(path: string);

    private addString(string: string): void;
}

interface ConfigData {
    display: string;
    filelogger: FileLogger;
}

export declare class ConsoleConfig {
    data: ConfigData

    constructor();

    /**
     * Sets the display to use for the console (see documentation)
     * @param {string} display  
     */
    public setDisplay(display: string): ConsoleConfig;

    /**
     * Sets the FileLogger to use (usually logs.log or logs.txt file)
     * @param {FileLogger} logger 
     */
    public setFileLogger(fileLogger: FileLogger): ConsoleConfig;
}

/**
 * Colors Enum
 * @readonly
 * @enum {string}
 */
export let Colors = {
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
}



export declare class ConsoleLogger {
    /** @type {string} */
    readonly display: string;
    /** @type {FileLogger} */
    readonly filelogger: FileLogger

    constructor(config: ConsoleConfig);

    /**
     * 
     * @private
     */
    private getDisplay(): string
    /**
     * 
     * @private
     */
    private parseDisplay(color: AcceptableColors, type: string, msgs: any[]): string;
    /**
     * 
     * @private
     */
    private parseDisplayNoColor(type: string, msgs: any[]): string;
    /**
     * 
     * @private
     */
    private addToFile(string: string): void;


    /**
     * Emits an info level log.
     * 
     * @param {any[]} args The arguments to pass to the console
     */
    public info(...args: any[]): void;
    /**
     * Emits an success level log.
     * 
     * @param {any[]} args The arguments to pass to the console
     */
    public success(...args: any[]): void;
    /**
     * Emits an warn level log.
     * 
     * @param {any[]} args The arguments to pass to the console
     */
    public warn(...args: any[]): void;
    /**
     * Emits an startup level log.
     * 
     * @param {any[]} args The arguments to pass to the console
     */
    public startup(...args: any[]): void;
    /**
     * Emits an error level log.
     * 
     * @param {any[]} args The arguments to pass to the console
     */
    public error(...args: any[]): void;
    /**
     * Emits an debug level log.
     * 
     * @param {any[]} args The arguments to pass to the console
     */
    public debug(...args: any[]): void;
    /**
     * Emits an database level log.
     * 
     * @param {any[]} args The arguments to pass to the console
     */
    public database(...args: any[]): void;
    /**
     * Emits an customized level log.
     * 
     * @param {String} prefix The prefix to use
     * @param {Colors} color The color to use (Colors.())
     * @param {any[]} args The arguments to pass to the console
     */
    public custom(prefix: string, color: Colors, ...args: any[]): void;
    
}