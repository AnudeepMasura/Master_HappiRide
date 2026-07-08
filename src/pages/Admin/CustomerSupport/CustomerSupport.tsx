import {
    useEffect,
    useState
} from "react";

import SupportHeader
from "./components/SupportHeader/SupportHeader";

import SupportMetrics
from "./components/SupportMetrics/SupportMetrics";

import SupportTabs
from "./components/SupportTabs/SupportTabs";

import SupportTable
from "./components/SupportTable/SupportTable";

import TicketDetailsModal
from "./components/TicketDetailsModal/TicketDetailsModal";

import {
    getCustomerSupportData
} from "./api";

import type {
    CustomerSupportResponse,
    TicketFilter,
    SupportTicket
} from "./types";

import "./CustomerSupport.css";


const CustomerSupport = () => {

    /* ==========================================
       Customer Support Data
    ========================================== */

    const [supportData, setSupportData] =
        useState<CustomerSupportResponse | null>(
            null
        );


    /* ==========================================
       Ticket Filter
    ========================================== */

    const [activeFilter, setActiveFilter] =
        useState<TicketFilter>("all");


    /* ==========================================
       Date Filter
    ========================================== */

    const [dateFrom, setDateFrom] =
        useState("");

    const [dateTo, setDateTo] =
        useState("");


    /* ==========================================
       Selected Ticket
    ========================================== */

    const [selectedTicket, setSelectedTicket] =
        useState<SupportTicket | null>(null);


    /* ==========================================
       Loading & Error
    ========================================== */

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");


    /* ==========================================
       Load Customer Support Data
    ========================================== */

    useEffect(() => {

        loadCustomerSupportData();

    }, []);


    const loadCustomerSupportData = async () => {

        try {

            setLoading(true);

            setError("");

            const data =
                await getCustomerSupportData();

            setSupportData(data);

        } catch (error) {

            console.error(
                "Customer support error:",
                error
            );

            setError(
                "Unable to load customer support data"
            );

        } finally {

            setLoading(false);

        }

    };


    /* ==========================================
       Open Ticket Modal
    ========================================== */

    const handleViewTicket = (
        ticket: SupportTicket
    ) => {

        setSelectedTicket(ticket);

    };


    /* ==========================================
       Close Ticket Modal
    ========================================== */

    const handleCloseTicketModal = () => {

        setSelectedTicket(null);

    };

    /* ==========================================
       Close Ticket From Table
    ========================================== */

    const handleCloseTicket = (
        ticket: SupportTicket
    ) => {

        if (!supportData) {

            return;

        }

        const updatedTickets =
            supportData.tickets.map(
                (currentTicket) => {

                    if (
                        currentTicket.id === ticket.id
                    ) {

                        return {

                            ...currentTicket,

                            status: "Closed" as const

                        };

                    }

                    return currentTicket;

                }
            );

        setSupportData({

            ...supportData,

            tickets: updatedTickets

        });

    };


    /* ==========================================
       Resolve Ticket
    ========================================== */

    const handleResolveTicket = (
        ticket: SupportTicket,
        notes: string
    ) => {

        if (!supportData) {

            return;

        }

        const updatedTickets =
            supportData.tickets.map(
                (currentTicket) => {

                    if (
                        currentTicket.id === ticket.id
                    ) {

                        return {

                            ...currentTicket,

                            status: "Closed" as const

                        };

                    }

                    return currentTicket;

                }
            );


        setSupportData({

            ...supportData,

            tickets: updatedTickets

        });


        console.log(
            "Resolved Ticket:",
            ticket.id
        );

        console.log(
            "Support Notes:",
            notes
        );


        setSelectedTicket(null);

    };


    /* ==========================================
       Loading State
    ========================================== */

    if (loading) {

        return (

            <div className="customer-support-loading">

                Loading customer support...

            </div>

        );

    }


    /* ==========================================
       Error State
    ========================================== */

    if (error || !supportData) {

        return (

            <div className="customer-support-error">

                {
                    error ||
                    "Customer support data unavailable"
                }

            </div>

        );

    }


    /* ==========================================
       Filter Tickets
    ========================================== */

    const filteredTickets =
        supportData.tickets.filter(
            (ticket) => {

                if (
                    activeFilter === "ongoing"
                ) {

                    return (
                        ticket.status === "Ongoing"
                    );

                }


                if (
                    activeFilter === "closed"
                ) {

                    return (
                        ticket.status === "Closed"
                    );

                }


                return true;

            }
        );


    /* ==========================================
       Customer Support Page
    ========================================== */

    return (

        <div className="customer-support">

            <SupportHeader
                dateFrom={dateFrom}
                dateTo={dateTo}
                onDateFromChange={setDateFrom}
                onDateToChange={setDateTo}
            />


            <SupportMetrics
                metrics={supportData.metrics}
            />


            <SupportTabs
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
            />


            <SupportTable
                tickets={filteredTickets}
                onViewTicket={handleViewTicket}
                onCloseTicket={handleCloseTicket}
            />


            {
                selectedTicket && (

                    <TicketDetailsModal
                        ticket={selectedTicket}
                        onClose={
                            handleCloseTicketModal
                        }
                        onResolve={
                            handleResolveTicket
                        }
                    />

                )
            }

        </div>

    );

};


export default CustomerSupport;
