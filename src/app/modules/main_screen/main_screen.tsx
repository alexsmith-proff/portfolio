
import { FC } from "react";
import BlobPhoto from "@/app/components/blob_photo/blob_photo";
import MainTitle from "@/app/components/main_title/main_title";
import ArrowDown from "@/app/components/arrow_down/arrow_down";
import GitHubLink from "@/app/components/github_link/github_link";

import s from './main_screen.module.scss'

interface MainScreenProps { }

const MainScreen: FC<MainScreenProps> = ({ }) => {
    return (
        <div className="container">
            <div className={s.main}>
                <div className={s.wrap}>
                    <div className={s.blobPhoto}>
                        <BlobPhoto fileName="./img/main-photo.png" />
                    </div>
                    <div className={s.mainTitle}>
                        <MainTitle />
                    </div>
                </div>
                <div className={s.arrow}>
                    <ArrowDown />
                </div>
                <GitHubLink />
            </div>
        </div>
    )
}

export default MainScreen