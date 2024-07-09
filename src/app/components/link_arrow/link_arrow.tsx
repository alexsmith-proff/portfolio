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
    isBlankEnable?: boolean
    isArrowEnable?: boolean
    arrowSize?: number
    arrowGap?: number
}

const LinkArrow: FC<LinkArrowProps> = ({ url, text, textFontSize, color = constants.colors.BRIGHT_COLOR1, isBlankEnable = false, isArrowEnable = true, arrowSize = 18, arrowGap = 5 }) => {
    return (
        <span style={{color, fontSize: textFontSize}}>
            <Link className={s.link} href={url} target={isBlankEnable ? '_blank' : '_self'}>
                {text}
                {
                    isArrowEnable && <FaArrowRightLong className={s.linkIco} style={{marginLeft: arrowGap}} size={arrowSize} />
                }
            </Link>
        </span>
    )
}

export default LinkArrow