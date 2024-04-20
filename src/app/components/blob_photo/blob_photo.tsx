import { FC } from "react";
import Image from "next/image";

import s from './blob_photo.module.scss'

interface BlobPhotoProps{
    fileName: string
}

const BlobPhoto: FC<BlobPhotoProps> = ({ fileName }) => {
    return(
        <div>
            <Image className={s.box} src={fileName} width={450} height={450} alt="main-photo" priority={true} />
        </div>
    )
}

export default BlobPhoto