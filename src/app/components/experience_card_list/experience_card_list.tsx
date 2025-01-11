"use client"

import { FC } from "react";
import ExperienceCardItem from "./experience_card_item/experience_card_item";
import { experienceCards } from "@/app/constants/experience";

import s from './experience_card_list.module.scss'

const ExperienceCardList: FC = () => {
   
    return (
        <div className={s.list}>
            {
                experienceCards.map(experience => <ExperienceCardItem experience={experience} key={experience.id} />)
            }
        </div>
    )
}

export default ExperienceCardList