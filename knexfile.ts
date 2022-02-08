import type { Knex } from "knex";
import { GetEnv } from "./config";

const config: { [key: string]: Knex.Config } = {
	development: {
		client: "mysql2",
		connection: {
			host: GetEnv("DB_HOST"),
			port: GetEnv("DB_PORT"),
			database: GetEnv("DB_NAME"),
			user: GetEnv("DB_USER"),
			password: GetEnv("DB_PASSWORD"),
			charset: "utf8",
		},
		pool: {
			min: 0,
			max: 30,
			acquireTimeoutMillis: 60 * 1000,
		},
		migrations: {
			directory: "./migrations",
		},
	},

	staging: {
		client: "postgresql",
		connection: {
			database: "my_db",
			user: "username",
			password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},

	production: {
		client: "postgresql",
		connection: {
			database: "my_db",
			user: "username",
			password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},
};

module.exports = config;
