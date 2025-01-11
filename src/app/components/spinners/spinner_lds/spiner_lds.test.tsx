import { render, screen } from "@testing-library/react"
import SpinnerLds from "./spiner_lds"
import s from './spiner_lds.module.scss'

describe('Тест SpinnerLds', () => {
    it('Размер по умолчанию', () => {
        render(
            <SpinnerLds />
        )
        const container = document.querySelector(`.${s.spinnerLds}`)
        // screen.debug(container)
        expect(container).toHaveStyle({ transform: 'scale(1)' })
    })
    it('Размер 1.5', () => {
        render(
            <SpinnerLds scale={1.5} />
        )
        const container = document.querySelector(`.${s.spinnerLds}`)
        expect(container).toHaveStyle({ transform: 'scale(1.5)' })
    })
    it('SpinnerLds snapshot', () => {
        const el = render(
            <SpinnerLds />
        )
        expect(el).toMatchSnapshot()
    })
})