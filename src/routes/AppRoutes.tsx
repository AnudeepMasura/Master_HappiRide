import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import DashboardLayout
from "../layouts/DashboardLayout";

import SupportLayout
from "../layouts/SupportLayout";

import KYCLayout
from "../layouts/KYCLayout";

import ProtectedRoute
from "./ProtectedRoute";

import RoleRoute, {
    RoleRedirect
} from "./RoleRoute";

import Login
from "../pages/Auth/Login/Login";

import Dashboard
from "../pages/Admin/Dashboard/Dashboard";

import Analytics
from "../pages/Admin/Analytics/Analytics";

import Users
from "../pages/Admin/Users/Users";

import CustomerSupport
from "../pages/Admin/CustomerSupport/CustomerSupport";

import AdminKYC from "../pages/Admin/KYC/KYC";
import KYC from "../pages/KYC/KYC";
import KYCTickets from "../pages/KYC/Tickets/Tickets";
import RideHistory from "../pages/Admin/RideHistory/RideHistory"; 
import Wallet from "../pages/Admin/Wallet/Wallet";
import Riders from "../pages/Admin/Riders/Riders";
import Support from "../pages/Support/Support";


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

                        <Route
                            index
                            element={<RoleRedirect />}
                        />

                        {/* ==================================
                            Admin
                        ================================== */}

                        <Route
                            element={
                                <RoleRoute
                                    allowedRoles={["admin"]}
                                />
                            }
                        >

                            <Route
                                path="/admin"
                                element={<Dashboard />}
                            />


                            <Route
                                path="/admin/analytics"
                                element={<Analytics />}
                            />


                            <Route
                                path="/admin/users"
                                element={<Users />}
                            />


                            <Route
                                path="/admin/customer-support"
                                element={<CustomerSupport />}
                            />


                            <Route
                                path="/admin/ride-history"
                                element={<RideHistory />}
                            />


                            <Route
                                path="/admin/wallet"
                                element={<Wallet />}
                            />


                            <Route
                                path="/admin/riders"
                                element={<Riders />}
                            />


                            <Route
                                path="/admin/kyc"
                                element={<AdminKYC />}
                            />

                        </Route>


                        {/* ==================================
                            Support
                        ================================== */}

                        <Route
                            element={
                                <RoleRoute
                                    allowedRoles={["support"]}
                                />
                            }
                        >

                            <Route
                                element={<SupportLayout />}
                            >

                                <Route
                                    path="/support"
                                    element={<Support />}
                                />

                            </Route>

                        </Route>


                        {/* ==================================
                            KYC
                        ================================== */}

                        <Route
                            element={
                                <RoleRoute
                                    allowedRoles={["kyc"]}
                                />
                            }
                        >

                            <Route
                                element={<KYCLayout />}
                            >

                                <Route
                                    path="/kyc"
                                    element={<KYC />}
                                />

                                <Route
                                    path="/kyc/tickets"
                                    element={<KYCTickets />}
                                />

                            </Route>

                        </Route>

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
