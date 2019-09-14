import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Research = () => (
  <Layout>
    <SEO title="Research" />
    <h1>Research Interests:</h1>
    <p>My research interests are ... </p>
    <h4>Publications & Presentations</h4>

    <p>
      P. Saleiro, B. Kuester, L. Hinkson, J. London, A. Stevens, A. Anisfeld, K.
      Rodolfa, and R. Ghani. "Aequitas: A Bias and Fairness Audit Toolkit,"
      <i>eprint arXiv:1811.05577</i>, 2018.
      <br />
    </p>
    <p>
      “Leveraging large ensemble climate simulations and graph-guided
      regularization for improving seasonal hydroclimatic forecasting,”
      <i>Large Ensembles Workshop</i>, Boulder, CO, July 2019. <i>(poster)</i>
    </p>
    <p>
      “Leveraging large ensemble climate simulations and graph-guided
      regularization for improving seasonal hydroclimatic forecasting,”{" "}
      <i>Midwest Machine Learning Symposium</i>, Madison, WI, June 2019.
      (poster)
    </p>
    <p>
      “Graph Total Variation for Seasonal Forecasting,”{" "}
      <i>Computational and Applied Mathematics Student Seminar</i>, Chicago, IL,
      April 2019.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Research
