import { FC } from "react";

import s from './project_media_slider.module.scss'
import { IMedia } from "@/app/interfaces/projects.interface";
import Image from "next/image";
import PhotoBorderGradient from "../photo_border_gradient/photo_border_gradient";
import ProjectSliderBorderGradient from "../project_slider_border_gradient/project_slider_border_gradient";

interface ProjectMediaSliderProps {
    media: IMedia
    activeMediaIndex: number
    mediaMaxIndex: number
    className?: string
    prev: () => void
    next: () => void
}

const ProjectMediaSlider: FC<ProjectMediaSliderProps> = ({ media, activeMediaIndex, mediaMaxIndex, className, prev, next }) => {
    return (
        <div className={className}>
            <ProjectSliderBorderGradient width={600} height={500} borderWidth={7} media={media} activeMediaIndex={activeMediaIndex} mediaMaxIndex={mediaMaxIndex} alt={media.fileName} prev={prev} next={next} />
        </div>
    )
}

export default ProjectMediaSlider