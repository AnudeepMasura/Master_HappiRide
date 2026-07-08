// ==========================================================
// Analytics Types
// ==========================================================

export interface AnalyticsMetric {

    label: string;

    value: number | string;

}

export interface AnalyticsSegment {

    id: number;

    title: string;

    badge: string;

    badgeType: "taxi" | "pooling" | "private";

    icon: string;

    metrics: AnalyticsMetric[];

}

export interface RetentionData {

    label: string;

    value: number;

}

export interface ServiceUtilizationData {

    name: string;

    value: number;

}

export interface AgeDemographicData {

    name: string;

    value: number;

}

export interface AnalyticsResponse {

    segments: AnalyticsSegment[];

    retentionData: RetentionData[];

    serviceUtilization: ServiceUtilizationData[];

    ageDemographics: AgeDemographicData[];

}