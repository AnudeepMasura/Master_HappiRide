import AnalyticsSegmentCard
from "../AnalyticsSegmentCard/AnalyticsSegmentCard";

import type {
    AnalyticsSegment
} from "../../types";

import "./OverviewSegmentMetrics.css";


interface OverviewSegmentMetricsProps {

    segments: AnalyticsSegment[];

}


const OverviewSegmentMetrics = ({
    segments
}: OverviewSegmentMetricsProps) => {

    return (

        <section className="analytics-overview-section">

            <div className="analytics-overview-title">

                <span className="analytics-overview-dot"></span>

                <h2>
                    OVERVIEW SEGMENT METRICS
                </h2>

            </div>

            <div className="analytics-segment-grid">

                {
                    segments.map((segment) => (

                        <AnalyticsSegmentCard
                            key={segment.id}
                            data={segment}
                        />

                    ))
                }

            </div>

        </section>

    );

};


export default OverviewSegmentMetrics;