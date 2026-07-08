// ================================================
// Customer Support Types
// ================================================

export type TicketStatus =
    | "Ongoing"
    | "Closed";

export type RaisedBy =
    | "User"
    | "Rider"
    | "Partner";

export interface SupportTicket {

    id:number;

    ticketId:string;

    date:string;

    issue:string;

    raisedBy:RaisedBy;

    location:string;

    status:TicketStatus;

    reportTo:string;

    reportStatement:string;

}

export interface SupportStats{

    totalTickets:number;

    userTickets:number;

    riderTickets:number;

}

export interface SupportResponse{

    stats:SupportStats;

    tickets:SupportTicket[];

}