import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import router from "./router.js";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const distPath = path.join(dirname, "../../frontend/dist");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(helmet());

app.set("trust proxy", 1);

app.use("/api", router);

app.use(express.static(distPath));
app.get("/{*path}", (req, res) => {
	res.sendFile(path.join(distPath, "index.html"));
});

const PORT = 3039;
app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
});

// use this in production
