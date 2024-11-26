"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDatabase = void 0;
const mongoose_1 = require("mongoose");
const env_config_1 = require("../config/env.config");
const env_config_2 = require("../config/env.config");
const logger_1 = __importDefault(require("./logger"));
const namespace_constant_1 = require("../constants/namespace.constant");
const logger = new logger_1.default('general', namespace_constant_1.Namespaces.MONGO_DATABASE);
let attempts = 0;
const MONGO_CONNECT_URL = env_config_1.env.isTest ? env_config_2.MONGO_URL_TEST : env_config_2.MONGO_URL;
const initDatabase = async () => (0, mongoose_1.connect)(`${MONGO_CONNECT_URL}`, {
    connectTimeoutMS: 20000,
    socketTimeoutMS: 0,
    dbName: env_config_2.MONGO_DB_NAME,
})
    .then(({ connection }) => {
    logger.info(`Successfully Connected to MongoDB. ${connection.host}:${connection.port}/${env_config_2.MONGO_DB_NAME}`);
})
    .catch((error) => {
    const nextConnect = ++attempts * (Math.random() * 10000);
    if (attempts >= 5) {
        logger.error('Unable to establish database connection', {
            error,
        });
        process.exit(1);
    }
    logger.error(`[Attempt #${attempts}]. Unable to connect to Database (${env_config_2.MONGO_URL}): ${error}. Reconnecting in ${Math.floor(nextConnect / 1000)} seconds`);
    setTimeout(exports.initDatabase, nextConnect);
});
exports.initDatabase = initDatabase;
//# sourceMappingURL=mongo.js.map