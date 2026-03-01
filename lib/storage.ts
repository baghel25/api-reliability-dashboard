import { Service } from "@/types/service";

let services: Service[] = [];

export function getServices(): Service[] {
  return services;
}

export function saveServices(updated: Service[]) {
  services = updated;
}