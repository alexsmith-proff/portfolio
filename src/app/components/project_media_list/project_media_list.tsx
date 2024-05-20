import { FC } from "react";
import { russo_one } from "@/app/fonts";

import s from './project_media_list.module.scss'
import { IMedia } from "@/app/interfaces/projects.interface";

interface ProjectMediaListProps {
    media: IMedia[]
}

const ProjectMediaList: FC<ProjectMediaListProps> = ({ media }) => {
    return (
        <div>
        </div>
    )
}

export default ProjectMediaList