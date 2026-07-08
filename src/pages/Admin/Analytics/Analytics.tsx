import {
    useEffect,
    useState
} from "react";

import AnalyticalTimeframe
from "./components/AnalyticalTimeframe/AnalyticalTimeframe";

import OverviewSegmentMetrics
from "./components/OverviewSegmentMetrics/OverviewSegmentMetrics";

import AnalyticsTrendVisualizations
from "./components/AnalyticsTrendVisualizations/AnalyticsTrendVisualizations";

import {
    getAnalyticsData
} from "./api";

import type {
    AnalyticsResponse
} from "./types";

import "./Analytics.css";

const Analytics = () => {

    const [analyticsData, setAnalyticsData] =
        useState<AnalyticsResponse | null>(null);

    const [dateFrom, setDateFrom] =
        useState("2026-06-01");

    const [dateTo, setDateTo] =
        useState("2026-06-27");

    const [filterLoading, setFilterLoading] =
        useState(false);


    // ======================================================
    // Initial Data
    // ======================================================

    useEffect(() => {

        loadAnalytics();

    }, []);


    const loadAnalytics = async () => {

        const data =
            await getAnalyticsData();

        setAnalyticsData(data);

    };


    // ======================================================
    // Apply Date Filter
    // ======================================================

    const handleApplyFilter = async () => {

        if (!dateFrom || !dateTo) {

            alert(
                "Please select both dates"
            );

            return;

        }

        if (
            new Date(dateFrom) >
            new Date(dateTo)
        ) {

            alert(
                "From date cannot be greater than To date"
            );

            return;

        }

        try {

            setFilterLoading(true);

            const data =
                await getAnalyticsData({

                    dateFrom,

                    dateTo

                });

            setAnalyticsData(data);

        }

        catch (error) {

            console.error(
                "Date filter error:",
                error
            );

        }

        finally {

            setFilterLoading(false);

        }

    };


    // ======================================================
    // Loading
    // ======================================================

    if (!analyticsData) {

        return (

            <div className="analytics-loading">

                Loading Analytics...

            </div>

        );

    }


    // ======================================================
    // Analytics Page
    // ======================================================

    return (

        <div className="analytics">

            <AnalyticalTimeframe

                dateFrom={dateFrom}

                dateTo={dateTo}

                loading={filterLoading}

                onDateFromChange={
                    setDateFrom
                }

                onDateToChange={
                    setDateTo
                }

                onApplyFilter={
                    handleApplyFilter
                }

            />


            <OverviewSegmentMetrics

                segments={
                    analyticsData.segments
                }

            />


            <AnalyticsTrendVisualizations />

        </div>

    );

};

export default Analytics;