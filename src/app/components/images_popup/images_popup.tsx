'use client'

import { FC, useState } from "react";
import Image from "next/image";
import { Grad, toBase64 } from "@/app/services/image";

import s from './images_popup.module.scss'

interface ImagesPopupProps {
    activePopup: boolean
    photos: string[]
    currentPhotoNum: number
    clickNextPhoto: () => void
    clickThumbnailPhoto: (index: number) => void
    closePopup: () => void
}

const ImagesPopup: FC<ImagesPopupProps> = ({ activePopup, photos, currentPhotoNum, clickNextPhoto, clickThumbnailPhoto, closePopup }) => {
    return (
        <div>
            {
                activePopup &&
                (
                    <div className={s.popup + ' ' + s.active}>
                        <div className={s.content + ' ' + s.active} onClick={e => e.stopPropagation()}>
                            <div className={s.popupBigPhoto}>
                                <Image
                                    alt="main-photo"
                                    src={photos[currentPhotoNum]}
                                    width="1600"
                                    height="770"
                                    placeholder="blur"
                                    blurDataURL={`data:image/svg+xml;base64,${toBase64(Grad(600, 700))}`}
                                    objectFit="cover"
                                    onClick={clickNextPhoto}
                                />
                            </div>
                            <div className={s.popupSmallPhotoList}>
                                {
                                    photos.map((item, index) => (
                                        <div className={currentPhotoNum == index ? `${s.popupSmallPhoto} ${s.active}` : s.popupSmallPhoto} key={index}>
                                            <Image
                                                className={s.popupSmallPhoto}
                                                alt="small-photo"
                                                src={item}
                                                width={80}
                                                height={80}
                                                placeholder="blur"
                                                blurDataURL={`data:image/svg+xml;base64,${toBase64(Grad(80, 80))}`}
                                                onClick={() => clickThumbnailPhoto(index)}
                                            />
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