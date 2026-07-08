import "./SupportTable.css";

import type { SupportTicket } from "../../types";

import SupportRow from "./SupportRow";

interface SupportTableProps {

    tickets: SupportTicket[];

}

const SupportTable = ({
    tickets
}: SupportTableProps) => {

    return (

        <div className="support-table-card">

            <div className="support-table-wrapper">

                <table className="support-table">

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>DATE</th>

                            <th>ISSUE</th>

                            <th>RAISED BY</th>

                            <th>LOCATION</th>

                            <th>STATUS</th>

                            <th>VIEW</th>

                            <th>REPORT TO</th>

                            <th>REPORT STATEMENT</th>

                            <th>ACTION</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            tickets.map((ticket)=>(

                                <SupportRow

                                    key={ticket.id}

                                    ticket={ticket}

                                />

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default SupportTable;