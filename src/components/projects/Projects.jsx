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
          name="Stock Forecaster"
          description="A simple stock closing price forecaster that uses LSTM Neural Networks in Python 3."
          link="https://github.com/kareemxyz/stock-forecaster"
          index="0"
        />
        <ProjectCard
          name="Cartoon Smackdown Ultimate"
          description="A Roblox PvP combat game played over 1.9 million times, peaking at 700,000 monthly active users."
          link="https://www.roblox.com/games/6694317558/NEW-CODE-Cartoon-SmackDown-Ultimate#!/"
          index="1"
        />
        <ProjectCard
          name="Command REST API"
          description="An API supporting CRUD methods that returns CLI commands. (In Progress)"
          link=""
          index="2"
        />
      </div>
    </div>
  )
}
