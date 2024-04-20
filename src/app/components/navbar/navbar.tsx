"use client"

import { FC } from "react"
import NavBarUI from "@/app/ui/navbar/navbar_ui"
import { navBarItems } from "@/app/constants/navbar"
import { usePathname } from "next/navigation"

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({ }) => {
    const pathName = usePathname()

    return (
        <NavBarUI navBar={navBarItems} pathName={pathName} />
    )
}

export default NavBar