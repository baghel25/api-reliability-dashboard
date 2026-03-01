import { Status } from "@/types/service";

export async function checkHealth(url: string) {
  const start = Date.now();
  let status: Status = "DOWN";
  let latencyMs = 0;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 2000);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      cache: "no-store",          // 🔥 disable caching
      next: { revalidate: 0 },    // 🔥 required for Vercel
    });

    latencyMs = Date.now() - start;

    if (res.ok) {
      if (latencyMs < 500) status = "UP";
      else if (latencyMs < 2000) status = "SLOW";
      else status = "DOWN";
    } else {
      status = "DOWN";
    }
  } catch (error) {
    latencyMs = Date.now() - start;
    status = "DOWN";
  } finally {
    clearTimeout(timeout);
  }

  const healthScore =
    status === "UP" ? 100 : status === "SLOW" ? 70 : 0;

  return {
    status,
    latencyMs,
    lastCheckedAt: new Date().toISOString(),
    healthScore,
  };
}