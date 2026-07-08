import { useEffect, useState } from "react";

import "./RideHistory.css";

import { getRideHistory } from "./api";

import type { RideHistoryRecord } from "./types";

import RideHistoryHeader from "./components/RideHistoryHeader/RideHistoryHeader";
import RideFilters from "./components/RideFilters/RideFilters";
import type { RideFilterType } from "./components/RideFilters/RideFilters";
import RideTable from "./components/RideTable/RideTable";

const RideHistory = () => {

    const [rides, setRides] = useState<RideHistoryRecord[]>([]);

    const [filteredRides, setFilteredRides] = useState<RideHistoryRecord[]>([]);

    const [activeFilter, setActiveFilter] =
        useState<RideFilterType>("All");

    const [fromDate, setFromDate] = useState("");

    const [toDate, setToDate] = useState("");

    useEffect(() => {

        loadRideHistory();

    }, []);

    useEffect(() => {

        filterRides();

    }, [rides, activeFilter]);

    const loadRideHistory = async () => {

        try {

            const response = await getRideHistory();

            setRides(response.rides);

            setFilteredRides(response.rides);

        }

        catch (error) {

            console.error(error);

        }

    };

    const filterRides = () => {

        if (activeFilter === "All") {

            setFilteredRides(rides);

            return;

        }

        const filtered = rides.filter(

            ride => ride.serviceType === activeFilter

        );

        setFilteredRides(filtered);

    };

    const handleExport = () => {

        console.log("Export Ride History");

        // ============================================
        // BACKEND
        //
        // exportRideHistory()
        //
        // ============================================

    };

    return (

        <div className="ride-history-page fade-in">

            <RideHistoryHeader

                fromDate={fromDate}

                toDate={toDate}

                onFromDateChange={setFromDate}

                onToDateChange={setToDate}

                onExport={handleExport}

            />

            <RideFilters

                activeFilter={activeFilter}

                onFilterChange={setActiveFilter}

            />

            <RideTable

                rides={filteredRides}

            />

        </div>

    );

};

export default RideHistory;
