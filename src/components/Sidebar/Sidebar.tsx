import React from "react";

import {
    NavLink,
    useNavigate
} from "react-router-dom";

import "./Sidebar.css";

import {
    Badge
} from "../UI/Badge/Badge";

import * as Icons
from "../UI/Icons";

import {
    getStoredRole
} from "../../routes/RoleRoute";


interface MenuItem {

    id: string;

    label: string;

    icon: React.ReactNode;

    path?: string;

}


export const Sidebar = () => {

    const navigate = useNavigate();

    const role =
        getStoredRole();


    /* ==========================================
       Sidebar Menu Items
    ========================================== */

    const adminMenuItems: MenuItem[] = [

        {

            id: "dashboard",

            label: "DASHBOARD",

            icon: (
                <Icons.DashboardIcon
                    size={18}
                />
            ),

            path: "/admin"

        },


        {

            id: "analytics",

            label: "ANALYTICS",

            icon: (
                <Icons.AnalyticsIcon
                    size={18}
                />
            ),

            path: "/admin/analytics"

        },


        {

            id: "wallet",

            label: "WALLET",

            icon: (
                <Icons.WalletIcon
                    size={18}
                />
            ),  
            path: "/admin/wallet"

        },


        {

            id: "ride-history",

            label: "RIDE HISTORY",

            icon: (
                <Icons.RideHistoryIcon
                    size={18}
                />
            ),
              path: "/admin/ride-history"

        },


        {

            id: "users",

            label: "USERS",

            icon: (
                <Icons.UsersIcon
                    size={18}
                />
            ),

            path: "/admin/users"

        },


        {

            id: "riders",

            label: "RIDERS",

            icon: (
                <Icons.RidersIcon
                    size={18}
                />
            ),
            path: "/admin/riders"

        },


        {

            id: "customer-support",

            label: "CUSTOMER SUPPORT",

            icon: (
                <Icons.SupportIcon
                    size={18}
                />
            ),

            path: "/admin/customer-support"

        },


        {

            id: "kyc",

            label: "KYC Management",

            icon: (
                <Icons.KycIcon
                    size={18}
                />
            ),

            path: "/admin/kyc"

        },


        {

            id: "settings",

            label: "SETTINGS",

            icon: (
                <Icons.SettingsIcon
                    size={18}
                />
            )

        }

    ];

    const supportMenuItems: MenuItem[] = [

        {

            id: "support",

            label: "SUPPORT",

            icon: (
                <Icons.SupportIcon
                    size={18}
                />
            ),

            path: "/support"

        }

    ];

    const kycMenuItems: MenuItem[] = [

        {

            id: "kyc",

            label: "KYC",

            icon: (
                <Icons.KycIcon
                    size={18}
                />
            ),

            path: "/kyc"

        },

        {

            id: "tickets",

            label: "TICKETS",

            icon: (
                <Icons.SupportIcon
                    size={18}
                />
            ),

            path: "/kyc/tickets"

        }

    ];

    const menuItems =
        role === "support"
            ? supportMenuItems
            : role === "kyc"
                ? kycMenuItems
                : adminMenuItems;


    /* ==========================================
       Logout
    ========================================== */

    const handleLogout = () => {

        const confirmLogout =
            window.confirm(
                "Are you sure you want to logout from Happi Ride?"
            );


        if (!confirmLogout) {

            return;

        }


        localStorage.removeItem(
            "masterToken"
        );

        localStorage.removeItem(
            "userRole"
        );


        navigate(
            "/login",
            {
                replace: true
            }
        );

    };


    /* ==========================================
       Sidebar
    ========================================== */

    return (

        <aside className="sidebar">


            {/* ==================================
                Brand
            ================================== */}

            <div className="sidebar__brand">

                <span className="sidebar__logo-text">

                    Happi Ride

                </span>


                <Badge variant="master">

                    MASTER

                </Badge>

            </div>


            {/* ==================================
                Navigation
            ================================== */}

            <nav className="sidebar__nav">


                <ul className="sidebar__nav-list">


                    {
                        menuItems.map(
                            (item) => (

                                <li
                                    key={item.id}
                                    className="sidebar__nav-item"
                                >


                                    {
                                        item.path ? (

                                            <NavLink

                                                to={
                                                    item.path
                                                }

                                                end={
                                                    item.path === "/"
                                                    || item.path === "/kyc"
                                                }

                                                className={({
                                                    isActive
                                                }) =>

                                                    `sidebar__nav-button ${
                                                        isActive

                                                            ? "sidebar__nav-button--active"

                                                            : ""
                                                    }`

                                                }

                                            >


                                                <span className="sidebar__icon">

                                                    {
                                                        item.icon
                                                    }

                                                </span>


                                                <span className="sidebar__label">

                                                    {
                                                        item.label
                                                    }

                                                </span>


                                            </NavLink>

                                        ) : (

                                            <button

                                                type="button"

                                                className="sidebar__nav-button"

                                            >


                                                <span className="sidebar__icon">

                                                    {
                                                        item.icon
                                                    }

                                                </span>


                                                <span className="sidebar__label">

                                                    {
                                                        item.label
                                                    }

                                                </span>


                                            </button>

                                        )
                                    }


                                </li>

                            )
                        )
                    }


                </ul>


            </nav>


            {/* ==================================
                Logout
            ================================== */}

            <div className="sidebar__footer">


                <button

                    type="button"

                    className="sidebar__logout-button"

                    onClick={
                        handleLogout
                    }

                >


                    <span className="sidebar__icon">

                        <Icons.LogoutIcon
                            size={18}
                        />

                    </span>


                    <span className="sidebar__label">

                        LOGOUT

                    </span>


                </button>


            </div>


        </aside>

    );

};
