import { FileLogger } from "../file";

interface ConfigData {
    display: string;
    filelogger: FileLogger | null;
}

export default class ConsoleConfig {
    data: ConfigData;

    constructor() {
        this.data = { display: "default", filelogger: null }
    }

    setDisplay(display: string) {
        this.data.display = display;
        return this;
    }

    setFileLogger(logger: FileLogger) {
        this.data.filelogger = logger;
        return this;
    }
}

