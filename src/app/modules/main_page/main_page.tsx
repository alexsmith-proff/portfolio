
import { FC } from "react";
import BlobPhoto from "@/app/components/blob_photo/blob_photo";

import s from './main_page.module.scss'
import MainTitle from "@/app/components/main_title/main_title";

interface MainPageProps{}

const MainPage: FC<MainPageProps> = ({}) => {
    return(
        <div>
            <BlobPhoto fileName="/img/main-photo.png" />
            <MainTitle />
        </div>
    )
}

export default MainPage