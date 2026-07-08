import { useMemo, useState } from "react";

import "./Tickets.css";

import { kycTickets } from "./dummyData";
import type { TicketFilter } from "./types";

const filters: TicketFilter[] = [
    "All",
    "Ongoing",
    "Closed"
];

const Tickets = () => {
    const [activeFilter, setActiveFilter] =
        useState<TicketFilter>("All");

    const tickets = useMemo(
        () => {
            if (activeFilter === "All") {
                return kycTickets;
            }

            return kycTickets.filter(
                ticket => ticket.status === activeFilter
            );
        },
        [activeFilter]
    );

    return (
        <div className="tickets-page fade-in">
            <h1 className="tickets-title">
                Support Tickets
            </h1>

            <div className="tickets-filters">
                {
                    filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            className={
                                activeFilter === filter
                                    ? "tickets-filter active"
                                    : "tickets-filter"
                            }
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))
                }
            </div>

            <section className="tickets-table-card">
                <table className="tickets-table">
                    <thead>
                        <tr>
                            <th>Ticket ID</th>
                            <th>Date</th>
                            <th>Issue</th>
                            <th>Raised By</th>
                            <th>Location</th>
                            <th>Handled By</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            tickets.map((ticket) => (
                                <tr key={ticket.id}>
                                    <td>{ticket.ticketId}</td>
                                    <td>{ticket.date}</td>
                                    <td>{ticket.issue}</td>
                                    <td>{ticket.raisedBy}</td>
                                    <td>{ticket.location}</td>
                                    <td>{ticket.handledBy}</td>
                                    <td>
                                        <span className={`ticket-status ${ticket.status.toLowerCase()}`}>
                                            {ticket.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="ticket-actions">
                                            <button type="button">
                                                View
                                            </button>
                                            <button type="button">
                                                Reply
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Tickets;
