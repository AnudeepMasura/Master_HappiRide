import {
  Car,
  Users,
  MapPinned
} from "lucide-react";

import type {
  AnalyticsSegment
} from "../../types";

import "./AnalyticsSegmentCard.css";

interface AnalyticsSegmentCardProps {
  data: AnalyticsSegment;
}

const AnalyticsSegmentCard = ({
  data
}: AnalyticsSegmentCardProps) => {

  const getIcon = () => {
    switch (data.icon) {
      case "taxi":
        return <Car size={20} />;

      case "pooling":
        return <Users size={20} />;

      case "private":
        return <MapPinned size={20} />;

      default:
        return <Car size={20} />;
    }
  };

  return (
    <div className="analytics-segment-card">

      <div className="analytics-segment-header">

        <div className="analytics-segment-icon">
          {getIcon()}
        </div>

        <div className="analytics-segment-content">

          <h3>
            {data.title}
          </h3>

          <span className="analytics-segment-tag">
            {data.badge}
          </span>

        </div>

      </div>

      <div className="analytics-segment-body">

        {data.metrics.map((metric, index) => (

          <div
            className="analytics-segment-row"
            key={index}
          >

            <span>
              {metric.label}
            </span>

            <strong>
              {metric.value}
            </strong>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AnalyticsSegmentCard;