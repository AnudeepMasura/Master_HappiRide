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
            status: "Ongoing"
        },

        {
            id: "#TK-8820",
            date: "01/07/2026",
            issue: "Payment Refund",
            raisedBy: "Partner (for User)",
            location: "KA, India",
            status: "Closed"
        }

    ]

};