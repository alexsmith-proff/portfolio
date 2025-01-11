import { FC } from 'react'

import s from './spiner_lds.module.scss'

interface SpinnerLdsProps {
    scale?: number
    themeColor?: 'dark' | 'light'
    className?: string
    style?: React.CSSProperties
}

const SpinnerLds: FC<SpinnerLdsProps> = ({ scale = 1, themeColor = 'dark', className, style }) => {
    return (
        <div
            className={themeColor === 'dark' ? `${className} ${s.spinnerLds} ${s.darkColor}` : `${className} ${s.spinnerLds} ${s.lightColor}`}
            style={{ ...style, transform: `scale(${scale})` }}>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    )
}

export default SpinnerLds