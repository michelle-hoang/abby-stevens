import React from "react"
import Image from "./image"

export const About = () => {
  return (
    <div className="about">
      <div
        className="pic"
        style={{
          alignSelf: `center`,
          maxWidth: `350px`,
          marginBottom: `1.45rem`,
        }}
        //this styling is applied, regardless of mobile or web
      >
        <Image />
      </div>
      <div className="info">
        <h4> About Me:</h4>
        <p>
          Hello! I am a third-year Ph.D candidate in the Dept. of Statistics at
          UChicago. I am currently conducting research under Dr. Rebecca
          Willett.
          <br /> <br />I can be reached at{" "}
          <a
            href={`mailto:  abbystevens@uchicago.edu`}
            target="_blank"
            style={{ textDecoration: `underline` }}
          >
            abbystevens@uchicago.edu
          </a>
        </p>
      </div>
    </div>
  )
}

export default About
