// ==========================================================
// Users Dummy Data
// ==========================================================

import type {
    UsersResponse
} from "./types";


export const usersDummyData: UsersResponse = {

    totalUsers: 240,

    users: [

        {

            id: "#USR101",

            username: "rahul_k",

            fullName: "Rahul Kumar",

            phone: "+91 98765 43210",

            gender: "M",

            dob: "22-05-1998",

            gmail: "rahul.k@email.com",

            referralCode: "HAP101",

            referredBy: "amit_s",

            referredGuyEarnings: 1200,

            referredTo: [
                "anita_s",
                "vikram_r",
                "suresh_k"
            ],

            earningsFromReferrals: 3400,

            ridesCompleted: 45,

            gov: 12400,

            platformEarning: 1240,

            referral: "Active",

            distance: 156.4,

            rating: 4,

            supportTickets: 2,

            status: "Blocked",

            doneBy: "admin_sarah"

        },


        {

            id: "#USR102",

            username: "anita_s",

            fullName: "Anita Singh",

            phone: "+91 99887 76655",

            gender: "F",

            dob: "15-08-1995",

            gmail: "anita.s@email.com",

            referralCode: "HAP102",

            referredBy: "rahul_k",

            referredGuyEarnings: 450,

            referredTo: [
                "priya_m"
            ],

            earningsFromReferrals: 950,

            ridesCompleted: 12,

            gov: 4200,

            platformEarning: 420,

            referral: "Active",

            distance: 45.2,

            rating: 5,

            supportTickets: 0,

            status: "Active",

            doneBy: "admin_dev"

        },


        {

            id: "#USR103",

            username: "vikram_r",

            fullName: "Vikram Reddy",

            phone: "+91 98480 12345",

            gender: "M",

            dob: "10-11-1999",

            gmail: "vikram.r@email.com",

            referralCode: "HAP103",

            referredBy: "rahul_k",

            referredGuyEarnings: 0,

            referredTo: [],

            earningsFromReferrals: 0,

            ridesCompleted: 31,

            gov: 8900,

            platformEarning: 890,

            referral: "Inactive",

            distance: 112.7,

            rating: 4,

            supportTickets: 1,

            status: "Active",

            doneBy: "admin_dev"

        },


        {

            id: "#USR104",

            username: "priya_m",

            fullName: "Priya Mehta",

            phone: "+91 91234 56789",

            gender: "F",

            dob: "04-02-2000",

            gmail: "priya.m@email.com",

            referralCode: "HAP104",

            referredBy: "anita_s",

            referredGuyEarnings: 1800,

            referredTo: [
                "kiran_p",
                "neha_s"
            ],

            earningsFromReferrals: 2600,

            ridesCompleted: 67,

            gov: 18600,

            platformEarning: 1860,

            referral: "Active",

            distance: 245.8,

            rating: 5,

            supportTickets: 3,

            status: "Active",

            doneBy: "admin_sarah"

        }

    ]

};
