import { FC } from "react";
import Image from "next/image";

import s from './photo_border_gradient.module.scss'

interface PhotoBorderGradientProps{
    width: number
    height: number
    borderWidth: number
    imageFile: string
    alt?: string
}

const PhotoBorderGradient: FC<PhotoBorderGradientProps> = ({width, height, borderWidth, imageFile, alt = 'photo'}) => {
    return(
        <div className={s.item} style={{width: width + 1.2*borderWidth, height: height + 1.2*borderWidth}}>
            <Image className={s.img} src={imageFile} width={width} height={height} alt={alt} />
        </div>
    )
}

export default PhotoBorderGradient