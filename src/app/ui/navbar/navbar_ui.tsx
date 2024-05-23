import { FC } from "react"
import { INavBar } from "@/app/interfaces/navbar.interface"

import s from './navbar_ui.module.scss'
import Link from "next/link"

interface NavBarUIProps {
    navBar: INavBar[]
    pathName: string
}

const NavBarUI: FC<NavBarUIProps> = ({ navBar, pathName }) => {

    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                {
                    navBar.map(item => <Link href={item.link} key={item.id}><li className={ item.link === pathName || (pathName.includes('project') && item.link.includes('project')) ? `${s.item} ${s.active}` : `${s.item}`} >{item.name}</li></Link>)
                }
            </ul>
        </nav>
    )
}

export default NavBarUI