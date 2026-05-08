// standard email validation
export function isValidEmail(email) {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email);
}

// standard password validation
export function isValidPassword(password) {
	const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
	return passwordRegex.test(password);
}
