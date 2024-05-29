// import { MediaType } from "../enums/projects.enum"

interface IMediaData{
    main: IMedia[],
    previews: IMedia[]
}

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
    media: IMediaData
}

export interface IProjectCard extends Omit<IProject, 'description' | 'stackExpand' | 'gitUrl' | 'media'> {
    stackShort: string
    bgFileName: string
}