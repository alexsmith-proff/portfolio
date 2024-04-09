import { FC } from "react";

import s from './blob_photo.module.scss'
import Image from "next/image";

interface BlobPhotoProps{
    fileName: string
}

const BlobPhoto: FC<BlobPhotoProps> = ({ fileName }) => {
    return(
        <div>
            <Image className={s.box} src={fileName} width={450} height={450} alt="main-photo" />
        </div>
    )
}

export default BlobPhoto