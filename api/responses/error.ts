export interface Status {
	success?: boolean;
	code?: number;
}
export interface Error {
	message?: string;
	status?: Status;
	error?: Object;
}
