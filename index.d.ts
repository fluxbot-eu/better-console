
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

export enum Colors {
    BgBlack = "\u001b[40m",
    BgBlue = "\u001b[44m",
    BgCyan = "\u001b[46m",
    BgGreen = "\u001b[42m",
    BgGrey = "\u001b[90m",
    BgMagenta = "\u001b[45m",
    BgRed = "\u001b[41m",
    BgWhite = "\u001b[47m",
    BgYellow = "\u001b[103m",
    BgOrange = "\x1b[48;5;202m",
    BgClose = "\u001b[49m",

    Black = "\u001b[30m",
    Blue = "\u001b[34m",
    Cyan = "\u001b[36m",
    Green = "\u001b[32m",
    Grey = "\u001b[90m",
    Magenta = "\u001b[35m",
    Red = "\u001b[31m",
    White = "\u001b[37m",
    Yellow = "\u001b[93m",
    Orange = "\x1b[38;5;208m",
    Close = "\u001b[39m",

    Reset = "\u001b[0m",
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
    private parseDisplay(color: Colors, type: string, msgs: any[]): string;
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