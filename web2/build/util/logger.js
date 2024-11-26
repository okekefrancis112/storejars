"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const dateFormat = () => {
    return new Date(Date.now()).toUTCString();
};
class LoggerService {
    constructor(route, namespace = undefined) {
        this.log_data = null;
        this.route = route;
        this.namespace = namespace;
        const logger = winston_1.default.createLogger({
            transports: [
                new winston_1.default.transports.Console({
                    format: winston_1.default.format.combine(winston_1.default.format.colorize()),
                    level: "info",
                    handleExceptions: true,
                }),
                new winston_1.default.transports.File({
                    filename: `./logs/${route}.log`,
                }),
            ],
            format: winston_1.default.format.printf((info) => {
                let message = `${dateFormat()} | ${namespace} | ${info.level.toUpperCase()} | ${route}.log | ${info.message}`;
                message = info.obj
                    ? message + `data:${JSON.stringify(info.obj)} | `
                    : message;
                message = this.log_data
                    ? message + `log_data:${JSON.stringify(this.log_data)} | `
                    : message;
                return message;
            }),
        });
        this.logger = logger;
    }
    setLogData(log_data) {
        this.log_data = log_data;
    }
    async info(message, obj = undefined) {
        this.logger.log("info", message, { obj });
    }
    async debug(message, obj = undefined) {
        this.logger.log("debug", message, {
            obj,
        });
    }
    async error(message, obj = undefined) {
        this.logger.log("error", message, {
            obj,
        });
    }
}
exports.default = LoggerService;
//# sourceMappingURL=logger.js.map