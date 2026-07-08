import { useEffect, useState } from "react";

import "./Riders.css";

import { getRiders } from "./api";

import type { Rider } from "./types";

import RidersHeader from "./components/RidersHeader/RidersHeader";
import RidersTable from "./components/RidersTable/RidersTable";

const Riders = () => {

    const [riders, setRiders] = useState<Rider[]>([]);

    const [filteredRiders, setFilteredRiders] = useState<Rider[]>([]);

    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);

    const ridersPerPage = 10;

    useEffect(() => {

        loadRiders();

    }, []);

    useEffect(() => {

        filterRiders();

    }, [search, riders]);

    const loadRiders = async () => {

        try {

            setLoading(true);

            const response = await getRiders();

            setRiders(response.riders);

            setFilteredRiders(response.riders);

        }

        catch (error) {

            console.error("Failed to load riders", error);

        }

        finally {

            setLoading(false);

        }

    };

    const filterRiders = () => {

        let data = [...riders];

        if (search.trim()) {

            data = data.filter(

                rider =>

                    rider.fullName
                        .toLowerCase()
                        .includes(search.toLowerCase())

                    ||

                    rider.username
                        .toLowerCase()
                        .includes(search.toLowerCase())

                    ||

                    rider.phone
                        .includes(search)

                    ||

                    rider.riderId
                        .toLowerCase()
                        .includes(search.toLowerCase())

                    ||

                    rider.language
                        .toLowerCase()
                        .includes(search.toLowerCase())

                    ||

                    rider.referralCode
                        .toLowerCase()
                        .includes(search.toLowerCase())

            );

        }

        setFilteredRiders(data);

        setCurrentPage(1);

    };

    const indexOfLast = currentPage * ridersPerPage;

    const indexOfFirst = indexOfLast - ridersPerPage;

    const currentRiders = filteredRiders.slice(

        indexOfFirst,

        indexOfLast

    );

    const handleFilterClick = () => {

        console.log("Open Filter Drawer");

        // ===========================================
        // Backend
        //
        // Open Filter Drawer / Modal
        //
        // ===========================================

    };

    if (loading) {

        return (

            <div className="riders-loading">

                Loading Riders...

            </div>

        );

    }

    return (

        <div className="riders-page fade-in">

            <RidersHeader

                search={search}

                onSearchChange={setSearch}

                onFilterClick={handleFilterClick}

            />

            <RidersTable

                riders={currentRiders}

            />

           

        </div>

    );

};

export default Riders;
