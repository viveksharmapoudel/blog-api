import { BlogsDto, PaginationDto } from "../../models";
import { db } from "../../infrastructure";

export const AddBlog = (payload: BlogsDto) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await db()
				.insert({ ...payload, tags: JSON.stringify(payload.tags) })
				.into("blog");
			resolve(res);
		} catch (error) {
			reject({
				message: "Error Occured",
				error,
			});
		}
	});
};

export const GetAllBlog = (pagination: PaginationDto) => {
	return new Promise(async (resolve, reject) => {
		try {
			const rows = await db()
				.select("*")
				.from("blog")
				.where("title", "like", `%${pagination.keyword}%`)
				.limit(pagination.limit || 10)
				.offset(pagination.offset || 0)
				.orderBy(`${pagination.sort_by}`, pagination.sort_value);

			const count = await db()
				.select()
				.from("blog")
				.where("title", "like", `%${pagination.keyword}%`);

			resolve({ rows, count: count?.length || 0 });
		} catch (error) {
			reject({
				message: "Error Occured",
				error,
			});
		}
	});
};

export const GetOneBlog = (id: number) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await db().select("*").from("blog").where("id", id);
			resolve(res[0]);
		} catch (error) {
			reject({
				message: "Error Occured",
				error,
			});
		}
	});
};

export const DeleteOneBlog = (id: number) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await db().delete().from("blog").where("id", id);
			resolve(res);
		} catch (error) {
			reject({
				message: "Error Occured",
				error,
			});
		}
	});
};

export const UpdateOneBlog = (payload: BlogsDto, id: number) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await db()
				.update({ ...payload, tags: JSON.stringify(payload.tags) })
				.from("blog")
				.where("id", id);
			resolve(res);
		} catch (error) {
			reject({
				message: "Error Occured",
				error,
			});
		}
	});
};
