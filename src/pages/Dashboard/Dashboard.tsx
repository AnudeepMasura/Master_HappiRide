import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import ActivePlatformOperations from "./components/ActivePlatformOperations/ActivePlatformOperations";
import OverviewSegmentMetrics from "./components/OverviewSegmentMetrics/OverviewSegmentMetrics";

import "./Dashboard.css";

const Dashboard = () => {

    return(

        <div className="dashboard">

            <DashboardHeader />

            <ActivePlatformOperations />

            <OverviewSegmentMetrics />

        </div>

    );

};

export default Dashboard;