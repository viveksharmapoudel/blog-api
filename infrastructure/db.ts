import knex from "knex";
import { GetEnv } from "../config";

const db = knex({
	client: GetEnv("DB_CLIENT"),
	connection: {
		connectionTimeout: 10,
		host: GetEnv("DB_HOST"),
		user: GetEnv("DB_USER"),
		password: GetEnv("DB_PASSWORD"),
		database: GetEnv("DB_NAME"),
		port: GetEnv("DB_PORT"),
	},
	pool: { min: 0, max: 30, acquireTimeoutMillis: 60 * 1000 },
});

export { db };
