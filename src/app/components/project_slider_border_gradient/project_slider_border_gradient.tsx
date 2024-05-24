"use client"

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { constants } from "@/app/constants";
import { IMedia } from "@/app/interfaces/projects.interface";

import s from './project_slider_border_gradient.module.scss'

interface ProjectSliderBorderGradientProps {
    width?: number
    height?: number
    borderWidth: number
    media: IMedia
    activeMediaIndex: number
    mediaMaxIndex: number
    alt?: string
    prev: () => void
    next: () => void
}

const ProjectSliderBorderGradient: FC<ProjectSliderBorderGradientProps> = ({ width, height, borderWidth, media, activeMediaIndex, mediaMaxIndex, alt = 'photo', prev, next }) => {
    // Размер фото
    const [widthPhoto, setWidthPhoto] = useState(600)
    const [heightPhoto, setHeightPhoto] = useState(500)
    const [sizeArrow, setSizeArrow] = useState(30)
    const [sizeIcon, setSizeIcon] = useState(50)

    useEffect(() => {
        const handleResize = () => {
            if (window.screen.width >= 640) {
                setWidthPhoto(600)
                setHeightPhoto(500)
            }
            if (window.screen.width < 640) {
                setWidthPhoto(500)
                setHeightPhoto(400)
                setSizeIcon(40)
            }
            if (window.screen.width < 530) {
                setWidthPhoto(400)
                setHeightPhoto(300)
            }
            if (window.screen.width < 430) {
                setWidthPhoto(270)
                setHeightPhoto(200)
                setSizeArrow(25)
                setSizeIcon(30)
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <div className={s.slider}>
            <div className={s.item} style={{ width: Number(widthPhoto) + 1.2 * borderWidth, height: Number(heightPhoto) + 1.2 * borderWidth, objectFit: "cover" }}>
                <div style={{ position: "relative", width: widthPhoto, height: heightPhoto }}>
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
                        <svg stroke={constants.colors.BRIGHT_COLOR1} fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height={`${sizeIcon}px`} width={`${sizeIcon}px`} xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    </div>
                )
                    : (
                        <div className={s.icon}>
                            <svg stroke={constants.colors.BRIGHT_COLOR1} fill={constants.colors.BRIGHT_COLOR1} stroke-width="0" viewBox="0 0 1024 1024" height={`${sizeIcon}px`} width={`${sizeIcon}px`} xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg>
                        </div>
                    )
            }
            {
                activeMediaIndex !== 0 && (
                    <div className={`${s.arrow} ${s.left}`} onClick={prev}>
                        <svg stroke={constants.colors.BRIGHT_COLOR1} fill={constants.colors.BRIGHT_COLOR1} stroke-width="0" viewBox="0 0 320 512" height={`${sizeArrow}px`} width={`${sizeArrow}px`} xmlns="http://www.w3.org/2000/svg"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                    </div>
                )
            }
            {
                activeMediaIndex !== mediaMaxIndex - 1 && (
                    <div className={`${s.arrow} ${s.right}`} onClick={next}>
                        <svg stroke={constants.colors.BRIGHT_COLOR1} fill={constants.colors.BRIGHT_COLOR1} stroke-width="0" viewBox="0 0 320 512" height={`${sizeArrow}px`} width={`${sizeArrow}px`} xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                    </div>
                )
            }
        </div>
    )
}

export default ProjectSliderBorderGradient