import type { KYCResponse } from "./types";

import { kycDummyData } from "./dummyData";

export const getKYCRecords=async():Promise<KYCResponse>=>{

    // ==========================================================
    // DEVELOPMENT
    // ==========================================================

    return Promise.resolve(kycDummyData);

    // ==========================================================
    // BACKEND
    // ==========================================================

    /*
    const response=await fetch(

        `${import.meta.env.VITE_API_BASE_URL}/kyc`

    );

    if(!response.ok){

        throw new Error("Failed to fetch KYC Records");

    }

    return await response.json();
    */

};