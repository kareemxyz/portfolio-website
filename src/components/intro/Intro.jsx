import "./intro.scss"

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="wrapper">
        <p className="landing-text">HELLO WORLD! I'M</p>
        <h1 className="landing-name">KAREEM ELEWA</h1>
        <a className="scroll-down-wrapper" href="#about">
          <div className="scroll-down"></div>
        </a>
      </div>
    </div>
  )
}
