import SupportMetricCard
from "../SupportMetricCard/SupportMetricCard";

import type {
    SupportMetric
} from "../../types";

import "./SupportMetrics.css";

interface SupportMetricsProps {

    metrics: SupportMetric[];

}

const SupportMetrics = ({
    metrics
}: SupportMetricsProps) => {

    return (

        <section className="support-metrics">

            {
                metrics.map((metric) => (

                    <SupportMetricCard
                        key={metric.id}
                        metric={metric}
                    />

                ))
            }

        </section>

    );

};

export default SupportMetrics;