export interface Rider {

    id:number;

    riderId:string;

    username:string;

    fullName:string;

    phone:string;

    serviceType:"Car Pooling"|"Car Taxi"|"Private Car";

    language:string;

    referralCode:string;

    referredBy:string;

    referralearning:number;

    referredToCount:number;

    referralEarnings:number;

    gov:number;

    platformEarning:number;

    trips:number;

    rating:number;

    distance:number;

    supportTickets:number;

    kycBy:string;

    status:"Active"|"Suspended"|"Blocked";

    doneBy:string;

}

export interface RidersResponse{

    riders:Rider[];

}
