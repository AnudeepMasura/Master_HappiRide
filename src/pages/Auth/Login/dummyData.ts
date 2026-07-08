// ==========================================================
// Login Dummy Data
// ==========================================================

import type {
    LoginCredentials
} from "./types";

export const masterLoginCredentials: LoginCredentials & {
    role: "admin" | "support" | "kyc";
} = {

    username: "master@happiride.com",

    password: "master123",

    role: "admin"

};

export const supportLoginCredentials: LoginCredentials & {
    role: "support";
} = {

    username: "support@happiride.com",

    password: "support123",

    role: "support"

};

export const kycLoginCredentials: LoginCredentials & {
    role: "kyc";
} = {

    username: "kyc@happiride.com",

    password: "kyc123",

    role: "kyc"

};
