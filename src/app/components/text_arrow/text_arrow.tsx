import { FC } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { constants } from "@/app/constants";

import s from './link_arrow.module.scss'

interface TextArrowProps {
    text?: string
    textFontSize?: number
    color?: string
    arrowSize?: number
    arrowGap?: number
    click: () => void
}

const TextArrow: FC<TextArrowProps> = ({ text, textFontSize, color = constants.colors.BRIGHT_COLOR1, arrowSize = 18, arrowGap = 5, click }) => {
    return (
        <span style={{color, fontSize: textFontSize}} onClick={click}>
            <div className={s.link}>
                {text}
                <FaArrowRightLong className={s.linkIco} style={{marginLeft: arrowGap}} size={arrowSize} />
            </div>
        </span>
    )
}

export default TextArrow