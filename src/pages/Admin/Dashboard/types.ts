// ==========================================================
// Dashboard Types
// ==========================================================

export interface DashboardMetric {
  id: number;
  title: string;
  value: number | string;
  icon: string;
  trend: string;
  trendType: "up" | "down";
}

export interface SegmentMetric {
  label: string;
  value: number | string;
}

export interface DashboardSegment {
  id: number;
  title: string;
  badge: string;
  badgeType: "taxi" | "pooling" | "private";
  icon: string;
  metrics: SegmentMetric[];
}

export interface DashboardResponse {
  metrics: DashboardMetric[];
  segments: DashboardSegment[];
}