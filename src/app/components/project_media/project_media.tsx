"use client"

import { FC, useEffect, useState } from "react";
import ProjectMediaSlider from "../project_media_slider/project_media_slider";
import ProjectMediaList from "../project_media_list/project_media_list";
import TextArrow from "../text_arrow/text_arrow";
import { IProject } from "@/app/interfaces/projects.interface";
import { projects } from "@/app/constants/projects";
import { useRouter } from "next/navigation";

import s from './project_media.module.scss'
import ImagesPopup from "../images_popup/images_popup";

interface ProjectMediaProps {
    project: IProject
}

const ProjectMedia: FC<ProjectMediaProps> = ({ project }) => {
    const [activePopup, setActivePopup] = useState<boolean>(false)
    const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0)
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
        if (project.serialNumber !== projects.length) {
            router.push(`/project/${projects.find(item => item.serialNumber === project.serialNumber + 1)?.id}`)
        } else {
            router.push(`/project/${projects.find(item => item.serialNumber === 1)?.id}`)
        }
    }

    const handleClick = () => {
        setActivePopup(true)
    }

    const handleClickNextPhoto = () => {
        setActiveMediaIndex((prev) => prev < project.media.length - 1 ? prev + 1 : 0)
    }

    const handleClickThumbnailPhoto = (ind: number) => {
        setActiveMediaIndex(ind)
    }

    const handleClosePopup = () => {
        setActivePopup(false)
    }

    useEffect(() => {
        if (activePopup) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
    }, [activePopup])

    return (
        <div className={s.item}>
            <div className={s.wrap}>
                <ProjectMediaSlider className={s.slider} media={project.media[activeMediaIndex]} activeMediaIndex={activeMediaIndex} mediaMaxIndex={project.media.length} click={handleClick} prev={handlePrevClick} next={handleNextClick} />
                <ProjectMediaList media={project.media} activeIndex={activeMediaIndex} click={handleClickList} />
            </div>
            <div className={s.next}>
                <TextArrow text="Следующий проект" click={handleClickNextProject} />
            </div>
            <ImagesPopup
                activePopup={activePopup}
                photos={project.media.map(item => item.fileName)}
                currentPhotoNum={activeMediaIndex}
                clickNextPhoto={handleClickNextPhoto}
                clickThumbnailPhoto={handleClickThumbnailPhoto}
                closePopup={handleClosePopup}
            />
            {/* <ImagesViewer photos={project.media.map(item => item.fileName)} mainPhotoNum={0} widthContent={440} widthSmallPhoto={60} heightSmallPhoto={60} gapSmallPhoto={5} /> */}
        </div>
    )
}

export default ProjectMedia