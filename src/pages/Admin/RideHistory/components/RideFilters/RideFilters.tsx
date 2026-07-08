import "./RideFilters.css";

export type RideFilterType =
    | "All"
    | "Car Pooling"
    | "Car Taxi"
    | "Car Travels";

interface RideFiltersProps {

    activeFilter: RideFilterType;

    onFilterChange: (
        filter: RideFilterType
    ) => void;

}

const RideFilters = ({
    activeFilter,
    onFilterChange
}: RideFiltersProps) => {

    const filters: RideFilterType[] = [

        "All",

        "Car Pooling",

        "Car Taxi",

        "Car Travels"

    ];

    return (

        <div className="ride-filters">

            {

                filters.map((filter) => (

                    <button

                        key={filter}

                        type="button"

                        className={
                            activeFilter === filter
                                ? "ride-filter active"
                                : "ride-filter"
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

export default RideFilters;