import { FC } from "react";
import Title from "@/app/components/title/title";

import s from './main_projects.module.scss'
import ProjectsCardList from "@/app/components/projects_card_list/projects_card_list";

const MainProjects: FC = ({ }) => {
    return (
        <div className={s.section} id="main_projects">
            <div className="container">
                <Title className={s.title} title="Мои проекты" />
                <div className={s.projectsCardList}>
                    <ProjectsCardList />
                </div>
            </div>
        </div>
    )
}

export default MainProjects