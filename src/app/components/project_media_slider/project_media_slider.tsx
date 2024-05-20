import { FC } from "react";

import s from './project_media_slider.module.scss'
import { IMedia } from "@/app/interfaces/projects.interface";
import Image from "next/image";
import PhotoBorderGradient from "../photo_border_gradient/photo_border_gradient";
import ProjectSliderBorderGradient from "../project_slider_border_gradient/project_slider_border_gradient";

interface ProjectMediaSliderProps {
    media: IMedia
    prev: () => void
    next: () => void
}

const ProjectMediaSlider: FC<ProjectMediaSliderProps> = ({ media, prev, next }) => {
    return (
        <div>
            <ProjectSliderBorderGradient width={500} height={350} borderWidth={7} media={media} alt={media.fileName} />
            <div onClick={prev}>prev</div>
            <div onClick={next}>next</div>
        </div>
    )
}

export default ProjectMediaSlider