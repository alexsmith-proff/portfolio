import { FC } from "react";
import ProjectMediaItem from "../project_media_item/project_media_item";
import { IMedia } from "@/app/interfaces/projects.interface";

import s from './project_media_list.module.scss'

interface ProjectMediaListProps {
    media: IMedia[]
}

const ProjectMediaList: FC<ProjectMediaListProps> = ({ media }) => {
    return (
        <ul className={s.list}>
            {
                media.map((item, index) => <ProjectMediaItem media={item} key={index} />)
            }
        </ul>
    )
}

export default ProjectMediaList