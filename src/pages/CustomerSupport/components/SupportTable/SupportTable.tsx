import {
    Eye
} from "lucide-react";

import type {
    SupportTicket
} from "../../types";

import "./SupportTable.css";

interface SupportTableProps {

    tickets: SupportTicket[];

}

const SupportTable = ({
    tickets
}: SupportTableProps) => {

    const handleViewTicket = (
        ticket: SupportTicket
    ) => {

        console.log(
            "View ticket:",
            ticket
        );

    };

    return (

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

                        <th>ACTIONS</th>

                    </tr>

                </thead>

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
                                            ticket.status === "Ongoing"
                                                ? "support-status ongoing"
                                                : "support-status closed"
                                        }
                                    >

                                        {ticket.status}

                                    </span>

                                </td>

                                <td>

                                    <button
                                        className="support-view-button"
                                        onClick={() =>
                                            handleViewTicket(
                                                ticket
                                            )
                                        }
                                        aria-label={`View ${ticket.id}`}
                                    >

                                        <Eye size={21} />

                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

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