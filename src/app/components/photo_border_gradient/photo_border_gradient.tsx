"use client"

import { FC, useEffect, useState } from "react";
import Image from "next/image";

import s from './photo_border_gradient.module.scss'
import SpinnerLds from "../spinners/spinner_lds/spiner_lds";

interface PhotoBorderGradientProps {
    width?: number
    height?: number
    borderWidth: number
    imageFile: string
    alt?: string
}

const PhotoBorderGradient: FC<PhotoBorderGradientProps> = ({ width = 250, height = 277, borderWidth, imageFile, alt = 'photo' }) => {
    // Размер фото
    const [widthPhoto, setWidthPhoto] = useState(width)
    const [heightPhoto, setHeightPhoto] = useState(height)
    // const [size, setSize] = useState({ width: 0, height: 0 })

    const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true)

    const handleLoadImage = () => {
        setIsLoadingImage(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.screen.width >= 500) {
                console.log('aaa-11')
                setWidthPhoto(450)
                setHeightPhoto(500)
            }
            if (window.screen.width < 500) {
                console.log('aaa-22')
                setWidthPhoto(400)
                setHeightPhoto(444)
            }
            if (window.screen.width < 430) {
                console.log('aaa-33')
                setWidthPhoto(320)
                setHeightPhoto(355)
            }
            if (window.screen.width < 350) {
                console.log('aaa-44')
                setWidthPhoto(300)
                setHeightPhoto(333)
            }
            if (window.screen.width < 330) {
                console.log('aaa-1')
                
                setWidthPhoto(250)
                setHeightPhoto(277)
            }
            if ((window.screen.width <= 1024)&&(window.screen.height <= 600)) {
                console.log('aaa-2')
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
                onLoad={handleLoadImage}
            />
            {
                isLoadingImage && <SpinnerLds className={s.loading} scale={0.6} />
            }
            {/* <div>{size.width}</div> */}
            {/* <div>{size.height}</div> */}
        </div>
    )
}

export default PhotoBorderGradient