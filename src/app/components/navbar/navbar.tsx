import { FC } from "react"
import NavBarUI from "@/app/ui/navbar/navbar_ui"
import { INavBar } from "@/app/interfaces/navbar.interface"

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
    const navBar: INavBar[] = [
        {
            id: 1,
            name: 'Главная',
            link: '/'
        },
        {
            id: 2,
            name: 'Обо мне',
            link: '/about'
        },
        {
            id: 3,
            name: 'Проекты',
            link: '/projects'
        },
    ]
    return(
        <NavBarUI navBar={navBar} />
    )
}

export default NavBar