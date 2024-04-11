import { FC } from "react";
import Marquee from "react-fast-marquee";

import s from './ticker.module.scss'
import { constants } from "@/app/constants";

interface TickerProps {
    text: string
    speed?: number
    textSize?: number
}

const Ticker: FC<TickerProps> = ({ text, speed = 50, textSize = 16 }) => {
    return (
        <Marquee
            className={s.item}
            style={{ fontSize: `${textSize}px` }}
            speed={speed}
            pauseOnHover={true}
            gradient={true}
            gradientColor={constants.colors.DARK_COLOR}
            gradientWidth={130}
        >
            {text}
        </Marquee>
    )
}

export default Ticker