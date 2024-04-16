// import { MediaType } from "../enums/projects.enum"

interface IMedia {
    fileName: string
    type: 'image' | 'video'
}

export interface IProject {
    id: number
    title: string
    description: string
    stackExpand: string
    media: IMedia[]
}

export interface IProjectCard extends Omit<IProject, 'description' | 'stackExpand' | 'media'> {
    stackShort: string
    bgFileName: string
}
