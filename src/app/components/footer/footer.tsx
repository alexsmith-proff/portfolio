import { FC } from "react";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { PiTelegramLogo } from "react-icons/pi";

import s from './footer.module.scss'

const Footer: FC = () => {
    return (
        <div className={s.footer}>
            <div className="container">
                <div className={s.wrap}>
                    <h3 className={s.text}>Связаться со мной:</h3>
                    <Link className={s.item} href={"tel: +79631089610"}>
                        <FiPhone className={s.ico} />
                        +7(963)108-96-10
                    </Link>
                    <Link className={s.item} href={"https://t.me/alexsmith_proff"} target="_blank">
                        <PiTelegramLogo className={s.ico} size={18} />
                        @alexsmith_proff
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer