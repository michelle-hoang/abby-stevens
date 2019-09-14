import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import About from "../components/about"
import Contact from "../components/contact"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Abby Stevens</h1>
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
