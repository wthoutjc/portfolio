import { NextResponse } from "next/server";
import { projects } from "@/data";

export async function GET() {
  return NextResponse.json({
    projects,
    message: "Proyectos obtenidos correctamente",
    ok: true,
  });
}
