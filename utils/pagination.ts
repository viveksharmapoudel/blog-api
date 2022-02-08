import { PaginationDto } from "../models";

export const Pagination = (payload: any) => {
	const pagination: PaginationDto = {};
	pagination.keyword = "";
	pagination.offset = 0;
	pagination.limit = 10;
	pagination.sort_by = "created_at";
	pagination.sort_value = "desc";

	if (payload.page) {
		let offset = parseInt(payload.page) - 1;
		if (payload.limit) {
			const limit = parseInt(payload.limit);
			offset = offset * limit;
		}
		pagination.offset = offset;
	}
	if (payload.keyword) pagination.keyword = payload.keyword;
	if (payload.limit) pagination.limit = parseInt(payload.limit);
	if (payload.sort_by) pagination.sort_by = payload.sort_by;
	if (payload.sort_value) pagination.sort_value = payload.sort_value;

	return pagination;
};
