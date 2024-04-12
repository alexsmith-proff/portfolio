import { FC } from "react";

import s from './main_projects.module.scss'
import Title from "@/app/components/title/title";

const MainProjects: FC = ({ }) => {
    return (
        <div className={s.section} id="main_projects">
            <Title className={s.title} title="Мои проекты" />
        </div>
    )
}

export default MainProjects