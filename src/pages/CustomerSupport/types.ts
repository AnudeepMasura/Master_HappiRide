// ==========================================================
// Customer Support Types
// ==========================================================

export type TicketStatus = "Ongoing" | "Closed";

export type TicketFilter = "all" | "ongoing" | "closed";

export interface SupportMetric {
    id: number;
    title: string;
    value: number;
}

export interface SupportTicket {
    id: string;
    date: string;
    issue: string;
    raisedBy: string;
    location: string;
     handledBy: string;
    status: TicketStatus;

    description: string;

    customerName: string;

    phone: string;

    email: string;
}

export interface CustomerSupportResponse {
    metrics: SupportMetric[];
    tickets: SupportTicket[];
}