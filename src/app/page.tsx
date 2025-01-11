import MainAbout from "./modules/main_about/main_about";
import MainScreen from "./modules/main_screen/main_screen";
import MainProjects from "./modules/main_projects/main_projects";
import Footer from "./components/footer/footer";
import Experience from "./modules/experience/experience";

export default function MainPage() {
  return (
    <main>
      <MainScreen />
      <MainAbout />
      <Experience />
      <MainProjects />
      <Footer />
    </main>
  );
}
