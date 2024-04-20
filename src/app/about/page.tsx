import { Metadata } from "next";
import AboutScreen from "../modules/about_screen/about_screen";
import MainProjects from "../modules/main_projects/main_projects";

export const metadata: Metadata = {
    title: "Обо мне",
    description: "Обо мне",
  };

export default function AboutPage() {
    return(
        <main>
            <AboutScreen />
            <MainProjects />
        </main>
    )
}