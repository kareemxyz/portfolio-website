import { useInView } from "react-intersection-observer";

import "./contact.scss";

export default function About() {
  const { ref: refElement_1, inView: visibleElement_1 } = useInView({ triggerOnce: true, threshold : 0.1});
  const { ref: refElement_2, inView: visibleElement_2 } = useInView({ triggerOnce: true, threshold : 0.1, delay: 200 });
  return (
    <div className="contact" id="contact">
      <div className={`${'contact-image'} ${visibleElement_1 ? "fadeIn" : "hidden"}`} ref={refElement_1}>
        <img src="assets/Kareem_2.png" alt="Kareem" />
      </div>
      <div className={`${'contact-body'} ${visibleElement_2 ? "fadeIn" : "hidden"}`} ref={refElement_2}>
        <h1 className="bold-text">CONTACT</h1>
        <p className="contact-text">Email: <a className="contact-email" href="mailto:kareem.elew@gmail.com">kareem.elew@gmail.com</a></p>
        <form action="https://formspree.io/f/xvolnwob" method="POST">
          <input className="contact-interface" type="email" name="email" placeholder="Your Email" required="true"/>
          <textarea className="contact-interface" name="message" placeholder="Message" required="true"></textarea>
          <button className="contact-interface submit-button" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
