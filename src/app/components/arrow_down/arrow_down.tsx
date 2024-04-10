'use client'

import { FC } from "react";
import { FaArrowDown } from "react-icons/fa";

import s from './arrow_down.module.scss'
import { useRouter } from "next/navigation";

interface ArrowDownProps{}

const ArrowDown: FC<ArrowDownProps> = ({ }) => {
    const router = useRouter()
    return(
        <div className={s.btn} onClick={() => router.push('/#main_about')}>
            <div className={s.border}></div>
            <FaArrowDown className={s.arrow} size={32} />
        </div>
    )
}

export default ArrowDown