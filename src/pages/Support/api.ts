import { supportDummy } from "./dummyData";

import type { SupportResponse } from "./types";

export const getSupportData=async():Promise<SupportResponse>=>{

// ===================================================
// Development
// ===================================================

return Promise.resolve(supportDummy);

// ===================================================
// Backend
// ===================================================

/*

const response=await fetch(

`${import.meta.env.VITE_API_BASE_URL}/customer-support`

);

return await response.json();

*/

};