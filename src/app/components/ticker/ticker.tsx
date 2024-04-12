"use client"

import { FC, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { constants } from "@/app/constants";

import s from './ticker.module.scss'

interface TickerProps {
    text: string
    speed?: number
    textSize?: number
}

const Ticker: FC<TickerProps> = ({ text, speed = 50, textSize = 16 }) => {
    // Размер шрифта
    const [size, setSize] = useState(0)
    useEffect(() => {
        const handleResize = () => {
            if (window.screen.width >= 768) {
                setSize(30)
            }
            if (window.screen.width < 768) {
                setSize(24)
            }
            if (window.screen.width < 488) {
                setSize(20)
            }
            
        };
        window.addEventListener('resize', handleResize);
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    return (
        <Marquee
            className={s.item}
            style={{ fontSize: `${size}px` }}
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