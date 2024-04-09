import { FC } from "react";
import TypeAnimationText from "../type_animation_text/type_animation_text";


interface MainTitleProps{}

const MainTitle: FC<MainTitleProps> = ({ }) => {
    return(
        <div>
            <TypeAnimationText />
        </div>
    )
}

export default MainTitle