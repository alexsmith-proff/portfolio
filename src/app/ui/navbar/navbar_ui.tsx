import { FC } from "react"
import { INavBar } from "@/app/interfaces/navbar.interface"

import s from './navbar_ui.module.scss'
import Link from "next/link"

interface NavBarUIProps {
    navBar: INavBar[]
    onClick: (id: number) => void
}

const NavBarUI: FC<NavBarUIProps> = ({ navBar, onClick }) => {

    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                {
                    navBar.map(item => <Link href={item.link}><li className={ item.active ? `${s.item} ${s.active}` : `${s.item}`} key={item.id} onClick={() => onClick(item.id)}>{item.name}</li></Link>)
                }
            </ul>
        </nav>
    )
}

export default NavBarUI