import { FC } from "react";
import Title from "@/app/components/title/title";

import s from './main_projects.module.scss'

const MainProjects: FC = ({ }) => {
    return (
        <div className={s.section} id="main_projects">
            <Title className={s.title} title="Мои проекты" />
        </div>
    )
}

export default MainProjects