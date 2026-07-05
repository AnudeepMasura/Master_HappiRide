import React from "react";

import {
  NavLink,
  useNavigate
} from "react-router-dom";

import "./Sidebar.css";

import {
  Badge
} from "../UI/Badge/Badge";

import * as Icons from "../UI/Icons";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
}

export const Sidebar = () => {

  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    {
      id: "dashboard",
      label: "DASHBOARD",
      icon: <Icons.DashboardIcon size={18} />,
      path: "/"
    },
    {
      id: "analytics",
      label: "ANALYTICS",
      icon: <Icons.AnalyticsIcon size={18} />,
      path: "/analytics"
    },
    {
      id: "wallet",
      label: "WALLET",
      icon: <Icons.WalletIcon size={18} />,
      path: "/Wallet"
    },
    {
      id: "ride-history",
      label: "RIDE HISTORY",
      icon: <Icons.RideHistoryIcon size={18} />,
       path: "/RideHistory"
    },
    {
      id: "users",
      label: "USERS",
      icon: <Icons.UsersIcon size={18} />
    },
    {
      id: "riders",
      label: "RIDERS",
      icon: <Icons.RidersIcon size={18} />
    },
    {
      id: "customer-support",
      label: "CUSTOMER SUPPORT",
      icon: <Icons.SupportIcon size={18} />,
      path: "/customer-support"
    },
    {
      id: "kyc",
      label: "KYC",
      icon: <Icons.KycIcon size={18} />,
      path: "/KYC"
    },
    {
      id: "settings",
      label: "SETTINGS",
      icon: <Icons.SettingsIcon size={18} />
    }
  ];

  const handleLogout = () => {

    const confirmLogout = window.confirm(
      "Are you sure you want to logout from Happi Ride?"
    );

    if (!confirmLogout) {
      return;
    }

    localStorage.removeItem("masterToken");

    navigate("/login", {
      replace: true
    });

  };

  return (
    <aside className="sidebar">

      <div className="sidebar__brand">

        <span className="sidebar__logo-text">
          Happi Ride
        </span>

        <Badge variant="master">
          MASTER
        </Badge>

      </div>

      <nav className="sidebar__nav">

        <ul className="sidebar__nav-list">

          {menuItems.map((item) => (

            <li
              key={item.id}
              className="sidebar__nav-item"
            >

              {item.path ? (

                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `sidebar__nav-button ${
                      isActive
                        ? "sidebar__nav-button--active"
                        : ""
                    }`
                  }
                >

                  <span className="sidebar__icon">
                    {item.icon}
                  </span>

                  <span className="sidebar__label">
                    {item.label}
                  </span>

                </NavLink>

              ) : (

                <button
                  className="sidebar__nav-button"
                  type="button"
                >

                  <span className="sidebar__icon">
                    {item.icon}
                  </span>

                  <span className="sidebar__label">
                    {item.label}
                  </span>

                </button>

              )}

            </li>

          ))}

        </ul>

      </nav>

      <div className="sidebar__footer">

        <button
          className="sidebar__logout-button"
          type="button"
          onClick={handleLogout}
        >

          <span className="sidebar__icon">

            <Icons.LogoutIcon size={18} />

          </span>

          <span className="sidebar__label">
            LOGOUT
          </span>

        </button>

      </div>

    </aside>
  );

};