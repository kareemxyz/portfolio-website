import React from 'react'
import "./topbar.scss"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <a href="#intro">HOME</a>
        <a href="#projects">PROJECTS</a>
        <a href="assets/KareemElewa_Resume.pdf" target="_blank">RESUME</a>
        <a href="#contact">CONTACT</a>
      </div>
    </div>
  )
}
