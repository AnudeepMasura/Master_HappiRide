import { Eye } from "lucide-react";

import type {
    ReportTeam,
    SupportTicket
} from "../../types";

import "./SupportTable.css";

interface SupportTableProps {
    tickets: SupportTicket[];

    onViewTicket: (
        ticket: SupportTicket
    ) => void;

    onCloseTicket: (
        ticket: SupportTicket
    ) => void;
}

const SupportTable = ({
    tickets,
    onViewTicket,
    onCloseTicket
}: SupportTableProps) => {

    const reportTeams: ReportTeam[] = [
        "KYC",
        "Finance",
        "Partners"
    ];

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

                        <th>LANGUAGE</th>

                        <th>STATUS</th>

                        <th>REPORT TO</th>

                        <th>VIEW RESPONSE</th>

                        <th>ACTION</th>

                    </tr>

                </thead>

                {/* ==========================================
                    Table Body
                ========================================== */}

                <tbody>

                    {

                        tickets.map((ticket) => (

                            <tr key={ticket.id}>

                                <td>{ticket.id}</td>

                                <td>{ticket.date}</td>

                                <td>{ticket.issue}</td>

                                <td>{ticket.raisedBy}</td>

                                <td>{ticket.location}</td>

                                <td>{ticket.language}</td>

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

                                    <select
                                        className="support-report-select"
                                        defaultValue={ticket.reportTo}
                                        aria-label={`Report ${ticket.id} to`}
                                    >

                                        {
                                            reportTeams.map((team) => (

                                                <option
                                                    key={team}
                                                    value={team}
                                                >

                                                    {team}

                                                </option>

                                            ))
                                        }

                                    </select>

                                </td>

                                <td>

                                    <button
                                        type="button"
                                        className="support-view-button"
                                        onClick={() => onViewTicket(ticket)}
                                        aria-label={`View response for ${ticket.id}`}
                                        title="View Response"
                                    >

                                        <Eye size={20} />

                                    </button>

                                </td>

                                <td>

                                    <button
                                        type="button"
                                        className="support-close-button"
                                        onClick={() => onCloseTicket(ticket)}
                                        disabled={ticket.status === "Closed"}
                                        aria-label={`Close ${ticket.id}`}
                                    >

                                        Close

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
