import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";
import useGet from "../hooks/useGet.js";

function ProtectedRoutes() {
	const navigate = useNavigate();

	const { isPending, error } = useGet("auth/verifyAuth");

	useEffect(() => {
		if (error) navigate("/");
	}, [error]);

	if (isPending)
		return (
			<div className="flex items-center justify-center h-screen">
				<Spinner color="#000" size={20} />
			</div>
		);
	if (error) return null;

	return <Outlet />;
}

export default ProtectedRoutes;
