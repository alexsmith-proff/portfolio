import { FC } from "react";
import Image from "next/image";
import { IMedia } from "@/app/interfaces/projects.interface";

import s from './project_media_item.module.scss'

interface ProjectMediaItemProps {
    media: IMedia
    active: boolean
    click: () => void
}

const ProjectMediaItem: FC<ProjectMediaItemProps> = ({ media, active, click }) => {
    return (
        <li onClick={click}>
            <Image className={active ? `${s.img} ${s.active}` : s.img} src={media.fileName} width={130} height={80} alt={media.fileName} />
        </li>
    )
}

export default ProjectMediaItem