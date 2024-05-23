import { FC } from "react";

import s from './project_media_slider.module.scss'
import { IMedia } from "@/app/interfaces/projects.interface";
import Image from "next/image";
import PhotoBorderGradient from "../photo_border_gradient/photo_border_gradient";
import ProjectSliderBorderGradient from "../project_slider_border_gradient/project_slider_border_gradient";

interface ProjectMediaSliderProps {
    media: IMedia
    className?: string
    prev: () => void
    next: () => void
}

const ProjectMediaSlider: FC<ProjectMediaSliderProps> = ({ media, className, prev, next }) => {
    return (
        <div className={className}>
            <ProjectSliderBorderGradient width={600} height={500} borderWidth={7} media={media} alt={media.fileName} prev={prev} next={next} />
            {/* <div onClick={prev}>prev</div> */}
            {/* <div onClick={next}>next</div> */}
        </div>
    )
}

export default ProjectMediaSlider