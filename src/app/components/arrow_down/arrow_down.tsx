import { FC } from "react";

import { FaArrowDown } from "react-icons/fa";

import s from './arrow_down.module.scss'

interface ArrowDownProps{}

const ArrowDown: FC<ArrowDownProps> = ({ }) => {
    return(
        <div className={s.btn}>
            <div className={s.border}></div>
            <FaArrowDown className={s.arrow} size={32} />
        </div>
    )
}

export default ArrowDown