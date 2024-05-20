import { useState } from 'react'
import { INavBar } from "@/app/interfaces/navbar.interface"

export const useNavBar = () => {
    const [navBar, setNavBar] = useState<INavBar[]>([
        {
            id: 1,
            name: 'Главная',
            link: '/',
            active: true
        },
        {
            id: 2,
            name: 'Обо мне',
            link: '/about',
            active: false
        },
        {
            id: 3,
            name: 'Проекты',
            link: '/project/1',
            active: false
        },
    ])
    const handleClick = (id: number) => {
        setNavBar(navBar.map((item: INavBar) => ({...item, active: item.id === id ? true : false})))
    }

    return { navBar, handleClick }
}