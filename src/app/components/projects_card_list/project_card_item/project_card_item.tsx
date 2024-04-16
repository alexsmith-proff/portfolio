import { FC } from "react";
import ProjectCardItemUI from "@/app/ui/project_card_item/project_card_item_ui";
import { IProjectCard } from "@/app/interfaces/projects.interface";

import s from './project_card_item.module.scss'

interface ProjectCardItemProps{
    project: IProjectCard
}

const ProjectCardItem: FC<ProjectCardItemProps> = ({ project }) => {
    return (
        <ProjectCardItemUI id={project.id} title={project.title} stackShort={project.stackShort} bgFileName={project.bgFileName} />
    )
}

export default ProjectCardItem