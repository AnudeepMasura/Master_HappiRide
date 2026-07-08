import "./RideRow.css";

import type { RideHistoryRecord } from "../../types";

import ServiceBadge from "../ServiceBadge/ServiceBadge";
import RatingBadge from "../RatingBadge/RatingBadge";
import CustomerSupportButton from "../CustomerSupportButton/CustomerSupportButton";

interface RideRowProps {

    ride: RideHistoryRecord;

}

const RideRow = ({
    ride
}: RideRowProps) => {

    return (

        <tr>

            <td>{ride.rideId}</td>

            <td>

                <ServiceBadge

                    serviceType={ride.serviceType}

                />

            </td>

            <td>

                <div className="ride-route">

                    <span>{ride.pickupLocation}</span>

                    <span className="route-arrow">

                        →

                    </span>

                    <span>{ride.dropLocation}</span>

                </div>

            </td>

            <td>{ride.userName}</td>

            <td>{ride.riderName}</td>

            <td>{ride.grossOrderValue}</td>

            <td>{ride.riderEarnings}</td>

            <td>{ride.platformEarnings}</td>

            <td>{ride.referralEarnings}</td>

            <td>{ride.referredUser}</td>

            <td>{ride.referredRider}</td>

            <td>{ride.referralAmount}</td>

            <td>

                <RatingBadge

                    rating={ride.rating}

                />

            </td>

            <td>

                <div className="ride-date">

                    <span>{ride.startDate}</span>

                    <small>{ride.startTime}</small>

                </div>

            </td>

            <td>

                <div className="ride-date">

                    <span>{ride.endDate}</span>

                    <small>{ride.endTime}</small>

                </div>

            </td>

            <td>

                <CustomerSupportButton

                    available={ride.supportAvailable}

                    rideId={ride.rideId}

                />

            </td>

        </tr>

    );

};

export default RideRow;
