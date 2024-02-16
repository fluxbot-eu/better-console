"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleConfig {
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
exports.default = ConsoleConfig;
