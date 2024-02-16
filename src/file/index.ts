import * as fs from 'fs';

export class FileLogger {
    path: string;

    constructor(path: string) {
        this.path = path;
    }

    update(string: string) {
        fs.appendFileSync(this.path, string)
    }
}