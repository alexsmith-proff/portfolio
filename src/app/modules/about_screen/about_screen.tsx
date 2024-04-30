import { FC } from "react";
import Image from "next/image";
import Ticker from "@/app/components/ticker/ticker";

import s from './about_screen.module.scss'

const AboutScreen: FC = ({ }) => {
    return (
        <div className={s.main}>
            <div className="container">
                <div className={s.content}>
                    <div className={s.text}>Lorem ipsum dolor sit amet adipisicing elit. Ut suscipit aliquid voluptate laudantium, aspernatur culpa provident ad at quisquam nemo ratione quas temporibus quia, optio beatae delectus libero magnam ducimus est dignissimos labore? Dolorum nesciunt ex, aut quam laborum iure temporibus aliquam fuga itaque! Necessitatibus alias facere odio illum suscipit aspernatur officiis maiores culpa quis sequi. Distinctio voluptatibus nemo, quo explicabo quasi exercitationem minus rerum tempore debitis animi. Eum deserunt esse modi repellendus nostrum numquam ad perferendis quod expedita fuga?</div>
                    <ul className={s.photoList}>
                        <li className={`${s.photoItem} ${s.photo1}`}>
                            <Image className={s.img} src={'/img/about/1.jpg'} width={405} height={400} alt="about-photo1" />
                        </li>
                        <li className={`${s.photoItem} ${s.photo2}`}>
                            <Image className={s.img} src={'/img/about/2.jpg'} width={405} height={400} alt="about-photo1" />
                        </li>
                        <li className={`${s.photoItem} ${s.photo3}`}>
                            <Image className={s.img} src={'/img/about/3.jpg'} width={405} height={400} alt="about-photo1" />
                        </li>
                        <li className={`${s.photoItem} ${s.photo4}`}>
                            <Image className={s.img} src={'/img/about/4.jpg'} width={405} height={400} alt="about-photo1" />
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