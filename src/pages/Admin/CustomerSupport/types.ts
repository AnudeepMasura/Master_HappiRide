// ==========================================================
// Customer Support Types
// ==========================================================

export type TicketStatus = "Ongoing" | "Closed";

export type TicketFilter = "all" | "ongoing" | "closed";

export type ReportTeam = "KYC" | "Finance" | "Partners";

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
    language: string;
    status: TicketStatus;
    reportTo: ReportTeam;

    description: string;

    customerName: string;

    phone: string;

    email: string;
}

export interface CustomerSupportResponse {
    metrics: SupportMetric[];
    tickets: SupportTicket[];
}
