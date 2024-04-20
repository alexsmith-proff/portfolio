"use client"

import { FC } from "react";
import { useRouter } from "next/navigation";
import ProjectCardItem from "./project_card_item/project_card_item";
import { projectCards } from "@/app/constants/projects";

import s from './projects_card_list.module.scss'

const ProjectsCardList: FC = ({ }) => {
    const router = useRouter()
    const handleClick = (id: number) => {
        router.push(`/project/${id}`)
    }
   
    return (
        <div className={s.list}>
            {
                projectCards.map(project => <ProjectCardItem project={project} click={() => handleClick(project.id)} key={project.id} />)
            }
        </div>
    )
}

export default ProjectsCardList