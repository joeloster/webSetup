import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { isValidEmail, isValidPassword } from "../funcs/checkCredentials.js";
import { getUserByEmail } from "../funcs/queries.js";
import { JWT_SECRET } from "../consts.js";

async function login(req, res) {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		if (!isValidEmail(email)) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		if (!isValidPassword(password)) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		const normalizedEmail = email.toLowerCase().trim();
		const user = getUserByEmail(normalizedEmail);

		if (!user) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		const isMatch = await bcrypt.compare(password, user.password_hash);

		if (!isMatch) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		const token = jwt.sign({ userId: user.id, email: normalizedEmail }, JWT_SECRET, {
			expiresIn: "7d",
		});

		res.cookie("authToken", token, {
			httpOnly: true,
			secure: true,
			sameSite: "strict",
			maxAge: 7 * 24 * 60 * 60 * 1000,
		});

		return res.status(200).json({ message: "Ok" });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal server error during login" });
	}
}

export default login;
