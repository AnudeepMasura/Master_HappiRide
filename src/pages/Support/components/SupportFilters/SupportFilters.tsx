import "./SupportFilters.css";

export type SupportFilterType =
    | "All"
    | "Ongoing Tickets"
    | "Closed Tickets";

interface SupportFiltersProps {

    activeFilter: SupportFilterType;

    onFilterChange: (
        filter: SupportFilterType
    ) => void;

}

const SupportFilters = ({

    activeFilter,

    onFilterChange

}: SupportFiltersProps) => {

    const filters: SupportFilterType[] = [

        "All",

        "Ongoing Tickets",

        "Closed Tickets"

    ];

    return (

        <div className="support-filters">

            {

                filters.map((filter) => (

                    <button

                        key={filter}

                        className={

                            activeFilter === filter

                                ? "support-filter active"

                                : "support-filter"

                        }

                        onClick={() =>

                            onFilterChange(filter)

                        }

                    >

                        {filter}

                    </button>

                ))

            }

        </div>

    );

};

export default SupportFilters;