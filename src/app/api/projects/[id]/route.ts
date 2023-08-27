import { NextResponse } from "next/server";
import { projects } from "@/data";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({
    project: projects.find((project) => project.id === params.id) || null,
    message: "Proyecto obtenido correctamente",
    ok: true,
  });
}
