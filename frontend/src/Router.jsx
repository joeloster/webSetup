import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./misc/ProtectedRoutes.jsx";

function Router() {
	// change routes here
	// define both protected and unprotected routes
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={null} />
				<Route element={<ProtectedRoutes />}>
					<Route path="/somethingProtected" element={null} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
