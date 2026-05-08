import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../consts.js";

function authenticateUser(req, res, next) {
	try {
		const token = req.cookies.authToken;

		if (!token) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		const decoded = jwt.verify(token, JWT_SECRET);

		req.user = decoded;

		next();
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal server error during verification" });
	}
}

export default authenticateUser;
