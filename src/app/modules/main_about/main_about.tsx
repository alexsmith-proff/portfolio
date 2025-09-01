import { FC } from "react";
import Title from "@/app/components/title/title";
import LinkArrow from "@/app/components/link_arrow/link_arrow";

import s from './main_about.module.scss'
import ButtonAbout from "@/app/components/buttons/button_about/button_about";
import PhotoBorderGradient from "@/app/components/photo_border_gradient/photo_border_gradient";
import Ticker from "@/app/components/ticker/ticker";

const MainAbout: FC = ({ }) => {
    return (
        <div className={s.section} id="main_about">
            <Title className={s.title} title="Кратко о себе" />
            <div className={s.content}>
                <div className="container">
                    <div className={s.contentWrap}>
                        <div className={s.photoMobile}>
                            <PhotoBorderGradient width={270} height={311} borderWidth={5} imageFile="./img/big-photo.png" alt="big-photo" />
                        </div>
                        <div className={s.description}>Привет. Меня зовут Алексей Кузнецов. Я являюсь Web-разработчиком более 6 лет. Web начинал с верстки, использовал JavaScript, PHP. Сейчас Backend разрабатываю на Node.js, а Frontend - на React.js. Опыт в данном стеке более 3 лет. Подробная информация обо мне <LinkArrow text="здесь" url="/about" /></div>
                        <div className={s.photoDesktop}>
                            <PhotoBorderGradient width={450} height={500} borderWidth={5} imageFile="./img/big-photo.png" alt="big-photo" />
                        </div>
                        <div className={s.btn}>
                            <ButtonAbout text="ПОДРОБНО ОБО МНЕ" url="/about" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.ticker}>
                <Ticker
                    text="JavaScript &nbsp;&nbsp;&nbsp;&nbsp; Node.js &nbsp;&nbsp;&nbsp;&nbsp; React.js &nbsp;&nbsp;&nbsp;&nbsp; Next.js &nbsp;&nbsp;&nbsp;&nbsp; Webpack &nbsp;&nbsp;&nbsp;&nbsp; Redux &nbsp;&nbsp;&nbsp;&nbsp; MobX &nbsp;&nbsp;&nbsp;&nbsp; GraphQL &nbsp;&nbsp;&nbsp;&nbsp; Nest.js &nbsp;&nbsp;&nbsp;&nbsp; WebSocket &nbsp;&nbsp;&nbsp;&nbsp; Linux &nbsp;&nbsp;&nbsp;&nbsp; MySQL &nbsp;&nbsp;&nbsp;&nbsp; Git &nbsp;&nbsp;&nbsp;&nbsp; Docker &nbsp;&nbsp;&nbsp;&nbsp; MongoDB &nbsp;&nbsp;&nbsp;&nbsp; Express.js &nbsp;&nbsp;&nbsp;&nbsp; PostgreSQL &nbsp;&nbsp;&nbsp;&nbsp;"
                    speed={30}
                />
            </div>
        </div>
    )
}

export default MainAbout