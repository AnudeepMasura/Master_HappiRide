import {
    Navigate,
    Outlet
} from "react-router-dom";

const ProtectedRoute = () => {

    const token =
        localStorage.getItem("masterToken");

    if (!token) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );

    }

    return <Outlet />;

};

export default ProtectedRoute;