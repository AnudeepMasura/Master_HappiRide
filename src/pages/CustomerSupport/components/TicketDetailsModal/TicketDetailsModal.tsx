import {
    useState
} from "react";

import {
    X,
    User,
    Phone,
    Mail,
    MapPin
} from "lucide-react";

import type {
    SupportTicket
} from "../../types";

import "./TicketDetailsModal.css";


interface TicketDetailsModalProps {

    ticket: SupportTicket;

    onClose: () => void;

    onResolve: (
        ticket: SupportTicket,
        notes: string
    ) => void;

}


const TicketDetailsModal = ({
    ticket,
    onClose,
    onResolve
}: TicketDetailsModalProps) => {

    const [notes, setNotes] =
        useState("");


    return (

        <div className="ticket-modal-overlay">

            <div className="ticket-modal">

                {/* ==========================================
                    Header
                ========================================== */}

                <div className="ticket-modal-header">

                    <div>

                        <h2>
                            Ticket Details
                        </h2>

                        <span>
                            {ticket.id}
                        </span>

                    </div>


                    <button
                        type="button"
                        className="ticket-modal-close"
                        onClick={onClose}
                    >

                        <X size={22} />

                    </button>

                </div>


                {/* ==========================================
                    Ticket Information
                ========================================== */}

                <div className="ticket-info-card">

                    <div className="ticket-info-row">

                        <span>
                            Issue
                        </span>

                        <strong>
                            {ticket.issue}
                        </strong>

                    </div>


                    <div className="ticket-info-row">

                        <span>
                            Raised By
                        </span>

                        <strong>
                            {ticket.raisedBy}
                        </strong>

                    </div>


                    <div className="ticket-info-row">

                        <span>
                            Date
                        </span>

                        <strong>
                            {ticket.date}
                        </strong>

                    </div>


                    <div className="ticket-info-row">

                        <span>
                            Location
                        </span>

                        <strong>
                            {ticket.location}
                        </strong>

                    </div>


                    <div className="ticket-info-row">

                        <span>
                            Status
                        </span>

                        <span
                            className={
                                ticket.status === "Ongoing"
                                    ? "ticket-modal-status ongoing"
                                    : "ticket-modal-status closed"
                            }
                        >

                            {ticket.status}

                        </span>

                    </div>

                </div>


                {/* ==========================================
                    Complaint Description
                ========================================== */}

                <div className="ticket-modal-section">

                    <h3>
                        Complaint Description
                    </h3>

                    <div className="ticket-description">

                        {ticket.description}

                    </div>

                </div>


                {/* ==========================================
                    Customer Information
                ========================================== */}

                <div className="ticket-modal-section">

                    <h3>
                        Contact Information
                    </h3>


                    <div className="ticket-contact-grid">

                        <div className="ticket-contact-item">

                            <User size={18} />

                            <div>

                                <span>
                                    Customer Name
                                </span>

                                <strong>
                                    {ticket.customerName}
                                </strong>

                            </div>

                        </div>


                        <div className="ticket-contact-item">

                            <Phone size={18} />

                            <div>

                                <span>
                                    Phone Number
                                </span>

                                <strong>
                                    {ticket.phone}
                                </strong>

                            </div>

                        </div>


                        <div className="ticket-contact-item">

                            <Mail size={18} />

                            <div>

                                <span>
                                    Email Address
                                </span>

                                <strong>
                                    {ticket.email}
                                </strong>

                            </div>

                        </div>


                        <div className="ticket-contact-item">

                            <MapPin size={18} />

                            <div>

                                <span>
                                    Location
                                </span>

                                <strong>
                                    {ticket.location}
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ==========================================
                    Support Notes
                ========================================== */}

                <div className="ticket-modal-section">

                    <h3>
                        Support Notes
                    </h3>

                    <textarea
                        className="ticket-support-notes"
                        placeholder="Add internal support notes..."
                        value={notes}
                        onChange={(event) =>
                            setNotes(
                                event.target.value
                            )
                        }
                    />

                </div>


                {/* ==========================================
                    Footer
                ========================================== */}

                <div className="ticket-modal-footer">

                    <button
                        type="button"
                        className="ticket-cancel-button"
                        onClick={onClose}
                    >

                        Close

                    </button>


                    {
                        ticket.status === "Ongoing" && (

                            <button
                                type="button"
                                className="ticket-resolve-button"
                                onClick={() =>
                                    onResolve(
                                        ticket,
                                        notes
                                    )
                                }
                            >

                                Mark as Resolved

                            </button>

                        )
                    }

                </div>

            </div>

        </div>

    );

};


export default TicketDetailsModal;