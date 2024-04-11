"use client"

import { FC } from "react";
import ButtonUI from "@/app/ui/buttons/button/button_ui";
import { constants } from "@/app/constants";
import { useRouter } from "next/navigation";

interface ButtonAboutProps {
    text: string
    url: string
}

const ButtonAbout: FC<ButtonAboutProps> = ({ text, url }) => {
    const router = useRouter()
    return (
        <ButtonUI
            width={115}
            height={115}
            text={text}
            textColor={constants.colors.LIGHT_COLOR}
            textColorHover={constants.colors.BRIGHT_COLOR1}
            backgroundColor="transparent"
            backgroundColorHover="transparent"

            textNoWrap={false}
            textLineHeight="160%"
            textWeight="bold"
            border={`2px solid ${constants.colors.LIGHT_COLOR}`}
            borderHover={`2px solid ${constants.colors.BRIGHT_COLOR1}`}
            borderRadius={100}
            padding="5px 0 0 0 "
            isFocusEnable={false}
            onClick={() => router.push(url)}
        />
    )
}

export default ButtonAbout