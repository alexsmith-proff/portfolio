"use client"

import { FC, useState } from "react";
import ProjectMediaSlider from "../project_media_slider/project_media_slider";
import ProjectMediaList from "../project_media_list/project_media_list";
import TextArrow from "../text_arrow/text_arrow";
import { IProject } from "@/app/interfaces/projects.interface";
import { projects } from "@/app/constants/projects";
import { useRouter } from "next/navigation";

import s from './project_media.module.scss'

interface ProjectMediaProps {
    project: IProject
}

const ProjectMedia: FC<ProjectMediaProps> = ({ project }) => {
    const [activeMediaIndex, setActiveMediaIndex] = useState(0)
    const router = useRouter()

    const handlePrevClick = () => {
        if (activeMediaIndex !== 0) {
            setActiveMediaIndex(prev => prev - 1)
        }
    }
    const handleNextClick = () => {
        if (activeMediaIndex !== project.media.length - 1) {
            setActiveMediaIndex(prev => prev + 1)
        }
    }

    const handleClickList = (index: number) => {
        setActiveMediaIndex(index)
    }

// По кругу    
    const handleClickNextProject = () => {
        const a = projects.find(item => item.serialNumber === project.serialNumber + 1)?.id
        if(project.serialNumber !== projects.length){
            router.push(`/project/${projects.find(item => item.serialNumber === project.serialNumber + 1)?.id}`)
        }else{
            router.push(`/project/${projects.find(item => item.serialNumber === 1)?.id}`)
        }
    }

    return (
        <div>
            <div className={s.wrap}>
                <ProjectMediaSlider className={s.slider} media={project.media[activeMediaIndex]} activeMediaIndex={activeMediaIndex} mediaMaxIndex={project.media.length} prev={handlePrevClick} next={handleNextClick} />
                <ProjectMediaList media={project.media} activeIndex={activeMediaIndex} click={handleClickList} />
            </div>
            <div className={s.next}>
                <TextArrow text="Следующий проект" click={handleClickNextProject} />
            </div>
        </div>
    )
}

export default ProjectMedia