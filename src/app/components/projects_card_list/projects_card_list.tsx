import { FC } from "react";
import ProjectCardItem from "./project_card_item/project_card_item";
import { projectCards, projects } from "@/app/projects";

import s from './projects_card_list.module.scss'

const ProjectsCardList: FC = ({ }) => {
   
    return (
        <div>
            {
                projectCards.map(project => <ProjectCardItem project={project} key={project.id} />)
            }
        </div>
    )
}

export default ProjectsCardList