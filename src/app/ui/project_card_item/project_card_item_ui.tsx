import { FC } from "react";

import s from './project_card_item_ui.module.scss'

interface ProjectCardItemUIProps{
    title: string
    stackShort: string
    bgFileName: string
    click: () => void
}

const ProjectCardItemUI: FC<ProjectCardItemUIProps> = ({ title, stackShort, bgFileName, click }) => {
    return (
        <div className={s.item} onClick={click}>
            <div className={s.content} style={{backgroundImage: `url(${bgFileName})`}}>
                <h2 className={s.title}>{title}</h2>
                <h3 className={s.stack}>Стек:<span>{stackShort}</span></h3>
                <div className={s.blackout}></div>
            </div>
        </div>
    )
}

export default ProjectCardItemUI