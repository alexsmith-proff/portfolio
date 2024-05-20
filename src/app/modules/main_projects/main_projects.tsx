import { FC } from "react";
import Title from "@/app/components/title/title";
import ProjectsCardList from "@/app/components/projects_card_list/projects_card_list";

import s from './main_projects.module.scss'

interface MainProjectsProps{
    title?: string
}

const MainProjects: FC<MainProjectsProps> = ({ title = 'Мои проекты' }) => {
    return (
        <div className={s.section} id="main_projects">
            <div className="container">
                <Title className={s.title} title={title} />
                <div className={s.projectsCardList}>
                    <ProjectsCardList />
                </div>
            </div>
        </div>
    )
}

export default MainProjects