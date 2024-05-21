import { FC } from "react";
import Image from "next/image";
import { IMedia } from "@/app/interfaces/projects.interface";

import s from './project_media_item.module.scss'

interface ProjectMediaItemProps {
    media: IMedia
}

const ProjectMediaItem: FC<ProjectMediaItemProps> = ({ media }) => {
    return (
        <li>
            <Image className={s.item} src={media.fileName} width={130} height={80} alt="../img/diva/diva-bg.png" />
        </li>
    )
}

export default ProjectMediaItem