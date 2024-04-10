import { FC } from "react";
import Link from "next/link";

import s from './github_link.module.scss'

const GitHubLink: FC = () => {
    return(
        <div className={s.git}>
                <Link href="https://github.com/alexsmith-proff" target="_blank">
                    Мой GitHub
                </Link>
            </div>
    )
}

export default GitHubLink