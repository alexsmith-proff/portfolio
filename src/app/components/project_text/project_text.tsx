import { FC } from "react";
import { russo_one } from "@/app/fonts";

import s from './project_text.module.scss'
import { IProject } from "@/app/interfaces/projects.interface";

interface ProjectTextProps {
    project: IProject
}

const ProjectText: FC<ProjectTextProps> = ({ }) => {
    return (
        <div className={s.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore excepturi officia dolores eveniet optio odio, doloremque nobis iusto cupiditate aliquam laboriosam, fugiat expedita aperiam voluptatum voluptates provident! Nemo aperiam corrupti eligendi eaque, eos explicabo quo, dolores illum ullam fugiat nulla illo. Quo numquam illo hic explicabo est mollitia aspernatur nulla sequi, natus magnam laudantium qui sapiente culpa deleniti, alias ipsam ad inventore? Voluptate, quisquam optio! Amet voluptatum perspiciatis dolor eaque voluptate reprehenderit dicta aliquid provident quidem officia laboriosam, ab, animi labore possimus voluptates nam eos similique debitis tempora iure facere. Repellendus ratione magnam eaque ducimus voluptatem consectetur, vel sit magni beatae consequuntur blanditiis, deleniti pariatur hic laborum molestiae dicta natus nemo? Fuga dolorum nesciunt labore consequuntur reprehenderit, eveniet ipsam quod vel temporibus, qui aliquid consectetur illo illum veritatis vero, quibusdam voluptate! Quisquam, iure aspernatur. Eligendi modi nihil minus, debitis recusandae suscipit labore nostrum magni ex quas ipsum iste voluptatum odio.
        </div>
    )
}

export default ProjectText