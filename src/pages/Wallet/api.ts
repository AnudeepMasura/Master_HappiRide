// ==========================================================
// Wallet API Service
// ==========================================================

import type { WalletResponse } from "./types";

import { walletDummyData } from "./dummyData";

export const getWalletData=

async():Promise<WalletResponse>=>{

// ===================================================
// DEVELOPMENT MODE
//
// Backend not ready.
//
// Returning dummy data.
//
// ===================================================

return Promise.resolve(walletDummyData);

// ===================================================
// BACKEND MODE
//
// Backend Engineer:
//
// 1.Remove return above
//
// 2.Uncomment code below
//
// ===================================================

/*

try{

const response=await fetch(

`${import.meta.env.VITE_API_BASE_URL}/wallet`

);

if(!response.ok){

throw new Error("Failed to fetch wallet");

}

return await response.json();

}

catch(error){

console.error(error);

throw error;

}

*/

};