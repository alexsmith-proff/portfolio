import { FC } from "react";

import s from './title.module.scss'
import { russo_one } from "@/app/fonts";

interface TitleProps {
    title: string
    className?: string
}

const Title: FC<TitleProps> = ({ title, className }) => {
    return (
        <div className={className}>
            <div className={s.wrap}>
                <div className={`${s.title} ${russo_one.className}`}>{title}</div>
            </div>
        </div>
    )
}

export default Title