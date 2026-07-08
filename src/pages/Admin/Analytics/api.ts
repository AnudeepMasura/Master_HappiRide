// ==========================================================
// Analytics API Service
// ==========================================================
//
// IMPORTANT
// ---------
//
// Frontend developers should ONLY call:
//
// getAnalyticsData()
//
// They should NEVER import dummyData directly.
//
// ==========================================================

import { analyticsDummyData } from "./dummyData";

import type { AnalyticsResponse } from "./types";


// ==========================================================
// Analytics Date Filter
// ==========================================================

interface AnalyticsDateFilter {

    dateFrom: string;

    dateTo: string;

}


// ==========================================================
// Get Analytics Data
// ==========================================================

export const getAnalyticsData = async (
    filter?: AnalyticsDateFilter
): Promise<AnalyticsResponse> => {

    // ======================================================
    // DEVELOPMENT MODE
    // ======================================================
    //
    // Backend APIs are NOT ready.
    //
    // Returning local dummy data.
    //
    // ======================================================

    if (!filter) {

        return Promise.resolve(
            structuredClone(analyticsDummyData)
        );

    }


    // ======================================================
    // Calculate Selected Date Range
    // ======================================================

    const fromDate =
        new Date(filter.dateFrom);

    const toDate =
        new Date(filter.dateTo);

    const difference =
        toDate.getTime() -
        fromDate.getTime();

    const totalDays = Math.max(

        1,

        Math.floor(
            difference /
            (
                1000 *
                60 *
                60 *
                24
            )
        ) + 1

    );


    // ======================================================
    // Dummy Filter Multiplier
    // ======================================================
    //
    // 27 days = original dummy data
    //
    // 27 days -> 100%
    // 14 days -> around 51%
    // 7 days  -> around 25%
    //
    // ======================================================

    const multiplier = Math.max(

        0.15,

        totalDays / 27

    );


    // ======================================================
    // Create Filtered Data
    // ======================================================

    const filteredData =
        structuredClone(analyticsDummyData);


    // ======================================================
    // Update Segment Metrics
    // ======================================================

    filteredData.segments =
        filteredData.segments.map(
            (segment) => ({

                ...segment,

                metrics: segment.metrics.map(
                    (metric) => {

                        const numericValue =
                            Number(metric.value);

                        if (
                            Number.isNaN(numericValue)
                        ) {

                            return metric;

                        }

                        return {

                            ...metric,

                            value: Math.max(

                                0,

                                Math.round(
                                    numericValue *
                                    multiplier
                                )

                            )

                        };

                    }
                )

            })
        );


    // ======================================================
    // Simulate API Delay
    // ======================================================

    await new Promise((resolve) => {

        setTimeout(resolve, 500);

    });


    // ======================================================
    // Return Filtered Data
    // ======================================================

    return filteredData;


    // ======================================================
    // BACKEND MODE
    // ======================================================

    /*
    try {

        const query =
            new URLSearchParams({

                dateFrom:
                    filter?.dateFrom || "",

                dateTo:
                    filter?.dateTo || ""

            });

        const response = await fetch(

            `${import.meta.env.VITE_API_BASE_URL}/analytics?${query}`

        );

        if (!response.ok) {

            throw new Error(
                "Failed to fetch analytics"
            );

        }

        return await response.json();

    }

    catch (error) {

        console.error(error);

        throw error;

    }
    */

};