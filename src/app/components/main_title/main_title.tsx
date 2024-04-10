import { FC } from "react";
import TypeAnimationText from "../type_animation_text/type_animation_text";

import s from './main_title.module.scss'
import { russo_one } from "@/app/fonts";

interface MainTitleProps{}

const MainTitle: FC<MainTitleProps> = ({ }) => {
    return(
        <div className={s.text}>
            <TypeAnimationText />
            <div className={`${russo_one.variable} ${s.subText}`}>Разработчик</div>
        </div>
    )
}

export default MainTitle