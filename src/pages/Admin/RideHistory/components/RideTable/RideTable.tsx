import "./RideTable.css";

import type { RideHistoryRecord } from "../../types";

import RideRow from "../RideRow/RideRow";

interface RideTableProps{

    rides: RideHistoryRecord[];

}

const RideTable = ({
    rides
}: RideTableProps)=>{

    return(

        <div className="ride-table-wrapper">

            <table className="ride-table">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Service</th>

                        <th>Route</th>

                        <th>User</th>

                        <th>Rider</th>

                        <th>Gross Order</th>

                        <th>Rider Earnings</th>

                        <th>Platform Earnings</th>

                        <th>Referral Earnings</th>

                        <th>Referred User</th>

                        <th>Referred Rider</th>

                        <th>Earnings</th>

                        <th>Rating</th>

                        <th>Start</th>

                        <th>End</th>

                        <th>Support</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        rides.map((ride)=>(

                            <RideRow

                                key={ride.id}

                                ride={ride}

                            />

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default RideTable;
