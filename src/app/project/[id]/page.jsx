
import Footer from "@/app/components/footer/footer";
import { projects } from "@/app/constants/projects";
import MainProjects from "@/app/modules/main_projects/main_projects";
import ProjectScreen from "@/app/modules/project_screen/project_screen";

export async function generateStaticParams() {
  return projects.map(project => ({ id: String(project.id) }));
}

export default function ProjectPage({ params }) {
  return (
    <main>
      <ProjectScreen project={projects.find(item => item.id == params.id)} />
      <MainProjects title="Другие проекты" />
      <Footer />
    </main>
  );
}