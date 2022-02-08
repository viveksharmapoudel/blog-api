import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("blog", (table: Knex.TableBuilder) => {
		table.increments("id").primary();
		table.string("image");
		table.string("title", 200);
		table.string("contents", 1000);
		table.json("tags");
		table.timestamp("created_at").defaultTo(knex.fn.now());
		table.timestamp("updated_at").defaultTo(knex.fn.now());
		table.timestamp("deleted_at");
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropSchema("blog");
}
