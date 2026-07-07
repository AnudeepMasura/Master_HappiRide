import { ridersDummy } from "./dummyData";

import type { RidersResponse } from "./types";

export const getRiders=async():Promise<RidersResponse>=>{

// ======================================
// Development
// ======================================

return Promise.resolve(ridersDummy);

// ======================================
// Backend
// ======================================

/*

const response=await fetch(

`${import.meta.env.VITE_API_BASE_URL}/riders`

);

return await response.json();

*/

};