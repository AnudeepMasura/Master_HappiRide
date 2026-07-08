// ==========================================================
// Ride History Types
// ==========================================================

export type ServiceType =
    | "Car Pooling"
    | "Car Taxi"
    | "Car Travels";

export interface RideHistoryRecord {

    id: number;

    rideId: string;

    serviceType: ServiceType;

    pickupLocation: string;

    dropLocation: string;

    userName: string;

    riderName: string;

    grossOrderValue: string;

    riderEarnings: string;

    platformEarnings: string;

    referralEarnings: string;

    referredUser: string;

    referredRider: string;

    referralAmount: string;

    rating: number;

    startDate: string;

    startTime: string;

    endDate: string;

    endTime: string;

    supportAvailable: boolean;

}

export interface RideHistoryResponse {

    rides: RideHistoryRecord[];

}