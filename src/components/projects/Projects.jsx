import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";

import "./projects.scss"

export default function Projects() {
  const { ref: refElement_1, inView: visibleElement_1 } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="projects" id="projects">
      <h1 className={visibleElement_1 ? "fade-in-transition" : "hidden"} ref={refElement_1}>PROJECTS</h1>
      <div className="container">
        <ProjectCard
          name="Stock Forecaster"
          description="A simple stock closing price forecaster that uses LSTM Neural Networks in Python 3."
          link="https://github.com/kareemxyz/stock_forecaster"
          index="0"
        />
        <ProjectCard
          name="Cartoon Smackdown Ultimate"
          description="A Roblox PvP combat game played over 2 million times, peaking at 700,000 monthly active users."
          link="https://www.roblox.com/games/6694317558/NEW-CODE-Cartoon-SmackDown-Ultimate#!/"
          index="1"
        />
        <ProjectCard
          name="Command Line REST API"
          description="A REST API that stores command line snippets along with a short description with what the command does."
          link="https://github.com/kareemxyz/command-rest-api"
          index="2"
        />
      </div>
    </div>
  )
}
