import { useInView } from "react-intersection-observer";

import "./projects.scss"

export default function ProjectCard({ name, description, link, index }) {
    const { ref: refElement, inView: visibleElement } = useInView({ triggerOnce: true, threshold: 0.1, delay: index * 300 });

    console.log(document.querySelectorAll(".ProjectCard").length)

    return (
        <div className={`${"project"} ${visibleElement ? "fadeIn" : "hidden"}`} ref={refElement}>
            <div className="project-contents">
                <h3>{name}</h3>
                <div className="project-card">
                    <a href={link} target={link ? "_blank" : ""} rel="noreferrer" draggable="false">
                        <p>{description}</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
