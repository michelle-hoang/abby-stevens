import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Research = () => (
  <Layout>
    <SEO title="Research" />
    <h1>Research Interests:</h1>
    <p>My research interests are ... </p>
    <h4>Publications</h4>
    <p>
      Author, Author, Author, Author.
      <br />
      <i>Really long title name</i>.
      <br />
      Journal. Date.
      <br />
    </p>
    <p>
      Author, Author, Author, Author.
      <br />
      <i>Really long title name</i>.
      <br />
      Journal. Date.
      <br />
    </p>
    <p>
      Author, Author, Author, Author.
      <br />
      <i>Really long title name</i>.
      <br />
      Journal. Date.
      <br />
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Research
