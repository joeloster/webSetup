function logout(req, res) {
	try {
		res.clearCookie("authToken", {
			httpOnly: true,
			secure: true,
			sameSite: "strict",
		});

		return res.status(200).json({ message: "Ok" });
	} catch (error) {
		console.log(error);
		return res.status(401).json({ message: "Unauthorized" });
	}
}

export default logout;
