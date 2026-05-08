import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { isValidEmail, isValidPassword } from "../funcs/checkCredentials.js";
import { createUser, checkDuplicateEmail } from "../funcs/queries.js";
import { JWT_SECRET } from "../consts.js";

async function register(req, res) {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		if (!isValidEmail(email)) {
			return res.status(400).json({ message: "Invalid email format" });
		}

		if (!isValidPassword(password)) {
			return res.status(400).json({
				message: "Invalid password format",
			});
		}

		const normalizedEmail = email.toLowerCase().trim();
		if (checkDuplicateEmail(normalizedEmail)) {
			return res.status(409).json({ message: "Email already exists" });
		}

		const userId = crypto.randomUUID();
		const passwordHash = await bcrypt.hash(password, 10);
		createUser(userId, normalizedEmail, passwordHash);

		const token = jwt.sign({ userId: userId, email: normalizedEmail }, JWT_SECRET, {
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
		return res.status(500).json({ message: "Internal server error during register" });
	}
}

export default register;
