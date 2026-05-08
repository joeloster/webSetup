import express from "express";
import authRouter from "./AuthRouter.js";
import authenticateUser from "../middleware/authenticateUser.js";

const router = express.Router();

router.use("/auth", authRouter);

// define routes here

export default router;
