import type { RideHistoryResponse } from "./types";

import { rideHistoryDummyData } from "./dummyData";

export const getRideHistory = async (): Promise<RideHistoryResponse> => {

    // =========================================================
    // DEVELOPMENT
    // =========================================================

    return Promise.resolve(rideHistoryDummyData);

    // =========================================================
    // BACKEND
    // =========================================================

    /*
    const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/ride-history`
    );

    if (!response.ok) {

        throw new Error("Failed to fetch Ride History");

    }

    return await response.json();
    */

};