import { useInView } from "react-intersection-observer";

import "./projects.scss"

export default function Projects() {
  const { ref: refElement_1, inView: visibleElement_1 } = useInView({ triggerOnce: true, threshold : 0.1});
  const { ref: refElement_2, inView: visibleElement_2 } = useInView({ triggerOnce: true, threshold : 0.1, delay: 200 });
  const { ref: refElement_3, inView: visibleElement_3 } = useInView({ triggerOnce: true, threshold : 0.1, delay: 400 });
  const { ref: refElement_4, inView: visibleElement_4 } = useInView({ triggerOnce: true, threshold : 0.1, delay: 600 });

  return (
    <div className="projects" id="projects">
      <h1 className={`${visibleElement_1 ? "fadeIn" : "hidden"}`} ref={refElement_1}>PROJECTS</h1>
      <div className="container">
        <div className={`${"project"} ${visibleElement_2 ? "fadeIn" : "hidden"}`} ref={refElement_2}>
          <div className="image-container">
            <img src="assets/project_stock_oracle.png" alt="Stock Oracle" />
          </div>
          <h3>Stock Oracle</h3>
        </div>
        <div className={`${"project"} ${visibleElement_3 ? "fadeIn" : "hidden"}`} ref={refElement_3}>
          <div className="image-container">
            <img src="assets/project_rest_api.png" alt="Rest API" />
          </div>
          <h3>Rest API</h3>
        </div>
        <div className={`${"project"} ${visibleElement_4 ? "fadeIn" : "hidden"}`} ref={refElement_4}>
          <div className="image-container">
            <img src="assets/project_recipe_search_api.png" alt="Recipe Search API" />
          </div>
          <h3>Recipe Search API</h3>
        </div>
      </div>
    </div>
  )
}
