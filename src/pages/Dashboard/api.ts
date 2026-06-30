// ==========================================================
// Dashboard API Service
// ==========================================================
//
// IMPORTANT
// ---------
//
// Frontend developers should ONLY call:
//
// getDashboardData()
//
// They should NEVER import dummyData directly.
//
// ==========================================================

import { dashboardDummyData } from "./dummyData";
import type { DashboardResponse } from "./types";

export const getDashboardData =
async (): Promise<DashboardResponse> => {

    // ======================================================
    // DEVELOPMENT MODE
    // ======================================================
    //
    // Backend APIs are NOT ready.
    //
    // Returning local dummy data.
    //
    // ======================================================

    return Promise.resolve(dashboardDummyData);

    // ======================================================
    // BACKEND MODE
    // ======================================================
    //
    // Backend Engineer:
    //
    // Step 1:
    // Remove the return statement above.
    //
    // Step 2:
    // Uncomment the code below.
    //
    // Step 3:
    // Verify endpoint response matches DashboardResponse.
    //
    // ======================================================

    /*
    try{

        const response = await fetch(

            `${import.meta.env.VITE_API_BASE_URL}/dashboard`

        );

        if(!response.ok){

            throw new Error("Failed to fetch dashboard");

        }

        return await response.json();

    }

    catch(error){

        console.error(error);

        throw error;

    }
    */

};
