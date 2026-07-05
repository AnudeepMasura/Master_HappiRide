import AnalyticalTimeframe from "./components/AnalyticalTimeframe/AnalyticalTimeframe";

import OverviewSegmentMetrics from "./components/OverviewSegmentMetrics/OverviewSegmentMetrics";

import AnalyticsTrendVisualizations from "./components/AnalyticsTrendVisualizations/AnalyticsTrendVisualizations";

import "./Analytics.css";

const Analytics = () => {
  return (
    <div className="analytics">
      <AnalyticalTimeframe />

      <OverviewSegmentMetrics />

      <AnalyticsTrendVisualizations />
    </div>
  );
};

export default Analytics;