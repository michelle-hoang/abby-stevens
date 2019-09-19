import React from "react"
import { Link } from "gatsby"
import { BackButton } from "../components/back"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Teaching = () => (
  <Layout>
    <SEO title="Teaching" />
    <div className="main">
      <div className="container">
        <h2>Teaching</h2>
        <p>
          STAT/CMSC 119: <i>Introduction to Data Science II</i>.
          <br />
          Winter 2019; TA.
        </p>
        <p>
          STAT/CMSC 118: <i>Introduction to Data Science I</i>.
          <br />
          Fall 2018; TA
        </p>
        <p>
          STAT 234: <i>Statistical Models and Methods</i>.
          <br />
          Winter, Spring 2018; TA/ Head TA
        </p>
      </div>{" "}
    </div>
    <BackButton />
  </Layout>
)

export default Teaching
