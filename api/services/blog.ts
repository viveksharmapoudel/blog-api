import { PaginationDto, BlogsDto } from "../../models";
import * as BlogRepo from "../repository/blog";

export const AddBlog = (payload: BlogsDto) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await BlogRepo.AddBlog(payload);
			resolve(res);
		} catch (error) {
			reject(error);
		}
	});
};

export const GetAllBlogs = (pagination: PaginationDto) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await BlogRepo.GetAllBlog(pagination);
			resolve(res);
		} catch (error) {
			reject(error);
		}
	});
};

export const GetOneBlog = (id: number) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await BlogRepo.GetOneBlog(id);
			resolve(res);
		} catch (error) {
			reject(error);
		}
	});
};

export const DeleteOneBlog = (id: number) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await BlogRepo.DeleteOneBlog(id);
			resolve(res);
		} catch (error) {
			reject(error);
		}
	});
};

export const UpdateOneBlog = (payload: BlogsDto, id: number) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await BlogRepo.UpdateOneBlog(payload, id);
			resolve(res);
		} catch (error) {
			reject(error);
		}
	});
};
