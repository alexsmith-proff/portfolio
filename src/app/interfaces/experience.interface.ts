interface IImage  {
    width: number
    height: number
    fileName: string    
}

export interface IExperienceCard {
    id: number
    title: string
    image: IImage
    link: string
    dateSince: string
}