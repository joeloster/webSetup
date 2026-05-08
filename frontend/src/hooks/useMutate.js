import { useMutation } from "@tanstack/react-query";
import fetcher from "../misc/fetcher.js";

function useMutate(endpoint, method, options = {}) {
	return useMutation({
		mutationFn: async (body) => {
			const { ok, data } = await fetcher(endpoint, method, body);
			if (!ok) throw new Error(`Failed to fetch at endpoint: ${endpoint}`);
			return data;
		},
		...options,
	});
}

export default useMutate;
