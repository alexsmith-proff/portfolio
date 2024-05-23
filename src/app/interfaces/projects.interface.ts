// import { MediaType } from "../enums/projects.enum"

export interface IMedia {
    fileName: string
    type: 'image' | 'video'
}

export interface IProject {
    id: number
    serialNumber: number
    title: string
    description: string
    stackExpand: string
    gitUrl?: string
    media: IMedia[]
}

export interface IProjectCard extends Omit<IProject, 'description' | 'stackExpand' | 'gitUrl' | 'media'> {
    stackShort: string
    bgFileName: string
}