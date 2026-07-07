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

    referredGuyEarnings: number;

    referredTo: string[];

    earningsFromReferrals: number;

    ridesCompleted: number;

    gov: number;

    platformEarning: number;

    referral: string;

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
