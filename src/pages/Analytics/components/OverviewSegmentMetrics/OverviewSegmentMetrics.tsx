import {
    useEffect,
    useState
} from "react";

import AnalyticsSegmentCard
from "../AnalyticsSegmentCard/AnalyticsSegmentCard";

import { getAnalyticsData } from "../../api";

import type {
    AnalyticsSegment
} from "../../types";

import "./OverviewSegmentMetrics.css";

const OverviewSegmentMetrics = () => {

    const [segments, setSegments] =
    useState<AnalyticsSegment[]>([]);

    useEffect(() => {

        loadSegments();

    }, []);

    const loadSegments = async () => {

        const data = await getAnalyticsData();

        setSegments(data.segments);

    };

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