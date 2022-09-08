import { useInView } from "react-intersection-observer";

import "./projects.scss"

export default function ProjectCard({ name, description, image, link, index }) {
    const { ref: refElement, inView: visibleElement } = useInView({ triggerOnce: true, threshold: 0.1, delay: index * 200 });

    console.log(document.querySelectorAll(".ProjectCard").length)

    return (
        <div className={`${"project"} ${visibleElement ? "fadeIn" : "hidden"}`} ref={refElement}>
            <div className="project-card">
                <div className="extra-information">
                    <p>{description}</p>
                </div>
                <a href={link} target={link ? "_blank" : ""} rel="noreferrer" draggable="false">
                    <img src={image} alt={name} draggable="false" />
                </a>
                <h3>{name}</h3>
            </div>
        </div>
    )
}
