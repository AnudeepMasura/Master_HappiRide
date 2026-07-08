import "./RidersTable.css";

import type { Rider } from "../../types";

import RiderRow from "./RiderRow";

interface RidersTableProps{

    riders:Rider[];

}

const RidersTable=({

    riders

}:RidersTableProps)=>{

    return(

        <div className="riders-table-card">

            <div className="table-wrapper">

                <table className="riders-table">

                    <thead>

                        <tr>

                            <th>RIDER ID</th>

                            <th>USERNAME</th>

                            <th>FULL NAME</th>

                            <th>PHONE</th>

                            <th>SERVICE</th>

                            <th>LANGUAGE</th>

                            <th>PERSONAL DETAILS</th>

                            <th>RIDER KYC DETAILS</th>

                            <th>VEHICLE DETAILS</th>

                            <th>REFERRAL CODE</th>

                            <th>HISTORY</th>

                            <th>GOV</th>

                            <th>PLATFORM EARNING</th>

                            <th>REFERRED BY</th>

                            <th className="referral-guy-column">
                                REFERRED GUY REFERRAL EARNINGS
                            </th>

                            <th>REFERRED TO</th>

                            <th>REFERRAL EARNINGS</th>

                            <th>TRIPS</th>

                            <th>RATING</th>

                            <th>DIST. (KM)</th>

                            <th>SUPPORT</th>

                            <th>KYC BY</th>

                            <th>STATUS</th>

                            <th>DONE BY</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            riders.map((rider)=>(

                                <RiderRow

                                    key={rider.id}

                                    rider={rider}

                                />

                            ))

                        }

                    </tbody>

                </table>

            </div>

            <div className="table-footer">

                <p>

                    Showing {riders.length} of 120 riders

                </p>

            </div>

        </div>

    );

};

export default RidersTable;
