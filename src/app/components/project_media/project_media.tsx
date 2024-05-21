"use client"

import { FC, useState } from "react";
import ProjectMediaSlider from "../project_media_slider/project_media_slider";
import ProjectMediaList from "../project_media_list/project_media_list";
import { IProject } from "@/app/interfaces/projects.interface";

import s from './project_media.module.scss'

interface ProjectMediaProps {
    project: IProject
}

const ProjectMedia: FC<ProjectMediaProps> = ({ project }) => {
    const [activeMediaIndex, setActiveMediaIndex] = useState(0)

    const handlePrevClick = () => {
        if(activeMediaIndex !== 0){
            setActiveMediaIndex(prev => prev - 1)
        }
    }
    const handleNextClick = () => {
        if(activeMediaIndex !== project.media.length - 1){
            setActiveMediaIndex(prev => prev + 1)
        }
    }

    const handleClickList = (index: number) => {
        setActiveMediaIndex(index)
    }

    return (
        <div>
            <div className={s.wrap}>
                <ProjectMediaSlider className={s.slider} media={project.media[activeMediaIndex]} prev={handlePrevClick} next={handleNextClick} />
                <ProjectMediaList media={project.media} activeIndex={activeMediaIndex} click={handleClickList} />
            </div>
        </div>
    )
}

export default ProjectMedia