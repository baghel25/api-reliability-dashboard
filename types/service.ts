export type Status = "UP" | "SLOW" | "DOWN";

export interface Service {
  id: string;
  name: string;
  url: string;
  status: Status;
  latencyMs: number;
  lastCheckedAt: string;
  healthScore: number;
}