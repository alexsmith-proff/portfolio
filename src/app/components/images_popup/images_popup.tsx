'use client'

import { FC, useState } from "react";
import Image from "next/image";
import { Grad, toBase64 } from "@/app/services/image";
import { useResizeImage } from "@/app/hooks/useResizeImage";
import { IMedia } from "@/app/interfaces/projects.interface";

import s from './images_popup.module.scss'
import { constants } from "@/app/constants";

interface ImagesPopupProps {
    activePopup: boolean
    mainMedia: IMedia
    previewMedia: IMedia[]
    currentPhotoNum: number
    clickNextPhoto: () => void
    clickThumbnailPhoto: (index: number) => void
    closePopup: () => void
}

const ImagesPopup: FC<ImagesPopupProps> = ({ activePopup, mainMedia, previewMedia, currentPhotoNum, clickNextPhoto, clickThumbnailPhoto, closePopup }) => {
    // Размер фото
    const [widthBigPhoto, setWidthBigPhoto] = useState(1600)
    const [heightBigPhoto, setHeightBigPhoto] = useState(770)

    const [widthSmallPhoto, setWidthSmallPhoto] = useState(120)
    const [heightSmallPhoto, setHeightSmallPhoto] = useState(120)

    useResizeImage(() => {
        if (window.screen.width >= 1620) {
            setWidthBigPhoto(1600)
            setHeightBigPhoto(770)
            setWidthSmallPhoto(120)
            setHeightSmallPhoto(120)
        }
        if (window.screen.width < 1620) {
            setWidthBigPhoto(1400)
            setHeightBigPhoto(750)
        }
        if (window.screen.width < 1430) {
            setWidthBigPhoto(1200)
        }
        if (window.screen.width < 1230) {
            setWidthBigPhoto(1000)
            setHeightBigPhoto(600)
        }
        if (window.screen.width < 900) {
            setWidthBigPhoto(800)
            setHeightBigPhoto(500)
        }
        if (window.screen.width < 820) {
            setWidthBigPhoto(600)
            setHeightBigPhoto(400)
        }
        if (window.screen.width < 620) {
            setWidthBigPhoto(400)
            setHeightBigPhoto(300)
        }
        if (window.screen.width < 430) {
            setWidthBigPhoto(380)
            setHeightBigPhoto(220)
        }
        if (window.screen.width < 413) {
            setWidthBigPhoto(380)
            setHeightBigPhoto(220)
        }
        if (window.screen.width < 390) {
            setWidthBigPhoto(360)
            setHeightBigPhoto(220)
        }
        if (window.screen.width < 360) {
            setWidthBigPhoto(340)
            setHeightBigPhoto(220)
        }
        if (window.screen.width < 350) {
            setWidthBigPhoto(310)
            setHeightBigPhoto(210)
        }
    })

    return (
        <div>
            {
                activePopup &&
                (
                    <div className={s.popup + ' ' + s.active}>
                        <div className={s.content + ' ' + s.active} onClick={e => e.stopPropagation()}>
                            <div className={s.popupBigPhoto}>
                                {
                                    mainMedia.type === "image" ? (
                                        <Image
                                            alt="main-photo"
                                            src={mainMedia.fileName}
                                            width={widthBigPhoto}
                                            height={heightBigPhoto}
                                            placeholder="blur"
                                            blurDataURL={`data:image/svg+xml;base64,${toBase64(Grad(600, 700))}`}
                                            objectFit="cover"
                                            onClick={clickNextPhoto}
                                        />
                                    ) : (
                                        <video
                                            src={mainMedia.fileName}
                                            width={widthBigPhoto}
                                            height={heightBigPhoto}
                                            onClick={clickNextPhoto}
                                            loop
                                            autoPlay
                                        />
                                    )
                                }

                            </div>
                            <div className={s.popupSmallPhotoList}>
                                {
                                    previewMedia.map((item, index) => (
                                        <div className={currentPhotoNum == index ? `${s.popupSmallPhoto} ${s.active}` : s.popupSmallPhoto} key={index}>
                                            <Image
                                                className={s.popupSmallPhoto}
                                                alt="small-photo"
                                                src={item.fileName}
                                                width={widthSmallPhoto}
                                                height={heightSmallPhoto}
                                                placeholder="blur"
                                                blurDataURL={`data:image/svg+xml;base64,${toBase64(Grad(80, 80))}`}
                                                onClick={() => clickThumbnailPhoto(index)}
                                            />
                                            {
                                                item.type === 'video' &&
                                                <div className={s.icon} onClick={() => clickThumbnailPhoto(index)}>
                                                    <svg stroke={constants.colors.BRIGHT_COLOR1} fill={constants.colors.BRIGHT_COLOR1} stroke-width="0" viewBox="0 0 1024 1024" height={30} width={30} xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg>
                                                </div>
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={s.closeBtn} onClick={closePopup}>x</div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default ImagesPopup