import { useEffect, useState } from "react";

import "./KYC.css";

import { getKYCRecords } from "./api";

import type { KYCRecord } from "./types";

import KYCHeader from "./components/KYCHeader/KYCHeader";

import KYCFilters from "./components/KYCFilters/KYCFilters";
import type { KYCFilterType } from "./components/KYCFilters/KYCFilters";

import KYCTable from "./components/KYCTable/KYCTable";

const KYC = () => {

    const [records, setRecords] = useState<KYCRecord[]>([]);

    const [filteredRecords, setFilteredRecords] = useState<KYCRecord[]>([]);

    const [search, setSearch] = useState("");

    const [activeFilter, setActiveFilter] =
        useState<KYCFilterType>("All");

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadKYCData();

    }, []);

    useEffect(() => {

        filterRecords();

    }, [records, search, activeFilter]);

    const loadKYCData = async () => {

        try {

            setLoading(true);

            const response = await getKYCRecords();

            setRecords(response.records);

            setFilteredRecords(response.records);

        }

        catch (error) {

            console.error("Failed to load KYC Records", error);

        }

        finally {

            setLoading(false);

        }

    };

    const filterRecords = () => {

        let data = [...records];

        if (activeFilter !== "All") {

            data = data.filter(

                item => {

                    const status =
                        activeFilter === "Approved"
                            ? "Verified"
                            : activeFilter;

                    return item.status === status;

                }

            );

        }

        if (search.trim()) {

            data = data.filter(item =>

                item.username
                    .toLowerCase()
                    .includes(search.toLowerCase())

                ||

                item.riderId
                    .toLowerCase()
                    .includes(search.toLowerCase())

                ||

                item.fullName
                    .toLowerCase()
                    .includes(search.toLowerCase())

            );

        }

        setFilteredRecords(data);

    };

    const handleExport = () => {

        console.log("Export KYC");

        // ============================================
        // Backend Integration
        //
        // exportKYCRecords();
        //
        // ============================================

    };

    if (loading) {

        return (

            <div className="kyc-loading">

                Loading KYC Records...

            </div>

        );

    }

    return (

        <div className="kyc-page fade-in">

            <KYCHeader

                search={search}

                onSearchChange={setSearch}

                onExport={handleExport}

            />

            <KYCFilters

                activeFilter={activeFilter}

                onFilterChange={setActiveFilter}

            />

            <KYCTable

                records={filteredRecords}

            />

        </div>

    );

};

export default KYC;
