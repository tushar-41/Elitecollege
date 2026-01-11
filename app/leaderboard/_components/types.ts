export interface Metrics {
  academics: number;
  placements: number;
  infrastructure: number;
  roi: number;
}

export interface College {
  collegeId: number;
  collegeName: string;
  score: number;
  metrics: Metrics;
  rank?: number;
}

export interface RankedCollege extends College {
  rank: number;
}
