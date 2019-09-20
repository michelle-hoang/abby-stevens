import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BackIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "back-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 95) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export const BackButton = () => {
  return (
    <Link className="backButton" to="/">
      <div className="backButtonContainer">
        <div style={{ width: `25px` }}>
          <BackIcon />
        </div>
        <div
          style={{
            marginLeft: `0.25rem`,
            color: `#FFFFF8`,
            textDecorationColor: `#FFFFF8`,
          }}
        >
          {" "}
          Go back to home
        </div>
      </div>
    </Link>
  )
}
