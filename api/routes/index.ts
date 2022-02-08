import express, { Request, Response, NextFunction, Router } from "express";
import blogsRouter from "./blog";

const router: Router = express.Router();

router.get(
	"/health-check",
	(req: Request, res: Response, next: NextFunction) => {
		res.status(200).send("Server is running ");
	}
);

router.use("/api/blog", blogsRouter);

export default router;
