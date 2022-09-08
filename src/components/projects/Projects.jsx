import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";

import "./projects.scss"

export default function Projects() {
  const { ref: refElement_1, inView: visibleElement_1 } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="projects" id="projects">
      <h1 className={visibleElement_1 ? "fadeIn" : "hidden"} ref={refElement_1}>PROJECTS</h1>
      <div className="container">
        <ProjectCard
          name="Stock Oracle"
          description="A lightweight program meant to extrapolate stock market odds through bulk data. (In Progress)"
          image="assets/project_stock_oracle.png"
          link=""
          index="1"
        />
        <ProjectCard
          name="Cartoon Smackdown Ultimate"
          description="A Roblox PvP combat game played over 1.8 million times, peaking at 700,000 monthly active users."
          image="assets/project_csdu.png"
          link="https://www.roblox.com/games/6694317558/NEW-CODE-Cartoon-SmackDown-Ultimate#!/"
          index="2"
        />
        <ProjectCard
          name="Command Prompt REST API"
          description="An API supporting CRUD methods that returns CLI commands. (In Progress)"
          image="assets/project_rest_api.png"
          link=""
          index="3"
        />
      </div>
    </div>
  )
}
