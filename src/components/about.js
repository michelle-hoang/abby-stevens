import React from "react"
import Image from "./image"

export const About = () => {
  return (
    <div>
      <div>
        <h4>About Me</h4>
      </div>
      <div
        style={{
          alignSelf: `center`,
          maxWidth: `337px`,
          marginBottom: `1.45rem`,
        }}
      >
        <Image />
      </div>
      <p>
        I am a third-year graduate student in the Dept. of Statistics at
        UChicago.
      </p>
    </div>
  )
}

export default About
