import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Teaching = () => (
  <Layout>
    <SEO title="Teaching" />
    <h1>Teaching</h1>
    <p>
      STAT/CMSC 119 <i>Introduction to Data Science II</i>.
      <br />
      Winter 2019; TA.
    </p>
    <p>
      STAT/CMSC 118 <i>Introduction to Data Science I</i>.
      <br />
      Fall 2018; TA
    </p>
    <p>
      STAT 234 <i>Statistical Models and Methods</i>.
      <br />
      Winter, Spring 2018; TA/ Head TA
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Teaching
