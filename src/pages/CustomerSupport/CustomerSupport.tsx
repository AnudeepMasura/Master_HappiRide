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

import {
    getCustomerSupportData
} from "./api";

import type {
    CustomerSupportResponse,
    TicketFilter
} from "./types";

import "./CustomerSupport.css";

const CustomerSupport = () => {

    const [supportData, setSupportData] =
        useState<CustomerSupportResponse | null>(null);

    const [activeFilter, setActiveFilter] =
        useState<TicketFilter>("all");

    const [dateFrom, setDateFrom] =
        useState("");

    const [dateTo, setDateTo] =
        useState("");

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {

        loadCustomerSupportData();

    }, []);

    const loadCustomerSupportData = async () => {

        try {

            setLoading(true);

            const data =
                await getCustomerSupportData();

            setSupportData(data);

        } catch (error) {

            console.error(error);

            setError(
                "Unable to load customer support data"
            );

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div className="customer-support-loading">

                Loading customer support...

            </div>

        );

    }

    if (error || !supportData) {

        return (

            <div className="customer-support-error">

                {error}

            </div>

        );

    }

    const filteredTickets =
        supportData.tickets.filter((ticket) => {

            if (activeFilter === "ongoing") {

                return ticket.status === "Ongoing";

            }

            if (activeFilter === "closed") {

                return ticket.status === "Closed";

            }

            return true;

        });

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
            />

        </div>

    );

};

export default CustomerSupport;