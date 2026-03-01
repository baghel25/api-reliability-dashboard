import fs from "fs";
import path from "path";
import { Service } from "@/types/service";

const filePath = path.join(process.cwd(), "data/services.json");

export function getServices(): Service[] {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function saveServices(services: Service[]) {
  fs.writeFileSync(filePath, JSON.stringify(services, null, 2));
}