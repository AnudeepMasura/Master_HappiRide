import {
    Navigate,
    Outlet
} from "react-router-dom";

export type UserRole =
    | "admin"
    | "support"
    | "kyc";

interface RoleRouteProps {
    allowedRoles: UserRole[];
}

export const getStoredRole = (): UserRole | null => {

    const role =
        localStorage.getItem("userRole");

    if (
        role === "admin" ||
        role === "support" ||
        role === "kyc"
    ) {

        return role;

    }

    return null;

};

export const getRoleHomePath = (
    role: UserRole | null
) => {

    if (role === "support") {

        return "/support";

    }

    if (role === "kyc") {

        return "/kyc";

    }

    return "/admin";

};

export const RoleRedirect = () => {

    return (
        <Navigate
            to={getRoleHomePath(getStoredRole())}
            replace
        />
    );

};

const RoleRoute = ({
    allowedRoles
}: RoleRouteProps) => {

    const role =
        getStoredRole();

    if (!role) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );

    }

    if (!allowedRoles.includes(role)) {

        return (
            <Navigate
                to={getRoleHomePath(role)}
                replace
            />
        );

    }

    return <Outlet />;

};

export default RoleRoute;
