import "./DashboardHeader.css";
import { Home, RefreshCw } from "lucide-react";

const DashboardHeader = () => {

    const handleRefresh = () => {

        // =====================================
        // DEVELOPMENT
        // =====================================
        console.log("Refreshing Dashboard...");

        // =====================================
        // BACKEND
        // Uncomment when backend is ready.
        //
        // await getDashboardData();
        // =====================================

    };

    return (

        <div className="dashboard-header">

            <div className="dashboard-header-left">

                <div className="dashboard-breadcrumb">

                    <Home size={15} />

                    <span>Home</span>

                    <span className="separator">/</span>

                    <span className="active-page">

                        Dashboard

                    </span>

                </div>

                <h1>

                    Real Time Dashboard

                </h1>

                <p>

                    Monitor all Happi Ride platform operations in real time.

                </p>

            </div>

            <div className="dashboard-header-right">

                <button
                    className="refresh-btn"
                    onClick={handleRefresh}
                >

                    <RefreshCw size={18} />

                    Refresh Data

                </button>

            </div>

        </div>

    );

};

export default DashboardHeader;