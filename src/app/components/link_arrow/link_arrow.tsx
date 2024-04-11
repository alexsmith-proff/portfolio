import { FC } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { constants } from "@/app/constants";

import s from './link_arrow.module.scss'

interface LinkArrowProps {
    url: string
    text?: string
    textFontSize?: number
    color?: string
    arrowSize?: number
    arrowGap?: number
}

const LinkArrow: FC<LinkArrowProps> = ({ url, text, textFontSize = 16, color = constants.colors.BRIGHT_COLOR1, arrowSize = 18, arrowGap = 5 }) => {
    return (
        <span className={s.item} style={{color, fontSize: textFontSize}}>
            <Link className={s.link} href={url}>
                {text}
                <FaArrowRightLong style={{marginLeft: arrowGap}} size={arrowSize} />
            </Link>
        </span>
    )
}

export default LinkArrow