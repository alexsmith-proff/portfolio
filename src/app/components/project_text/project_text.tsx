import { FC } from "react";
import { russo_one } from "@/app/fonts";

import s from './project_text.module.scss'
import { IProject } from "@/app/interfaces/projects.interface";
import Link from "next/link";

interface ProjectTextProps {
    project: IProject
}

const ProjectText: FC<ProjectTextProps> = ({ project }) => {
    return (
        <div className={s.item}>
            <h2 className={s.title}>Описание проекта</h2>
            <p className={s.text}>{project.description}</p>
            <h2 className={s.title}>Стек</h2>
            <p className={s.text}>{project.stackExpand}</p>
            {
                project.gitUrl && (
                    <div>
                        <h2 className={s.title}>GitHub</h2>
                        <Link className={s.github} href={String(project.gitUrl)} target="_blank">{String(project.gitUrl)}</Link>
                    </div>
                )
            }
        </div>
    )
}

export default ProjectText