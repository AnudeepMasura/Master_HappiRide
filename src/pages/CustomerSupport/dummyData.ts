// ==========================================================
// Customer Support Dummy Data
// ==========================================================

import type {
    CustomerSupportResponse
} from "./types";

export const customerSupportDummyData: CustomerSupportResponse = {

    metrics: [

        {
            id: 1,
            title: "Total Tickets (Till Date)",
            value: 128
        },

        {
            id: 2,
            title: "Tickets by Users",
            value: 85
        },

        {
            id: 3,
            title: "Tickets by Riders",
            value: 43
        }

    ],

    tickets: [

    {
        id: "#TK-8821",

        date: "02/07/2026",

        issue: "App login issue",

        raisedBy: "User",

        location: "AP, India",

        status: "Ongoing",

        description:
            "User is unable to login into the Happi Ride application. OTP is received successfully but authentication fails after verification.",

        customerName: "Rahul Kumar",

        phone: "+91 9876543221",

        email: "rahul@example.com"
    },

    {
        id: "#TK-8820",

        date: "01/07/2026",

        issue: "Payment Refund",

        raisedBy: "Partner (for User)",

        location: "KA, India",

        status: "Closed",

        description:
            "Customer cancelled the ride but the refund amount has not yet been credited to the original payment method.",

        customerName: "Arjun Reddy",

        phone: "+91 9876543220",

        email: "arjun@example.com"
    }

]

};