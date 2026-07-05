// ==========================================================
// KYC Types
// ==========================================================

export type ServiceType =
    | "Car Pooling"
    | "Car Taxi"
    | "Car Travels";

export type KYCStatus =
    | "Pending"
    | "Verified"
    | "Rejected";

export interface KYCRecord {

    id:number;

    riderId:string;

    username:string;

    fullName:string;

    mobile:string;

    service:ServiceType;

    personalDocument:boolean;

    riderKYC:boolean;

    vehicleKYC:boolean;

    status:KYCStatus;

    verifiedBy:string;

    rejectionCount:number;

    rejectedReason:string;

}

export interface KYCResponse{

    records:KYCRecord[];

}