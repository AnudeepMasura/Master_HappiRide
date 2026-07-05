import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import DashboardLayout
from "../layouts/DashboardLayout";

import ProtectedRoute
from "./ProtectedRoute";

import Login
from "../pages/Login/Login";

import Dashboard
from "../pages/Dashboard/Dashboard";

import Analytics
from "../pages/Analytics/Analytics";

import CustomerSupport
from "../pages/CustomerSupport/CustomerSupport";

import Wallet from "../pages/Wallet/Wallet";
import RideHistory from "../pages/RideHistory/RideHistory";

const AppRoutes = () => {

    return (

        <BrowserRouter>

            <Routes>

                {/* ==========================================
                    Login
                ========================================== */}

                <Route
                    path="/login"
                    element={<Login />}
                />


                {/* ==========================================
                    Protected Master Routes
                ========================================== */}

                <Route
                    element={<ProtectedRoute />}
                >

                    <Route
                        element={<DashboardLayout />}
                    >

                        <Route
                            path="/"
                            element={<Dashboard />}
                        />

                        <Route
                            path="/analytics"
                            element={<Analytics />}
                        />

                        <Route
                            path="/customer-support"
                            element={<CustomerSupport />}
                        />
                         <Route
                            path="/Wallet"
                            element={<Wallet />}
                        />
                         <Route
                            path="/RideHistory"
                            element={<RideHistory />}
                        />


                    </Route>

                </Route>


                {/* ==========================================
                    Unknown Route
                ========================================== */}

                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/"
                            replace
                        />
                    }
                />

            </Routes>

        </BrowserRouter>

    );

};

export default AppRoutes;