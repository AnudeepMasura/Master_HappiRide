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

import Users
from "../pages/Users/Users";

import CustomerSupport
from "../pages/CustomerSupport/CustomerSupport";

import KYC from "../pages/KYC/KYC";
import RideHistory from "../pages/RideHistory/RideHistory"; 
import Wallet from "../pages/Wallet/Wallet";
import Riders from "../pages/Riders/Riders";


const AppRoutes = () => {

    return (

        <BrowserRouter>

            <Routes>

                {/* ==========================================
                    Login Route
                ========================================== */}

                <Route
                    path="/login"
                    element={<Login />}
                />


                {/* ==========================================
                    Protected Master Dashboard Routes
                ========================================== */}

                <Route
                    element={<ProtectedRoute />}
                >

                    <Route
                        element={<DashboardLayout />}
                    >

                        {/* ==================================
                            Dashboard
                        ================================== */}

                        <Route
                            path="/"
                            element={<Dashboard />}
                        />


                        {/* ==================================
                            Analytics
                        ================================== */}

                        <Route
                            path="/analytics"
                            element={<Analytics />}
                        />


                        {/* ==================================
                            Users
                        ================================== */}

                        <Route
                            path="/users"
                            element={<Users />}
                        />


                        {/* ==================================
                            Customer Support
                        ================================== */}

                        <Route
                            path="/customer-support"
                            element={<CustomerSupport />}
                        />
                         <Route
                            path="/KYC"
                            element={<KYC />}
                        />
                        <Route
                            path="/RideHistory"
                            element={<RideHistory />}
                        />
                          <Route
                            path="/Wallet"
                            element={<Wallet />}
                        />
                         <Route
                            path="/Riders"
                            element={<Riders />}
                        />

                    </Route>

                </Route>


                {/* ==========================================
                    Unknown Routes
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