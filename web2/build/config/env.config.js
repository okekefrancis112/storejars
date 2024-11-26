"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = exports.MONGO_URL_TEST = exports.MONGO_URL = exports.MONGO_DB_NAME = exports.ADMIN_PORT = exports.USER_PORT = exports.env = void 0;
const dotenv_1 = require("dotenv");
const joi_1 = __importDefault(require("joi"));
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("../util/logger"));
(0, dotenv_1.config)({ path: path_1.default.resolve(__dirname, "../../.env") });
const namespace_constant_1 = require("../constants/namespace.constant");
exports.env = {
    isDev: String(process.env.NODE_ENV).toLowerCase().includes("development"),
    isTest: String(process.env.NODE_ENV).toLowerCase().includes("test"),
    isProd: String(process.env.NODE_ENV).toLowerCase().includes("production"),
    isStaging: String(process.env.NODE_ENV).toLowerCase().includes("staging"),
    env: process.env.NODE_ENV,
};
_a = process.env, exports.USER_PORT = _a.USER_PORT, exports.ADMIN_PORT = _a.ADMIN_PORT, exports.MONGO_DB_NAME = _a.MONGO_DB_NAME, exports.MONGO_URL = _a.MONGO_URL, exports.MONGO_URL_TEST = _a.MONGO_URL_TEST;
const logger = new logger_1.default("general", namespace_constant_1.Namespaces.MONGO_DATABASE);
const schema = joi_1.default.object({});
const validateAppConfig = (schema, config) => {
    const result = schema.validate(config, {
        abortEarly: false,
        allowUnknown: true,
    });
    if (result.error) {
        logger.error("Application configuration error.", {
            details: result.error.details,
        });
        throw result.error;
    }
};
const validateEnv = () => {
    try {
        validateAppConfig(schema, process.env);
    }
    catch (e) {
        console.error("Can't start app. Env config invalid.");
        process.exit(1);
    }
};
exports.validateEnv = validateEnv;
//# sourceMappingURL=env.config.js.map