import { useEffect, useState } from "react";

import "./Support.css";

import { getSupportData } from "./api";

import type {
    SupportTicket,
    SupportStats
} from "./types";

import SupportHeader from "./components/SupportHeader/SupportHeader";
import SupportStatsCards from "./components/SupportStats/SupportStats";
import SupportFilters from "./components/SupportFilters/SupportFilters";
import type {
    SupportFilterType
} from "./components/SupportFilters/SupportFilters";
import SupportTable from "./components/SupportTable/SupportTable";

import Pagination from "../../components/common/Pagination/Pagination";

const Support = () => {

    const [stats, setStats] = useState<SupportStats>({
        totalTickets: 0,
        userTickets: 0,
        riderTickets: 0
    });

    const [tickets, setTickets] = useState<SupportTicket[]>([]);
    const [filteredTickets, setFilteredTickets] = useState<SupportTicket[]>([]);

    const [activeFilter, setActiveFilter] =
        useState<SupportFilterType>("All");

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 10;

    useEffect(() => {

        loadSupportData();

    }, []);

    useEffect(() => {

        filterTickets();

    }, [tickets, activeFilter, fromDate, toDate]);

    const loadSupportData = async () => {

        try {

            setLoading(true);

            const response = await getSupportData();

            setStats(response.stats);

            setTickets(response.tickets);

            setFilteredTickets(response.tickets);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    const filterTickets = () => {

        let data = [...tickets];

        if (activeFilter === "Ongoing Tickets") {

            data = data.filter(

                ticket => ticket.status === "Ongoing"

            );

        }

        else if (activeFilter === "Closed Tickets") {

            data = data.filter(

                ticket => ticket.status === "Closed"

            );

        }

        // ===========================================
        // Backend Date Filter
        // Replace this with backend filtering later
        // ===========================================

        if (fromDate && toDate) {

            // Example backend implementation

            /*
            data = data.filter(ticket => {

                const date = new Date(ticket.date);

                return date >= new Date(fromDate)
                    &&
                       date <= new Date(toDate);

            });
            */

        }

        setFilteredTickets(data);

        setCurrentPage(1);

    };

    const lastIndex = currentPage * pageSize;

    const firstIndex = lastIndex - pageSize;

    const currentTickets = filteredTickets.slice(

        firstIndex,

        lastIndex

    );

    const totalPages = Math.ceil(

        filteredTickets.length / pageSize

    );

    if (loading) {

        return (

            <div className="support-loading">

                Loading Customer Support...

            </div>

        );

    }

    return (

        <div className="support-page fade-in">

            <SupportHeader

                fromDate={fromDate}

                toDate={toDate}

                onFromDateChange={setFromDate}

                onToDateChange={setToDate}

            />

            <SupportStatsCards

                stats={stats}

            />

            <SupportFilters

                activeFilter={activeFilter}

                onFilterChange={setActiveFilter}

            />

            <SupportTable

                tickets={currentTickets}

            />

            <Pagination

                currentPage={currentPage}

                totalPages={totalPages}

                onPageChange={setCurrentPage}

            />

        </div>

    );

};

export default Support;
