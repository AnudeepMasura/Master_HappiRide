import type { KYCResponse } from "./types";

export const kycDummyData:KYCResponse={

    records:[

        {

            id:1,

            riderId:"#RID-101",

            username:"alex_driver",

            fullName:"Alex Rivera",

            mobile:"+91 9876543210",

            service:"Car Pooling",

            personalDocument:true,

            riderKYC:true,

            vehicleKYC:true,

            status:"Verified",

            verifiedBy:"Admin_User1",

            rejectionCount:0,

            rejectedReason:""

        },

        {

            id:2,

            riderId:"#RID-102",

            username:"mike_travels",

            fullName:"Mike V.",

            mobile:"+91 9988776655",

            service:"Car Travels",

            personalDocument:true,

            riderKYC:true,

            vehicleKYC:false,

            status:"Pending",

            verifiedBy:"",

            rejectionCount:2,

            rejectedReason:"Vehicle RC not uploaded"

        },

        {

            id:3,

            riderId:"#RID-103",

            username:"john_taxi",

            fullName:"John Carter",

            mobile:"+91 9123456789",

            service:"Car Taxi",

            personalDocument:true,

            riderKYC:true,

            vehicleKYC:true,

            status:"Rejected",

            verifiedBy:"Admin_User2",

            rejectionCount:3,

            rejectedReason:"Driving License Expired"

        },

        {

            id:4,

            riderId:"#RID-104",

            username:"rahul_pool",

            fullName:"Rahul Kumar",

            mobile:"+91 9876501234",

            service:"Car Pooling",

            personalDocument:true,

            riderKYC:false,

            vehicleKYC:false,

            status:"Pending",

            verifiedBy:"",

            rejectionCount:1,

            rejectedReason:"Aadhar image blurred"

        },

        {

            id:5,

            riderId:"#RID-105",

            username:"anudeep",

            fullName:"Anudeep R",

            mobile:"+91 9988123456",

            service:"Car Taxi",

            personalDocument:true,

            riderKYC:true,

            vehicleKYC:true,

            status:"Verified",

            verifiedBy:"Admin_User3",

            rejectionCount:0,

            rejectedReason:""

        }

    ]

};