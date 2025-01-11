import { FC } from "react";
import Title from "@/app/components/title/title";
import ExperienceCardList from "@/app/components/experience_card_list/experience_card_list";

import s from './experience.module.scss'

const Experience: FC = () => {
    return (
        <div className={s.section} id="experience">
            <div className="container">
                <Title className={s.title} title="Мой опыт" />
                <div className={s.list}>
                    <ExperienceCardList />
                </div>
            </div>
        </div>
    )
}

export default Experience