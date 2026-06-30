import { Outlet } from "react-router-dom";

import { Sidebar } from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

import "./DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-wrapper">

        <main className="dashboard-content">
          <Outlet />
        </main>

        <Footer />

      </div>

    </div>
  );
};

export default DashboardLayout;
