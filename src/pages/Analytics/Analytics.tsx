import { BarChart3, Construction } from "lucide-react";

import "./Analytics.css";

const Analytics = () => {
  return (
    <section className="analytics-page">
      <div className="analytics-breadcrumb">
        <BarChart3 size={15} />
        <span>Home</span>
        <span className="analytics-separator">/</span>
        <span className="analytics-current">Analytics</span>
      </div>

      <div className="analytics-development-card">
        <div className="analytics-development-icon">
          <Construction size={34} />
        </div>
        <h1>Analytics</h1>
        <p>This page is under development.</p>
      </div>
    </section>
  );
};

export default Analytics;
