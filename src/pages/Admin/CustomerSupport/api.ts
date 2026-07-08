// ==========================================================
// Customer Support API Service
// ==========================================================
//
// Frontend components should ONLY call:
//
// getCustomerSupportData()
//
// Components should NOT import dummyData directly.
//
// ==========================================================

import {
    customerSupportDummyData
} from "./dummyData";

import type {
    CustomerSupportResponse
} from "./types";

export const getCustomerSupportData =
async (): Promise<CustomerSupportResponse> => {

    // ======================================================
    // DEVELOPMENT MODE
    // ======================================================

    return Promise.resolve(customerSupportDummyData);

    // ======================================================
    // BACKEND MODE
    // ======================================================

    /*
    try {

        const response = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/customer-support`
        );

        if (!response.ok) {
            throw new Error(
                "Failed to fetch customer support data"
            );
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        throw error;

    }
    */

};