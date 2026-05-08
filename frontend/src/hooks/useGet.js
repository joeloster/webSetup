import { useQuery } from "@tanstack/react-query";
import fetcher from "../misc/fetcher.js";

function useGet(endpoint) {
	return useQuery({
		queryKey: [endpoint],
		queryFn: async () => {
			const { ok, data } = await fetcher(endpoint);
			if (!ok) throw new Error(`Failed to fetch at endpoint: ${endpoint}`);
			return data;
		},
	});
}

export default useGet;
