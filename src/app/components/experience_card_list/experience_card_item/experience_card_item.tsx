import { FC } from "react";
import ExperienceCardItemUI from "@/app/ui/experience_card_item/experience_card_item_ui";
import { IExperienceCard } from "@/app/interfaces/experience.interface";
import { getExperienceYearsAndMonths } from "@/app/services/date";

interface ExperienceCardItemProps {
    experience: IExperienceCard
}

const ExperienceCardItem: FC<ExperienceCardItemProps> = ({ experience }) => {
    return (
        <ExperienceCardItemUI
            title={experience.title}
            imgFileName={experience.image.fileName}
            width={experience.image.width}
            height={experience.image.height}
            link={experience.link}
            yearsAndMonths={getExperienceYearsAndMonths(experience.dateSince)} />
    )
}

export default ExperienceCardItem