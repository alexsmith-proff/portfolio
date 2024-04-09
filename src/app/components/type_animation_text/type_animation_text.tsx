"use client"

import { FC, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { constants } from "@/app/constants";

import { Russo_One, Roboto } from "next/font/google";
import s from './type_animation_text.module.scss'

const russo_one = Russo_One({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-russo-one',
})
const roboto = Roboto({
    subsets: ["latin"],
    weight: '400',
    variable: '--font-roboto'
});

interface TypeAnimationTextProps { }

const TypeAnimationText: FC<TypeAnimationTextProps> = ({ }) => {
    const [color, setColor] = useState<string>(constants.colors.BRIGHT_COLOR1)
    return (
        <div style={{ color }} className={`${s.text} ${russo_one.variable}`}>
            <TypeAnimation
                sequence={[
                    'Frontend',
                    7000,
                    ' ',
                    () => setColor(constants.colors.BRIGHT_COLOR2),
                    'Backend',
                    5000,
                    ' ',
                    () => setColor(constants.colors.BRIGHT_COLOR1),
                ]}
                // cursor={false}
                className={`${s.type} ${roboto.variable}`}
                speed={5}
                deletionSpeed={5}
                repeat={Infinity}
            />
        </div>
    )
}

export default TypeAnimationText