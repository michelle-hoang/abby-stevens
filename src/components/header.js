import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#1f3b66`,
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
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h5 style={{ paddingLeft: `0.5rem`, margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
      </h5>
      <h5 style={{ paddingLeft: `1rem`, margin: 0 }}>
        <Link
          to="/research"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Research
        </Link>
      </h5>
      <h5 style={{ paddingLeft: `1rem`, margin: 0 }}>
        <Link
          to="/teaching"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Teaching
        </Link>
      </h5>
      <h5 style={{ paddingLeft: `1rem`, margin: 0 }}>
        <Link
          to="/cv"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          CV
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
