import { config } from "dotenv";
import Joi, { ObjectSchema } from "joi";
import path from "path";
import Logger from "../util/logger";
config({ path: path.resolve(__dirname, "../../.env") });
import { Namespaces } from "../constants/namespace.constant";

/**
 * ==========================================================================
 * ------------------------------ ENVIRONMENT -------------------------------
 * ==========================================================================
 */
export const env = {
    isDev: String(process.env.NODE_ENV).toLowerCase().includes("development"),
    isTest: String(process.env.NODE_ENV).toLowerCase().includes("test"),
    isProd: String(process.env.NODE_ENV).toLowerCase().includes("production"),
    isStaging: String(process.env.NODE_ENV).toLowerCase().includes("staging"),
    env: process.env.NODE_ENV,
};

export const {
    USER_PORT,
    ADMIN_PORT,
    MONGO_DB_NAME,
    MONGO_URL,
    MONGO_URL_TEST,
} = process.env;

const logger = new Logger("general", Namespaces.MONGO_DATABASE);

const schema = Joi.object({});
const validateAppConfig = (
    schema: ObjectSchema,
    config: Record<string, unknown>
): void => {
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

export const validateEnv = () => {
    try {
        validateAppConfig(schema, process.env);
    } catch (e) {
        console.error("Can't start app. Env config invalid.");
        process.exit(1);
    }
};
