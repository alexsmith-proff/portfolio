import { FC } from "react";

import s from './project_media_slider.module.scss'
import { IMedia } from "@/app/interfaces/projects.interface";
import ProjectSliderBorderGradient from "../project_slider_border_gradient/project_slider_border_gradient";

interface ProjectMediaSliderProps {
    media: IMedia
    activeMediaIndex: number
    mediaMaxIndex: number
    className?: string
    click: () => void
    prev: () => void
    next: () => void
}

const ProjectMediaSlider: FC<ProjectMediaSliderProps> = ({ media, activeMediaIndex, mediaMaxIndex, className, click, prev, next }) => {
    return (
        <div className={className}>
            <ProjectSliderBorderGradient
                width={600}
                height={500}
                borderWidth={7}
                media={media}
                activeMediaIndex={activeMediaIndex}
                mediaMaxIndex={mediaMaxIndex}
                alt={media.fileName}
                click={click}
                prev={prev}
                next={next} />
        </div>
    )
}

export default ProjectMediaSlider