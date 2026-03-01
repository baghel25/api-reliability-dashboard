import { Service } from "@/types/service";

let services: Service[] = [
  {
    id: "1",
    name: "Hacker News",
    url: "https://hn.algolia.com/api/v1/search?query=ai",
    status: "DOWN",
    latencyMs: 0,
    lastCheckedAt: "",
    healthScore: 0,
  },
  {
    id: "2",
    name: "GitHub Next.js",
    url: "https://api.github.com/repos/vercel/next.js",
    status: "DOWN",
    latencyMs: 0,
    lastCheckedAt: "",
    healthScore: 0,
  },
  {
    id: "3",
    name: "Weather API",
    url:
      "https://api.open-meteo.com/v1/forecast?latitude=1.29&longitude=103.85&current_weather=true",
    status: "DOWN",
    latencyMs: 0,
    lastCheckedAt: "",
    healthScore: 0,
  },
  {
    id: "4",
    name: "Countries API",
    url: "https://restcountries.com/v3.1/name/singapore",
    status: "DOWN",
    latencyMs: 0,
    lastCheckedAt: "",
    healthScore: 0,
  },
];

export function getServices(): Service[] {
  return services;
}

export function saveServices(updated: Service[]) {
  services = updated;
}