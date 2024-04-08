import { FC } from "react"
import { INavBar } from "@/app/interfaces/navbar.interface"

import s from './navbar_ui.module.scss'
import Link from "next/link"

interface NavBarUIProps {
    navBar: INavBar[]
}

const NavBarUI: FC<NavBarUIProps> = ({ navBar }) => {

    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                {
                    navBar.map(item => <li className={s.item} key={item.id}><Link href={item.link}>{item.name}</Link></li>)
                }
            </ul>
        </nav>
    )
}

export default NavBarUI