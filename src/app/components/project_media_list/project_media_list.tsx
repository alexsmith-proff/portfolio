import { FC } from "react";
import ProjectMediaItem from "../project_media_item/project_media_item";
import { IMedia } from "@/app/interfaces/projects.interface";

import s from './project_media_list.module.scss'

interface ProjectMediaListProps {
    media: IMedia[]
    activeIndex: number
    click: (index: number) => void
}

const ProjectMediaList: FC<ProjectMediaListProps> = ({ media, activeIndex, click }) => {
    return (
        <ul className={s.list}>
            {
                media.map((item, index) => <ProjectMediaItem media={item} active={index === activeIndex ? true : false} click={() => click(index)} key={index} />)
            }
        </ul>
    )
}

export default ProjectMediaList