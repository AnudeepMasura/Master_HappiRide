import type { RideHistoryResponse } from "./types";

export const rideHistoryDummyData: RideHistoryResponse = {

    rides: [

        {

            id: 1,

            rideId: "#RH-9921",

            serviceType: "Car Pooling",

            pickupLocation: "Vijayawada",

            dropLocation: "Guntur",

            userName: "John Doe",

            riderName: "Alex R.",

            grossOrderValue: "₹450",

            riderEarnings: "₹315",

            platformEarnings: "₹90",

            referralEarnings: "₹45",

            referredUser: "Mike D.",

            referredRider: "Sam R.",

            referralAmount: "₹45",

            rating: 4.8,

            startDate: "05-07-2026",

            startTime: "10:00 AM",

            endDate: "05-07-2026",

            endTime: "11:30 AM",

            supportAvailable: true

        },

        {

            id: 2,

            rideId: "#RH-9922",

            serviceType: "Car Taxi",

            pickupLocation: "Benz Circle",

            dropLocation: "Gannavaram",

            userName: "Jane Smith",

            riderName: "Mike V.",

            grossOrderValue: "₹220",

            riderEarnings: "₹154",

            platformEarnings: "₹44",

            referralEarnings: "₹22",

            referredUser: "Tom S.",

            referredRider: "Ron K.",

            referralAmount: "₹22",

            rating: 5.0,

            startDate: "05-07-2026",

            startTime: "02:15 PM",

            endDate: "05-07-2026",

            endTime: "03:00 PM",

            supportAvailable: true

        },

        {

            id: 3,

            rideId: "#RH-9923",

            serviceType: "Car Travels",

            pickupLocation: "Hyderabad",

            dropLocation: "Warangal",

            userName: "Praveen",

            riderName: "Ramesh",

            grossOrderValue: "₹320",

            riderEarnings: "₹225",

            platformEarnings: "₹64",

            referralEarnings: "₹31",

            referredUser: "N/A",

            referredRider: "N/A",

            referralAmount: "₹0",

            rating: 4.7,

            startDate: "04-07-2026",

            startTime: "09:00 AM",

            endDate: "04-07-2026",

            endTime: "12:30 PM",

            supportAvailable: false

        }

    ]

};