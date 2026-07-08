import RetentionRateChart
from "../RetentionRateChart/RetentionRateChart";

import ServicesUtilizationChart
from "../ServicesUtilizationChart/ServicesUtilizationChart";

import UserAgeDemographics
from "../UserAgeDemographics/UserAgeDemographics";

import "./AnalyticsTrendVisualizations.css";

const AnalyticsTrendVisualizations = () => {

    return (

        <section className="analytics-trends">

            <div className="analytics-trends-title">

                <span className="analytics-trends-dot"></span>

                <h2>
                    ANALYTICS & TREND VISUALIZATIONS
                </h2>

            </div>

            <div className="analytics-chart-grid">

                <RetentionRateChart />

                <ServicesUtilizationChart />

            </div>

            <UserAgeDemographics />

        </section>

    );

};

export default AnalyticsTrendVisualizations;