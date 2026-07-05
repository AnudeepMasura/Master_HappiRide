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

export const getAnalyticsData =
async (): Promise<AnalyticsResponse> => {

    // ======================================================
    // DEVELOPMENT MODE
    // ======================================================
    //
    // Backend APIs are NOT ready.
    //
    // Returning local dummy data.
    //
    // ======================================================

    return Promise.resolve(analyticsDummyData);

    // ======================================================
    // BACKEND MODE
    // ======================================================

    /*
    try{

        const response = await fetch(

            `${import.meta.env.VITE_API_BASE_URL}/analytics`

        );

        if(!response.ok){

            throw new Error("Failed to fetch analytics");

        }

        return await response.json();

    }

    catch(error){

        console.error(error);

        throw error;

    }
    */

};