import { useInView } from "react-intersection-observer";

import "./footer.scss"

export default function Footer() {
  const { ref: refElement_1, inView: visibleElement_1 } = useInView({ triggerOnce: true, threshold : 0.1});
  const { ref: refElement_2, inView: visibleElement_2 } = useInView({ triggerOnce: true, threshold : 0.1, delay: 300 });
  const { ref: refElement_3, inView: visibleElement_3 } = useInView({ triggerOnce: true, threshold : 0.1, delay: 600 });
  return (
    <div className="footer" id="footer">
      <a className={`${'icon-linkedin'} ${visibleElement_1 ? "fade-in-transition" : "hidden"}`} ref={refElement_1} href="https://www.linkedin.com/in/kareemelewa/" target="_blank" rel="noreferrer">
        <p></p>
      </a>
      <a className={`${'icon-github'} ${visibleElement_2 ? "fade-in-transition" : "hidden"}`} ref={refElement_2} href="https://github.com/kareemxyz" target="_blank" rel="noreferrer">
        <p></p>
      </a>
      <a className={`${'icon-instagram'} ${visibleElement_3 ? "fade-in-transition" : "hidden"}`} ref={refElement_3} href="https://www.instagram.com/kareem.elewa/" target="_blank" rel="noreferrer">
        <p></p>
      </a>
    </div>
  )
}
