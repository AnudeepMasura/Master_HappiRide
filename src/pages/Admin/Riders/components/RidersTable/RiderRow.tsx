import "./RiderRow.css";

import type { Rider } from "../../types";

import ServiceBadge from "../ServiceBadge/ServiceBadge";

import RatingBadge from "../RatingBadge/RatingBadge";

import StatusBadge from "../StatusBadge/StatusBadge";

import HistoryButton from "../HistoryButton/HistoryButton";

import SupportButton from "../SupportButton/SupportButton";

import DetailButton from "./DetailButton";

import CountEyeButton from "./CountEyeButton";

interface RiderRowProps{

    rider:Rider;

}

const RiderRow=({

    rider

}:RiderRowProps)=>{

    return(

        <tr>

            <td>{rider.riderId}</td>

            <td>{rider.username}</td>

            <td>{rider.fullName}</td>

            <td>{rider.phone}</td>

            <td>

                <ServiceBadge

                    serviceType={rider.serviceType}

                />

            </td>

            <td>{rider.language}</td>

            <td>

                <DetailButton

                    label="Personal details"

                    riderId={rider.riderId}

                />

            </td>

            <td>

                <DetailButton

                    label="Rider KYC details"

                    riderId={rider.riderId}

                />

            </td>

            <td>

                <DetailButton

                    label="Vehicle details"

                    riderId={rider.riderId}

                />

            </td>

            <td>{rider.referralCode}</td>

            <td>

                <HistoryButton

                    riderId={rider.riderId}

                />

            </td>

            <td>

                ₹{rider.gov.toLocaleString()}

            </td>

            <td>

                ₹{rider.platformEarning.toLocaleString()}

            </td>

            <td>{rider.referredBy}</td>

            <td>

                ₹{rider.referralearning.toLocaleString()}

            </td>

            <td>

                <CountEyeButton

                    count={rider.referredToCount}

                    label="Referred to riders"

                    riderId={rider.riderId}

                />

            </td>

            <td>

                ₹{rider.referralEarnings.toLocaleString()}

            </td>

            <td>{rider.trips.toLocaleString()}</td>

            <td>

                <RatingBadge

                    rating={rider.rating}

                />

            </td>

            <td>

                {rider.distance.toLocaleString()}

            </td>

            <td>

                <SupportButton

                    tickets={rider.supportTickets}

                />

            </td>

            <td>

                {rider.kycBy}

            </td>

            <td>

                <StatusBadge

                    status={rider.status}

                />

            </td>

            <td>

                <i>

                    {rider.doneBy}

                </i>

            </td>

        </tr>

    );

};

export default RiderRow;
