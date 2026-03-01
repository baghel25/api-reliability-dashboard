"use server";

import { v4 as uuid } from "uuid";
import { getServices, saveServices } from "@/lib/storage";
import { checkHealth } from "@/lib/healthCheck";
import { Service } from "@/types/service";

export async function addService(name: string, url: string) {
  const services = getServices();

  const health = await checkHealth(url);

  const newService: Service = {
    id: uuid(),
    name,
    url,
    ...health,
  };

  saveServices([...services, newService]);
}

export async function deleteService(id: string) {
  const services = getServices().filter((s) => s.id !== id);
  saveServices(services);
}

export async function refreshService(id: string) {
  const services = getServices();

  const updated = await Promise.all(
    services.map(async (s) => {
      if (s.id === id) {
        const health = await checkHealth(s.url);
        return { ...s, ...health };
      }
      return s;
    })
  );

  saveServices(updated);
}
export async function refreshAllServices() {
  const services = getServices();

  const updated = await Promise.all(
    services.map(async (s) => {
      const health = await checkHealth(s.url);
      return { ...s, ...health };
    })
  );

  saveServices(updated);
}