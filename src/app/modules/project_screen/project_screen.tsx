import { FC } from "react";
import { IProject } from "@/app/interfaces/projects.interface";
import ProjectMedia from "@/app/components/project_media/project_media";
import ProjectText from "@/app/components/project_text/project_text";

import s from './project_screen.module.scss'

interface ProjectScreenProps {
    project: IProject
}

const ProjectScreen: FC<ProjectScreenProps> = ({ project }) => {
    return (
        <div className={s.main}>
            <div className="container">
                <h1 className={s.title}>{project.title}</h1>
                <div className={s.content}>
                    <ProjectMedia project={project} />
                    <ProjectText project={project} />
                </div>
            </div>
        </div>
    )
}

export default ProjectScreen