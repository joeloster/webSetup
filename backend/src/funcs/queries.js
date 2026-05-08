import db from "../db.js";

export function createUser(userId, email, passwordHash) {
	return db
		.prepare("INSTERT INTO users (user_id, email, password_hash) VALUES (?, ?, ?)")
		.run(userId, email, passwordHash);
}

export function checkDuplicateEmail(email) {
	return db.prepare("SELECT 1 FROM users WHERE email = ?").get(email);
}

export function getUserByEmail(email) {
	return db.prepare("SELECT * FROM users WHERE email = ?").get(email);
}
