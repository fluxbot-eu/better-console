import * as fs from 'fs';

export class FileLogger {
    path;

    constructor(path) {
        this.path = path;
    }

    addString(string) {
        fs.appendFileSync(this.path, string)
    }
}