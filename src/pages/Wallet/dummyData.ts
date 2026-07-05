// ==========================================================
// Wallet Dummy Data
// ==========================================================
//
// PURPOSE
// -------
// This file is used only during frontend development.
//
// Once backend APIs are completed:
//
// 1. Keep this file as backup.
// 2. Remove dummy return inside api.ts.
// 3. Uncomment backend API.
// 4. UI components DO NOT require any changes.
//
// ==========================================================

import type { WalletResponse } from "./types";

export const walletDummyData: WalletResponse = {

  stats: [

    {
      id: 1,
      title: "Gross Order Value",
      value: "₹45,267"
    },

    {
      id: 2,
      title: "Total Revenue",
      value: "₹12,115"
    },

    {
      id: 3,
      title: "Riders Earnings",
      value: "₹28,420"
    },

    {
      id: 4,
      title: "Referral Earnings",
      value: "₹4,705"
    },

    {
      id: 5,
      title: "Total Wallet Balance",
      value: "₹85,500"
    },

    {
      id: 6,
      title: "Riders Balance",
      value: "₹62,000"
    },

    {
      id: 7,
      title: "Referral Balance",
      value: "₹23,500"
    }

  ],

  withdrawals: [

    {
      id: 1,
      requestId: "WR-1001",
      requestDate: "05 Jul 2026",
      username: "Rahul Kumar",
      userType: "Rider",
      withdrawalAmount: "₹1,500",
      availableBalance: "₹5,200",
      status: "Pending"
    },

    {
      id: 2,
      requestId: "WR-1002",
      requestDate: "05 Jul 2026",
      username: "Anudeep",
      userType: "Driver",
      withdrawalAmount: "₹2,100",
      availableBalance: "₹7,100",
      status: "Approved"
    },

    {
      id: 3,
      requestId: "WR-1003",
      requestDate: "04 Jul 2026",
      username: "Karthik",
      userType: "Referral",
      withdrawalAmount: "₹950",
      availableBalance: "₹1,500",
      status: "Rejected"
    },

    {
      id: 4,
      requestId: "WR-1004",
      requestDate: "04 Jul 2026",
      username: "Suresh",
      userType: "Rider",
      withdrawalAmount: "₹2,750",
      availableBalance: "₹6,450",
      status: "Pending"
    },

    {
      id: 5,
      requestId: "WR-1005",
      requestDate: "03 Jul 2026",
      username: "Mahesh",
      userType: "Driver",
      withdrawalAmount: "₹3,100",
      availableBalance: "₹8,950",
      status: "Approved"
    },

    {
      id: 6,
      requestId: "WR-1006",
      requestDate: "03 Jul 2026",
      username: "Ravi",
      userType: "Referral",
      withdrawalAmount: "₹800",
      availableBalance: "₹1,100",
      status: "Rejected"
    },

    {
      id: 7,
      requestId: "WR-1007",
      requestDate: "02 Jul 2026",
      username: "Priya",
      userType: "Rider",
      withdrawalAmount: "₹1,950",
      availableBalance: "₹5,850",
      status: "Pending"
    },

    {
      id: 8,
      requestId: "WR-1008",
      requestDate: "02 Jul 2026",
      username: "Keerthi",
      userType: "Driver",
      withdrawalAmount: "₹4,200",
      availableBalance: "₹10,700",
      status: "Approved"
    }

  ]

};
