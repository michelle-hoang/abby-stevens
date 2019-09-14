import React from "react"
import Image from "./image"

export const About = () => {
  return (
    <div>
      <div>
        <h4>About Me</h4>
      </div>
      <div className="about">
        <div
          className="pic"
          style={{
            alignSelf: `center`,
            maxWidth: `337px`,
            marginBottom: `1.45rem`,
          }}
        >
          <Image />
        </div>
        <div className="info">
          <p>
            I am a third-year graduate student in the Dept. of Statistics at
            UChicago.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
