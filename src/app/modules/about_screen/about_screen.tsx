import { FC } from "react";
import Image from "next/image";
import Ticker from "@/app/components/ticker/ticker";

import s from './about_screen.module.scss'
import LinkArrow from "@/app/components/link_arrow/link_arrow";

const AboutScreen: FC = ({ }) => {
    return (
        <div className={s.main}>
            <div className="container">
                <div className={s.content}>
                    <div className={s.text}>Привет! Меня зовут Алексей. Живу в г. Пенза. В 2006 году окончил Пензенский Государственный Университет по специальности &quot;Роботы и робототехнические системы и комплексы&quot;. После окончания универа, я работал в области электроники 15 лет и получил опыт разработки электронной аппаратуры. Так же в течении этого времени я параллельно занимался разработкой ПО - программирование микроконтроллеров (Embedded) на языке Си, разрабатывал desktop приложения на Object Pascal (Delphi). С 2009 года работаю в компании <LinkArrow text="КБ ПУЛЬСАР-ТЕЛЕКОМ" url="https://www.pulsar-telecom.ru/" isArrowEnable={false} isBlankEnable={true} />. Компания занимается разработкой и производством телекоммуникационного оборудования. В данной компании я работаю в WEB направлении, являюсь FRONTEND разработчиком. FRONTEND разрабатываю на React.js. Так же есть опыт разработки BACKEND. В BACKEND я использую Node.js. Все мои проекты можно посмотреть <LinkArrow text="здесь" url="/project/1"  /> </div>
                    <ul className={s.photoList}>
                        <li className={`${s.photoItem} ${s.photo1}`}>
                            <Image className={s.img} src={'./img/about/1.png'} width={405} height={400} alt="about-photo1" />
                        </li>
                        <li className={`${s.photoItem} ${s.photo2}`}>
                            <Image className={s.img} src={'./img/about/2.png'} width={405} height={400} alt="about-photo1" />
                        </li>
                        <li className={`${s.photoItem} ${s.photo3}`}>
                            <Image className={s.img} src={'./img/about/3.png'} width={405} height={400} alt="about-photo1" />
                        </li>
                        <li className={`${s.photoItem} ${s.photo4}`}>
                            <Image className={s.img} src={'./img/about/4.png'} width={405} height={400} alt="about-photo1" />
                        </li>
                    </ul>
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

export default AboutScreen