async function fetcher(endpoint, method = "GET", body) {
	try {
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

		if (!res.ok) throw new Error("Request failed");

		const data = await res.json();

		return { ok: true, data: data };
	} catch (error) {
		console.log(error);
		return { ok: false, data: null };
	}
}

export default fetcher;
