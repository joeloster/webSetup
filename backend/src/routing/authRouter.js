import express from "express";
import authenticateUser from "../middleware/authenticateUser.js";
import register from "../auth/register.js";
import login from "../auth/login.js";
import logout from "../auth/logout.js";

const authRouter = express.Router();

authRouter.get("/verifyAuth", authenticateUser, (req, res) => {
	return res.status(200).json({ message: "Ok" });
});
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

export default authRouter;
