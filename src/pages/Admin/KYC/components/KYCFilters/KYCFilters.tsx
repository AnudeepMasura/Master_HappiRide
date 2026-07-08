import "./KYCFilters.css";

export type KYCFilterType =
    | "All Requests"
    | "Pending"
    | "Verified"
    | "Rejected"
    | "Blocked";

interface KYCFiltersProps {

    activeFilter: KYCFilterType;

    onFilterChange: (
        filter: KYCFilterType
    ) => void;

}

const KYCFilters = ({
    activeFilter,
    onFilterChange
}: KYCFiltersProps) => {

    const filters: KYCFilterType[] = [

        "All Requests",

        "Pending",

        "Verified",

        "Rejected"

        ,

        "Blocked"

    ];

    return (

        <div className="kyc-filters">

            {

                filters.map((filter) => (

                    <button

                        key={filter}

                        type="button"

                        className={
                            activeFilter === filter
                                ? "kyc-filter active"
                                : "kyc-filter"
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

export default KYCFilters;
