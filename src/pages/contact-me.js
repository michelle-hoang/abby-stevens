import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import { BackButton } from "../components/back"

const ContactMe = () => (
  <Layout>
    <SEO title="Contact Me" />
    <div className="main">
      <div className="container">
        <Contact />
      </div>
    </div>
    <BackButton />
  </Layout>
)

export default ContactMe
