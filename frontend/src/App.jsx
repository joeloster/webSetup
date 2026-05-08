import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router.jsx";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	);
}

export default App;
