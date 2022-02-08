import * as dotenv from "dotenv";
import * as path from "path";

const env = dotenv.config({ path: path.resolve(__dirname + "/../.env") });
const GetEnv = (key: string) => {
	const parsedData: any = env.parsed;
	return parsedData[key];
};
export { env, GetEnv };
