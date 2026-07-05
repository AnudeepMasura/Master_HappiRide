import {
    Eye
} from "lucide-react";

import type {
    SupportTicket
} from "../../types";

import "./SupportTable.css";


interface SupportTableProps {

    tickets: SupportTicket[];

    onViewTicket: (
        ticket: SupportTicket
    ) => void;

}


const SupportTable = ({
    tickets,
    onViewTicket
}: SupportTableProps) => {

    return (

        <div className="support-table-wrapper">

            <table className="support-table">

                {/* ==========================================
                    Table Header
                ========================================== */}

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>DATE</th>

                        <th>ISSUE</th>

                        <th>RAISED BY</th>

                        <th>LOCATION</th>

                        <th>STATUS</th>

                        <th>ACTIONS</th>

                    </tr>

                </thead>


                {/* ==========================================
                    Table Body
                ========================================== */}

                <tbody>

                    {
                        tickets.map((ticket) => (

                            <tr key={ticket.id}>

                                <td>

                                    {ticket.id}

                                </td>


                                <td>

                                    {ticket.date}

                                </td>


                                <td>

                                    {ticket.issue}

                                </td>


                                <td>

                                    {ticket.raisedBy}

                                </td>


                                <td>

                                    {ticket.location}

                                </td>


                                <td>

                                    <span
                                        className={
                                            ticket.status ===
                                            "Ongoing"

                                                ? "support-status ongoing"

                                                : "support-status closed"
                                        }
                                    >

                                        {ticket.status}

                                    </span>

                                </td>


                                <td>

                                    <button
                                        type="button"
                                        className="support-view-button"
                                        onClick={() =>
                                            onViewTicket(
                                                ticket
                                            )
                                        }
                                        aria-label={
                                            `View ${ticket.id}`
                                        }
                                        title="View Ticket Details"
                                    >

                                        <Eye size={21} />

                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>


            {/* ==========================================
                Empty State
            ========================================== */}

            {
                tickets.length === 0 && (

                    <div className="support-empty-state">

                        No tickets found

                    </div>

                )
            }

        </div>

    );

};


export default SupportTable;