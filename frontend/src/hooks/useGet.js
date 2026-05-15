import { useQuery } from "@tanstack/react-query";
import fetcher from "../misc/fetcher.js";

function useGet(endpoint, options = {}, key = []) {
	return useQuery({
		queryKey: [endpoint, ...key],
		queryFn: async () => {
			const { data } = await fetcher(endpoint);
			return data;
		},
		...options,
	});
}

export default useGet;
