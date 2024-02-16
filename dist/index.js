"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = exports.FileLogger = exports.ConsoleConfig = exports.ConsoleLogger = void 0;
const log_1 = require("./console/log");
Object.defineProperty(exports, "ConsoleLogger", { enumerable: true, get: function () { return log_1.ConsoleLogger; } });
const config_1 = __importDefault(require("./console/config"));
exports.ConsoleConfig = config_1.default;
const file_1 = require("./file");
Object.defineProperty(exports, "FileLogger", { enumerable: true, get: function () { return file_1.FileLogger; } });
const colors_1 = require("./colors");
Object.defineProperty(exports, "Colors", { enumerable: true, get: function () { return colors_1.Colors; } });
