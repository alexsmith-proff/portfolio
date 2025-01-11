import { FC } from "react";
import Image from "next/image";

import s from './experience_card_item_ui.module.scss'

interface ExperienceCardItemUIProps {
    title: string
    imgFileName: string
    width: number
    height: number
    link: string
    yearsAndMonths: string
}

const ExperienceCardItemUI: FC<ExperienceCardItemUIProps> = ({ title, imgFileName, width, height, link, yearsAndMonths }) => {
    return (
        <div className={s.item}>
            <a className={s.link} href={link} target="_blank" rel="noopener noreferrer">
                <div className={s.content}>
                    <div className={s.img}>
                        <Image src={imgFileName} width={width} height={height} alt={title} />
                    </div>
                    <h3 className={s.title}>{title}</h3>
                    <p className={s.yearsAndMonths}>{yearsAndMonths}</p>
                </div>
            </a>
        </div>
    )
}

export default ExperienceCardItemUI