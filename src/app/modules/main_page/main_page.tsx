
import { FC } from "react";
import BlobPhoto from "@/app/components/blob_photo/blob_photo";
import MainTitle from "@/app/components/main_title/main_title";

import s from './main_page.module.scss'
import ArrowDown from "@/app/components/arrow_down/arrow_down";
import Link from "next/link";

interface MainPageProps { }

const MainPage: FC<MainPageProps> = ({ }) => {
    return (
        <div className={s.main}>
            <div className={s.wrap}>
                <div className={s.blobPhoto}>
                    <BlobPhoto fileName="/img/main-photo.png" />
                </div>
                <div className={s.mainTitle}>
                    <MainTitle />
                </div>
            </div>
            <div className={s.arrow}>
                <ArrowDown />
            </div>
            <div className={s.git}>
                {/* Мой GITHUB */}
                <Link href="https://github.com/alexsmith-proff" target="_blank">
                    Мой GitHub
                </Link>
            </div>
        </div>
    )
}

export default MainPage