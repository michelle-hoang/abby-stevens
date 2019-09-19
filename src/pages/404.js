import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Error from "../components/error"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="main">
      <div className="container">
        <div>
          <h2>404: NOT FOUND</h2>
          <div style={{ width: `25%`, marginBottom: `2rem` }}>
            <Error />
          </div>
          <p>Sorry, that route doesn&#39;t exist! </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
