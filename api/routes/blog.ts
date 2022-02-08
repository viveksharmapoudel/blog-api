import express, { Response, NextFunction, Router } from "express";
import * as BlogController from "../controllers/blog";
import { Error } from "../responses";

const blogsRouter: Router = express.Router();

blogsRouter.post("/", (req: any, res: Response, next: NextFunction) => {
	BlogController.Addblog(req.body)
		.then((response: any) => res.json(response))
		.catch((error: Error) => next(error));
});

blogsRouter.get("/", (req: any, res: Response, next: NextFunction) => {
	BlogController.GetAllblogs(req?.query)
		.then((response: any) => res.json(response))
		.catch((error: Error) => next(error));
});

blogsRouter.get("/:id", (req: any, res: Response, next: NextFunction) => {
	BlogController.GetOneblog(req?.params.id)
		.then((response: any) => res.json(response))
		.catch((error: Error) => next(error));
});

blogsRouter.delete("/:id", (req: any, res: Response, next: NextFunction) => {
	BlogController.DeleteOneblog(req?.params.id)
		.then((response: any) => res.json(response))
		.catch((error: Error) => next(error));
});

blogsRouter.put("/:id", (req: any, res: Response, next: NextFunction) => {
	BlogController.UpdateOneblog(req?.params.id, req?.body)
		.then((response: any) => res.json(response))
		.catch((error: Error) => next(error));
});

export default blogsRouter;
