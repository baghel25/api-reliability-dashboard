import { NextRequest, NextResponse } from "next/server";
import { checkHealth } from "@/lib/healthCheck";

export async function POST(req: NextRequest) {
  const { url } = await req.json();
  const result = await checkHealth(url);
  return NextResponse.json(result);
}