import { useInView } from "react-intersection-observer";

import "./about.scss";

export default function About() {
  const { ref: refElement_1, inView: visibleElement_1 } = useInView({ triggerOnce: true, threshold : 0.1});
  const { ref: refElement_2, inView: visibleElement_2 } = useInView({ triggerOnce: true, threshold : 0.1, delay: 200 });
  return (
    <div className="about" id="about">
      <div className={`${'about-text'} ${visibleElement_1 ? "fadeIn" : "hidden"}`} ref={refElement_1}>
        <h1 className="bold-text">ABOUT</h1>
        <p className="body-text">Hi! I'm Kareem, an aspiring Computer Science student from Massachusetts. I aim to deepen my understanding in various areas of technology and product development.</p>
        <a className="body-text body-link body-resume" href="assets/KareemElewa_Resume.pdf" target="_blank" >Check out my resume!</a>
      </div>
      <div className={`${'about-image'} ${visibleElement_2 ? "fadeIn" : "hidden"}`} ref={refElement_2}>
        <img src="assets/Kareem_1.png" alt="Kareem" draggable="false" />
      </div>
    </div>
  );
}
