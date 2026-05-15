import { useMutation } from "@tanstack/react-query";
import fetcher from "../misc/fetcher.js";

function useMutate(endpoint, method, options = {}) {
	return useMutation({
		mutationFn: async (body) => {
			const { data } = await fetcher(endpoint, method, body);
			return data;
		},
		...options,
	});
}

export default useMutate;
