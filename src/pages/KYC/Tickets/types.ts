export type TicketStatus =
    | "Ongoing"
    | "Closed";

export type TicketFilter =
    | "All"
    | "Ongoing"
    | "Closed";

export interface KYCTicket {
    id: number;
    ticketId: string;
    date: string;
    issue: string;
    raisedBy: string;
    location: string;
    handledBy: string;
    status: TicketStatus;
}
