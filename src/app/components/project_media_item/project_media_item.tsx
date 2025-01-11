import { FC, useState } from "react";
import Image from "next/image";
import { IMedia } from "@/app/interfaces/projects.interface";

import s from './project_media_item.module.scss'
import SpinnerLds from "../spinners/spinner_lds/spiner_lds";

interface ProjectMediaItemProps {
    media: IMedia
    active: boolean
    click: () => void
}

const ProjectMediaItem: FC<ProjectMediaItemProps> = ({ media, active, click }) => {
    const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true)

    const handleLoadImage = () => {
        setIsLoadingImage(false)
    }

    const handleClick = () => {
        if(!isLoadingImage){
             click()
        }
    }
    
    return (
        <li className={s.item} onClick={handleClick}>
            <Image className={active ? `${s.img} ${s.active}` : s.img} src={media.fileName} width={130} height={80} alt={media.fileName} onLoad={handleLoadImage} />
            {
                isLoadingImage && <SpinnerLds className={s.loading} scale={0.3} />
            }
        </li>
    )
}

export default ProjectMediaItem