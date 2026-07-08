// ==========================================================
// Users API Service
// ==========================================================
//
// IMPORTANT
// ---------
//
// Frontend developers should ONLY call:
//
// getUsersData()
//
// They should NEVER import dummyData directly.
//
// ==========================================================


import {
    usersDummyData
} from "./dummyData";


import type {
    UsersResponse
} from "./types";


export const getUsersData =
async (): Promise<UsersResponse> => {


    // ======================================================
    // DEVELOPMENT MODE
    // ======================================================

    return Promise.resolve(

        structuredClone(
            usersDummyData
        )

    );


    // ======================================================
    // BACKEND MODE
    // ======================================================

    /*
    try {

        const response = await fetch(

            `${import.meta.env.VITE_API_BASE_URL}/users`

        );


        if (!response.ok) {

            throw new Error(
                "Failed to fetch users"
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