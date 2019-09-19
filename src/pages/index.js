import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import About from "../components/about"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main">
      <div className="container">
        <h1
          style={{
            fontFamily: "Cooper",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <span className="highlight"> Abby Stevens </span>
        </h1>
        <About />
      </div>
    </div>
  </Layout>
)

export default IndexPage
