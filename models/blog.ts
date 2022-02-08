import { BaseDTO } from "./index";

export interface BlogsDto extends BaseDTO {
	title?: string;
	contents?: string;
	image?: number;
	tags?: string[];
}

export const Blog = (payload: BlogsDto) => {
	const blogObject: BlogsDto = {};

	if (payload.title) blogObject.title = payload.title;
	if (payload.image) blogObject.image = payload.image;
	if (payload.contents) blogObject.contents = payload.contents;
	if (payload.tags) blogObject.tags = payload.tags;
	return blogObject;
};
