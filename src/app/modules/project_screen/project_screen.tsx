import { FC } from "react";
import { IProject } from "@/app/interfaces/projects.interface";
import ProjectMedia from "@/app/components/project_media/project_media";
import ProjectText from "@/app/components/project_text/project_text";

import s from './project_screen.module.scss'
import ImagesViewer from "@/app/components/images_viewer/images_viewer";
import ImagesPopup from "@/app/components/images_popup/images_popup";

interface ProjectScreenProps {
    project: IProject
}

const ProjectScreen: FC<ProjectScreenProps> = ({ project }) => {
    return (
        <div className={s.main}>
            <div className="container">
                <h1 className={s.title}>{project.title}</h1>
                <div className={s.content}>
                    <div className={s.media}>
                        <ProjectMedia project={project} />
                    </div>
                    <div className={s.text}>
                        <ProjectText project={project} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectScreen