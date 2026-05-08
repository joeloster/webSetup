import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./router.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	}),
);

app.use("/api", router);

const PORT = 3029;
app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
});

// use this in development
