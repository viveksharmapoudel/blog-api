import Knex from "knex";
import { GetEnv } from "./config";

const connection = {
	host: GetEnv("DB_HOST"),
	user: GetEnv("DB_USER"),
	password: GetEnv("DB_PASSWORD"),
};

export const Migration = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			let knex = Knex({
				client: "mysql2",
				connection,
			});
			await knex.raw("CREATE DATABASE IF NOT EXISTS ??", GetEnv("DB_NAME"));
			knex = Knex({
				client: "mysql2",
				connection: {
					...connection,
					database: GetEnv("DB_NAME"),
				},
				migrations: {
					directory: "./migrations",
				},
			});
			await knex.migrate.latest();
			resolve("");
		} catch (e) {
			reject(e);
		}
	});
};
