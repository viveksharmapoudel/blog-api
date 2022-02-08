import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
const nodeadmin = require("nodeadmin");
import logger from "morgan";
import cors from "cors";

const app: Application = express();
import router from "./api/routes";
import { Error } from "./api/responses";
import { GetEnv } from "./config";
import { Migration } from "./migration";
const PORT = GetEnv("PORT") || 9000;

app.use(cors());
app.use(function (req: Request, res: Response, next: NextFunction) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
	);
	if (req.method === "OPTIONS") {
		res
			.status(200)
			.header("Content-Length", "0")
			.header("Access-Control-Allow-Origin", "*")
			.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE")
			.send();
	}
	next();
});

app.use(express.json());
app.use(bodyParser.json({ limit: "150mb" }));
app.use(
	bodyParser.urlencoded({
		limit: "150mb",
		extended: true,
	})
);
app.use(logger("combined"));
app.use(nodeadmin(app));
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.use((req: Request, res: Response, next: NextFunction) => {
	const error: Error = {};
	error.message = "Not Found";
	error.status = {
		success: false,
		code: 404,
	};
	error.error = {
		message: "Route Not Found",
	};
	next(error);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
	console.error(error);
	res.status(error?.status?.code || 500).json(error);
});
app.listen(PORT, async () => {
	try {
		await Migration();
		console.log(`Server is running at ${PORT}`);
	} catch (e) {
		console.error(e);
	}
});
