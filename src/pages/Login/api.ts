// ==========================================================
// Login API Service
// ==========================================================

import {
    masterLoginCredentials
} from "./dummyData";

import type {
    LoginCredentials,
    LoginResponse
} from "./types";

export const loginMaster = async (
    credentials: LoginCredentials
): Promise<LoginResponse> => {

    // ======================================================
    // DEVELOPMENT MODE
    // ======================================================

    return new Promise((resolve) => {

        setTimeout(() => {

            if (
                credentials.username ===
                    masterLoginCredentials.username &&
                credentials.password ===
                    masterLoginCredentials.password
            ) {

                resolve({

                    success: true,

                    message: "Login successful",

                    token: "dummy-master-token"

                });

            } else {

                resolve({

                    success: false,

                    message: "Invalid username or password"

                });

            }

        }, 500);

    });


    // ======================================================
    // BACKEND MODE
    // ======================================================

    /*
    try {

        const response = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(credentials)

            }
        );

        if (!response.ok) {

            throw new Error("Login failed");

        }

        return await response.json();

    } catch (error) {

        console.error(error);

        throw error;

    }
    */

};