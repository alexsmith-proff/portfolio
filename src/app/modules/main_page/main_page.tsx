import { FC } from "react";
import BlobPhoto from "@/app/components/blob_photo/blob_photo";

import s from './main_page.module.scss'

interface MainPageProps{}

const MainPage: FC<MainPageProps> = ({}) => {
    return(
        <div>
            <BlobPhoto fileName="/img/main-photo.png" />
        </div>
    )
}

export default MainPage