import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Teaching = () => (
  <Layout>
    <SEO title="Teaching" />
    <h1>Teaching</h1>
    <p>
      Course code. <i>Course name</i>.
      <br />
      Semester taught. Role.
    </p>
    <p>
      Course code. <i>Course name</i>.
      <br />
      Semester taught. Role.
    </p>
    <p>
      Course code. <i>Course name</i>.
      <br />
      Semester taught. Role.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Teaching
