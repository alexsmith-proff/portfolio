import { FC } from "react";

import s from './project_card_item_ui.module.scss'

interface ProjectCardItemUIProps{
    id: number
    title: string
    stackShort: string
    bgFileName: string
}

const ProjectCardItemUI: FC<ProjectCardItemUIProps> = ({ id, title, stackShort, bgFileName }) => {
    return (
        <div></div>
    )
}

export default ProjectCardItemUI