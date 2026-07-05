// ==========================================================
// Analytics Dummy Data
// ==========================================================

import type { AnalyticsResponse } from "./types";

export const analyticsDummyData: AnalyticsResponse = {

    segments: [

        {

            id: 1,

            title: "Car Taxi Segment",

            badge: "TAXI ONLY",

            badgeType: "taxi",

            icon: "taxi",

            metrics: [

                {
                    label: "Total Car Taxi Rides Today",
                    value: 156
                },

                {
                    label: "Total Travellers Today",
                    value: 312
                },

                {
                    label: "Total Riders Today",
                    value: 124
                },

                {
                    label: "Avg Trips per Traveller Today",
                    value: "1.2"
                },

                {
                    label: "Avg Trips per Riders Today",
                    value: "1.5"
                },

                {
                    label: "Gross Order Value",
                    value: "₹28,450"
                },

                {
                    label: "Platform Revenue",
                    value: "₹4,267"
                },

                {
                    label: "Referral Share",
                    value: "₹1,420"
                },

                {
                    label: "Total Support Tickets",
                    value: 4
                }

            ]

        },

        {

            id: 2,

            title: "Car Pooling Segment",

            badge: "POOLING",

            badgeType: "pooling",

            icon: "pooling",

            metrics: [

                {
                    label: "Total Car Pooling Rides Today",
                    value: 94
                },

                {
                    label: "Total Travellers Today",
                    value: 376
                },

                {
                    label: "Total Riders Today",
                    value: 45
                },

                {
                    label: "Avg Trips per Traveller Today",
                    value: "1.0"
                },

                {
                    label: "Avg Trips per Riders Today",
                    value: "2.1"
                },

                {
                    label: "Gross Order Value",
                    value: "₹14,100"
                },

                {
                    label: "Platform Revenue",
                    value: "₹2,115"
                },

                {
                    label: "Referral Share",
                    value: "₹705"
                },

                {
                    label: "Total Support Tickets",
                    value: 0
                }

            ]

        },

        {

            id: 3,

            title: "Private Car Travels",

            badge: "PRIVATE",

            badgeType: "private",

            icon: "private",

            metrics: [

                {
                    label: "Total Private Car Travels Rides Today",
                    value: 38
                },

                {
                    label: "Total Travellers Today",
                    value: 152
                },

                {
                    label: "Total Riders Today",
                    value: 22
                },

                {
                    label: "Gross Order Value",
                    value: "₹34,200"
                },

                {
                    label: "Platform Revenue",
                    value: "₹5,130"
                },

                {
                    label: "Referral Share",
                    value: "₹1,710"
                },

                {
                    label: "Total Support Tickets",
                    value: 2
                }

            ]

        }

    ],

    retentionData: [

        {
            label: "1 Visit",
            value: 150
        },

        {
            label: "2 Visits",
            value: 95
        },

        {
            label: "3 Visits",
            value: 78
        },

        {
            label: "4 Visits",
            value: 62
        },

        {
            label: "5 Visits",
            value: 44
        },

        {
            label: "6 Visits",
            value: 30
        },

        {
            label: "7+ Visits",
            value: 20
        }

    ],

    serviceUtilization: [

        {
            name: "Car Taxi",
            value: 55
        },

        {
            name: "Car Pooling",
            value: 32
        },

        {
            name: "Private Car Travels",
            value: 13
        }

    ],

    ageDemographics: [

        {
            name: "18 - 24 years",
            value: 22
        },

        {
            name: "25 - 34 years",
            value: 49
        },

        {
            name: "35 - 44 years",
            value: 21
        },

        {
            name: "45+ years",
            value: 8
        }

    ]

};