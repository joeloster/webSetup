async function fetcher(endpoint, method = "GET", body) {
	const settings = {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
	};

	if (body && method !== "GET") {
		settings.body = JSON.stringify(body);
	}

	const res = await fetch(`/api/${endpoint}`, settings);

	if (!res.ok) {
		const error = new Error("Request failed");
		error.status = res.status;
		throw error;
	}

	const data = await res.json();

	return { data };
}

export default fetcher;
