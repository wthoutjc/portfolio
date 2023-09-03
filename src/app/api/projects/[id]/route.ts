import { NextResponse } from "next/server";
import projects from "@/data/projects.json";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const project = projects.find((project) => project.id === params.id);

  return NextResponse.json({
    project: project || null,
    message: project
      ? "Proyecto obtenido correctamente"
      : "Proyecto no encontrado",
    ok: !!project,
  });
}
