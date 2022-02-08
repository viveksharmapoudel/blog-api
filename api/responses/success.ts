import { Status, Error } from "./error";

export interface PaginationData {
    rows?: Array<any>,
    count?: number,
}

export interface SuccessMessage {
    message?: string;
    status?: Status;
}

export interface SuccessJson {
    message?: string;
    status?: Status;
    data?: any;
}

export interface SuccessWithPagination {
    message?: string;
    status?: Status;
    data?: PaginationData;
}

export const Response = {
    SuccessMessage: ({
        message = "N/A",
        status = { code: 200, success: true }
    }: SuccessMessage) => {
        return {
            message,
            status,
        }
    },
    SuccessJson: ({
        message = "N/A",
        status = { code: 200, success: true },
        data = {}
    }: SuccessJson) => {
        return {
            message,
            status,
            data,
        }
    },
    SuccessWithPagination: ({
        message = "N/A",
        status = { code: 200, success: true },
        data = {
            rows: [],
            count: 0,
        } }: SuccessWithPagination) => {
        return {
            message,
            status,
            data,
        }
    },
    Error: ({
        message = "Error Occured",
        status = { code: 500, success: false },
        error = {},
    }: Error) => {
        return {
            message,
            status,
            error,
        };
    },
};
