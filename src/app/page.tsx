import MainAbout from "./modules/main_about/main_about";
import MainPage from "./modules/main_page/main_page";
import MainProjects from "./modules/main_projects/main_projects";

export default function Home() {
  return (
    <main>
      <MainPage />
      <MainAbout />
      <MainProjects />
    </main>
  );
}
