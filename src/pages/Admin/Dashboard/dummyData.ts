// ==========================================================
// Dashboard Dummy Data
// ==========================================================
//
// PURPOSE
// -------
// This file is used ONLY during frontend development.
//
// Backend APIs are currently unavailable.
//
// Once backend APIs are completed:
//
// 1. Keep this file for backup/testing.
// 2. api.ts will be switched to backend.
// 3. No UI component needs modification.
//
// ==========================================================

import type { DashboardResponse } from "./types";

export const dashboardDummyData: DashboardResponse = {

    metrics: [

        {
            id:1,
            title:"TOTAL ACTIVE RIDES TODAY",
            value:8,
            icon:"car",
            trend:"+5%",
            trendType:"up"
        },

        {
            id:2,
            title:"TOTAL ACTIVE CAR TAXI RIDES",
            value:3,
            icon:"taxi",
            trend:"+2%",
            trendType:"up"
        },

        {
            id:3,
            title:"TOTAL ACTIVE CAR POOLING",
            value:3,
            icon:"pooling",
            trend:"+4%",
            trendType:"up"
        },

        {
            id:4,
            title:"TOTAL ACTIVE PRIVATE TRAVELS",
            value:2,
            icon:"private",
            trend:"+1%",
            trendType:"up"
        },

        {
            id:5,
            title:"GROSS ORDER VALUE",
            value:"₹1,250",
            icon:"money",
            trend:"+3%",
            trendType:"up"
        },

        {
            id:6,
            title:"PLATFORM REVENUE",
            value:"₹188",
            icon:"revenue",
            trend:"+2%",
            trendType:"up"
        },

        {
            id:7,
            title:"REFERRAL SHARE",
            value:"₹62",
            icon:"share",
            trend:"+1%",
            trendType:"up"
        },

        {
            id:8,
            title:"TOTAL ACTIVE SUPPORT TICKETS",
            value:5,
            icon:"ticket",
            trend:"-2%",
            trendType:"down"
        }

    ],

    segments:[

        {

            id:1,

            title:"Car Taxi Segment",

            badge:"Taxi Only",

            badgeType:"taxi",

            icon:"taxi",

            metrics:[

                {
                    label:"Total Car Taxi Rides Today",
                    value:3
                },

                {
                    label:"Total Travellers Today",
                    value:3
                },

                {
                    label:"Total Riders Today",
                    value:2
                },

                {
                    label:"Average Trips per Traveller",
                    value:1
                },

                {
                    label:"Average Trips per Rider",
                    value:2
                },

                {
                    label:"Gross Order Value",
                    value:"₹500"
                },

                {
                    label:"Platform Revenue",
                    value:"₹75"
                },

                {
                    label:"Referral Share",
                    value:"₹25"
                },

                {
                    label:"Support Tickets",
                    value:2
                }

            ]

        },

        {

            id:2,

            title:"Car Pooling Segment",

            badge:"Pooling",

            badgeType:"pooling",

            icon:"pooling",

            metrics:[

                {
                    label:"Total Car Pooling Rides Today",
                    value:3
                },

                {
                    label:"Total Travellers Today",
                    value:6
                },

                {
                    label:"Total Riders Today",
                    value:3
                },

                {
                    label:"Average Trips per Traveller",
                    value:1
                },

                {
                    label:"Average Trips per Rider",
                    value:1
                },

                {
                    label:"Gross Order Value",
                    value:"₹400"
                },

                {
                    label:"Platform Revenue",
                    value:"₹60"
                },

                {
                    label:"Referral Share",
                    value:"₹20"
                },

                {
                    label:"Support Tickets",
                    value:1
                }

            ]

        },

        {

            id:3,

            title:"Private Car Travels",

            badge:"Private",

            badgeType:"private",

            icon:"private",

            metrics:[

                {
                    label:"Total Private Travels",
                    value:2
                },

                {
                    label:"Total Travellers",
                    value:2
                },

                {
                    label:"Total Riders",
                    value:1
                },

                {
                    label:"Gross Order Value",
                    value:"₹350"
                },

                {
                    label:"Platform Revenue",
                    value:"₹53"
                },

                {
                    label:"Referral Share",
                    value:"₹17"
                },

                {
                    label:"Support Tickets",
                    value:2
                }

            ]

        }

    ]

};