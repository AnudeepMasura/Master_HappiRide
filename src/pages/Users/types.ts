// ==========================================================
// Users Types
// ==========================================================

export type UserStatus =
    "Active" |
    "Blocked";


export interface UserRecord {

    id: string;

    username: string;

    fullName: string;

    phone: string;

    gender: string;

    dob: string;

    gmail: string;

    referralCode: string;

    referredBy: string;

    referredTo: string[];

    ridesCompleted: number;

    gov: number;

    platformEarning: number;

    distance: number;

    rating: number;

    supportTickets: number;

    status: UserStatus;

    doneBy: string;

}


export interface UsersResponse {

    users: UserRecord[];

    totalUsers: number;

}