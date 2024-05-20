"use client"

import { FC, useEffect, useState } from "react";
import Image from "next/image";

import s from './project_slider_border_gradient.module.scss'
import { constants } from "@/app/constants";
import { IMedia } from "@/app/interfaces/projects.interface";

interface ProjectSliderBorderGradientProps {
    width?: number
    height?: number
    borderWidth: number
    media: IMedia
    alt?: string
}

const ProjectSliderBorderGradient: FC<ProjectSliderBorderGradientProps> = ({ width, height, borderWidth, media, alt = 'photo' }) => {
    // Размер фото
    const [widthPhoto, setWidthPhoto] = useState(0)
    const [heightPhoto, setHeightPhoto] = useState(0)
    // const [size, setSize] = useState({ width: 0, height: 0 })

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (window.screen.width >= 500) {
    //             setWidthPhoto(450)
    //             setHeightPhoto(500)
    //         }
    //         if (window.screen.width < 500) {
    //             setWidthPhoto(400)
    //             setHeightPhoto(444)
    //         }
    //         if (window.screen.width < 430) {
    //             setWidthPhoto(320)
    //             setHeightPhoto(355)
    //         }
    //         if (window.screen.width < 350) {
    //             setWidthPhoto(300)
    //             setHeightPhoto(333)
    //         }
    //         if (window.screen.width < 330) {
    //             setWidthPhoto(250)
    //             setHeightPhoto(277)
    //         }
    //         if ((window.screen.width <= 1024)&&(window.screen.height <= 600)) {
    //             setWidthPhoto(350)
    //             setHeightPhoto(388)
    //         }
    //     };
    //     window.addEventListener('resize', handleResize);
    //     handleResize()
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, [])

    return (
        <div className={s.slider}>
            <div className={s.item} style={{ width: Number(width) + 1.2 * borderWidth, height: Number(height) + 1.2 * borderWidth, objectFit: "cover" }}>
                <div style={{ position: "relative", width: width, height: height }}>
                    <Image
                        className={s.img}
                        src={media.fileName}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt={alt}
                    />
                </div>
            </div>
            {
                media.type === 'image' ? (
                    <div className={s.icon}>
                        <svg stroke={constants.colors.BRIGHT_COLOR1} fill={constants.colors.BRIGHT_COLOR1} stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Zm8.25-3.75a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25H7.5a.75.75 0 0 1 0-1.5h2.25V7.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"></path></svg>
                    </div>
                )
                    : (
                        <div className={s.icon}>
                            <svg stroke={constants.colors.BRIGHT_COLOR1} fill={constants.colors.BRIGHT_COLOR1} stroke-width="0" viewBox="0 0 1024 1024" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg>
                        </div>
                    )
            }
        </div>
    )
}

export default ProjectSliderBorderGradient