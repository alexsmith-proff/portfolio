"use client"

import { FC, useEffect, useState } from "react";
import Image from "next/image";

import s from './photo_border_gradient.module.scss'

interface PhotoBorderGradientProps {
    width?: number
    height?: number
    borderWidth: number
    imageFile: string
    alt?: string
}

const PhotoBorderGradient: FC<PhotoBorderGradientProps> = ({ width, height, borderWidth, imageFile, alt = 'photo' }) => {
    // Размер фото
    const [widthPhoto, setWidthPhoto] = useState(0)
    const [heightPhoto, setHeightPhoto] = useState(0)
    // const [size, setSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const handleResize = () => {
            if (window.screen.width >= 500) {
                setWidthPhoto(450)
                setHeightPhoto(500)
            }
            if (window.screen.width < 500) {
                setWidthPhoto(400)
                setHeightPhoto(444)
            }
            if (window.screen.width < 430) {
                setWidthPhoto(320)
                setHeightPhoto(355)
            }
            if (window.screen.width < 350) {
                setWidthPhoto(300)
                setHeightPhoto(333)
            }
            if (window.screen.width < 330) {
                setWidthPhoto(250)
                setHeightPhoto(277)
            }
            if ((window.screen.width <= 1024)&&(window.screen.height <= 600)) {
                setWidthPhoto(350)
                setHeightPhoto(388)
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <div className={s.item} style={{ width: widthPhoto + 1.2 * borderWidth, height: heightPhoto + 1.2 * borderWidth, objectFit: "cover" }}>
            <Image
                className={s.img}
                src={imageFile}
                width={widthPhoto}
                height={heightPhoto}
                alt={alt}
            />
            {/* <div>{size.width}</div> */}
            {/* <div>{size.height}</div> */}
        </div>
    )
}

export default PhotoBorderGradient