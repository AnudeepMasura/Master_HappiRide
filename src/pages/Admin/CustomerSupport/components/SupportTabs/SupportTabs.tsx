import type {
    TicketFilter
} from "../../types";

import "./SupportTabs.css";

interface SupportTabsProps {

    activeFilter: TicketFilter;

    onFilterChange: (
        filter: TicketFilter
    ) => void;

}

const SupportTabs = ({
    activeFilter,
    onFilterChange
}: SupportTabsProps) => {

    return (

        <div className="support-tabs">

            <button
                className={
                    activeFilter === "all"
                        ? "support-tab active"
                        : "support-tab"
                }
                onClick={() =>
                    onFilterChange("all")
                }
            >

                All

            </button>

            <button
                className={
                    activeFilter === "ongoing"
                        ? "support-tab active"
                        : "support-tab"
                }
                onClick={() =>
                    onFilterChange("ongoing")
                }
            >

                Ongoing Tickets

            </button>

            <button
                className={
                    activeFilter === "closed"
                        ? "support-tab active"
                        : "support-tab"
                }
                onClick={() =>
                    onFilterChange("closed")
                }
            >

                Closed Tickets

            </button>

        </div>

    );

};

export default SupportTabs;