import { BlogsDto, Blog, PaginationDto } from "../../models";
import * as blogService from "../services/blog";
import { Response } from "../responses";
import { Pagination } from "../../utils";

export const Addblog = (payload: BlogsDto) => {
	return new Promise(async (resolve, reject) => {
		try {
			await blogService.AddBlog(Blog(payload));
			resolve(Response.SuccessMessage({ message: "blogs Added Successfully" }));
		} catch (error) {
			reject(error);
		}
	});
};

export const GetAllblogs = (query: PaginationDto) => {
	return new Promise(async (resolve, reject) => {
		try {
			const data = await blogService.GetAllBlogs(Pagination(query));
			resolve(
				Response.SuccessJson({ message: "blogs Fetched Successfully", data })
			);
		} catch (error) {
			reject(error);
		}
	});
};

export const GetOneblog = (id: number) => {
	return new Promise(async (resolve, reject) => {
		try {
			const data = await blogService.GetOneBlog(id);
			resolve(
				Response.SuccessJson({ message: "blog Fetched Successfully", data })
			);
		} catch (error: any) {
			reject(error);
		}
	});
};

export const DeleteOneblog = (id: number) => {
	return new Promise(async (resolve, reject) => {
		try {
			await blogService.DeleteOneBlog(id);
			resolve(Response.SuccessJson({ message: "blog Deleted Successfully" }));
		} catch (error: any) {
			reject(error);
		}
	});
};

export const UpdateOneblog = (id: number, payload: BlogsDto) => {
	return new Promise(async (resolve, reject) => {
		try {
			const payloadData = Blog(payload);
			delete payloadData.id;
			await blogService.UpdateOneBlog(payloadData, id);
			resolve(
				Response.SuccessMessage({ message: "blog Updated Successfully" })
			);
		} catch (error: any) {
			reject(error);
		}
	});
};
