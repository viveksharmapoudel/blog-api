import knex from "knex";

const connection =
	require("../knexfile")[process.env.NODE_ENV || "development"];

const db = knex(connection);
export { db };
