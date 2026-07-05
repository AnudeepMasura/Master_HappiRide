import type {
    SupportMetric
} from "../../types";

import "./SupportMetricCard.css";

interface SupportMetricCardProps {

    metric: SupportMetric;

}

const SupportMetricCard = ({
    metric
}: SupportMetricCardProps) => {

    return (

        <div className="support-metric-card">

            <span className="support-metric-title">

                {metric.title}

            </span>

            <strong className="support-metric-value">

                {metric.value}

            </strong>

        </div>

    );

};

export default SupportMetricCard;