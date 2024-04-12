"use client"

import { FC } from "react"
import NavBarUI from "@/app/ui/navbar/navbar_ui"
import { useNavBar } from "./hooks/use_navbar"

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
    const {navBar, handleClick} = useNavBar()

    return(
        <NavBarUI navBar={navBar} onClick={handleClick} />
    )
}

export default NavBar