// Interfaces
import { Project } from "@/interfaces";

const getProject = async (
  id: string
): Promise<{
  project: Project | null;
  message: string;
  ok: boolean;
}> => {
  try {
    const response = await fetch(`${process.env.API_URL}/projects/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    return {
      project: null,
      message: "Error al obtener el proyecto",
      ok: false,
    };
  }
};

const getProjects = async (): Promise<{
  projects: Project[];
  message: string;
  ok: boolean;
}> => {
  try {
    const response = await fetch(`${process.env.API_URL}/projects`);
    const data = await response.json();

    return data;
  } catch (error) {
    return {
      projects: [],
      message: "Error al obtener los proyectos",
      ok: false,
    };
  }
};

export { getProject, getProjects };
