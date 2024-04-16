import { IProject, IProjectCard } from "./interfaces/projects.interface";

export const projects: IProject[] = [
    {
        id: 1,
        title: 'Комплекс измерения параметров радиостанций',
        description: 'Просто описание про КИПР - Комплекс измерения параметров радиостанций',
        stackExpand: 'React MobX MUI GraphQL',
        media: [
            {
                fileName: './img/kipr/kipr1.png',
                type: "image"
            },
            {
                fileName: './img/kipr/kipr2.png',
                type: "image"
            },
            {
                fileName: './img/kipr/kipr3.png',
                type: "image"
            },
            {
                fileName: './img/kipr/kipr4.png',
                type: "image"
            }
        ],
    }
]

export const projectCards: IProjectCard[] = [
    {
        id: 1,
        title: 'Комплекс измерения параметров радиостанций',
        stackShort: 'React MobX MUI GraphQL',
        bgFileName: './img/kipr/kipr2.png'
    }
]