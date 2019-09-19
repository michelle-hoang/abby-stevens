import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#0d47a1`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `flex-start`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.75rem`,
      }}
    >
      <h5 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#fffff8`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
      </h5>
      <h5 style={{ paddingLeft: `1.5rem`, margin: 0 }}>
        <Link
          to="/research"
          style={{
            color: `#fffff8`,
            textDecoration: `none`,
          }}
        >
          Research
        </Link>
      </h5>
      <h5 style={{ paddingLeft: `1.5rem`, margin: 0 }}>
        <Link
          to="/teaching"
          style={{
            color: `#fffff8`,
            textDecoration: `none`,
          }}
        >
          Teaching
        </Link>
      </h5>
      <h5 style={{ paddingLeft: `1.5rem`, margin: 0 }}>
        <Link
          to="/contact-me"
          style={{
            color: `#fffff8`,
            textDecoration: `none`,
          }}
        >
          Contact
        </Link>
      </h5>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
