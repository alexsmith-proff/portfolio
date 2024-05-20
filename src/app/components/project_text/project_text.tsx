import { FC } from "react";
import { russo_one } from "@/app/fonts";

import s from './project_text.module.scss'
import { IProject } from "@/app/interfaces/projects.interface";

interface ProjectTextProps {
    project: IProject
}

const ProjectText: FC<ProjectTextProps> = ({ }) => {
    return (
        <div>
        </div>
    )
}

export default ProjectText