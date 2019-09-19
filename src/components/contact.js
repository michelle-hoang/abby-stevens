import React from "react"

export const Contact = () => {
  return (
    <div>
      <div>
        <h2 style={{ fontFamily: "Cooper" }}>Contact Info:</h2>
        <p>
          University of Chicago <br />
          Department of Statistics <br />
          5747 S. Ellis Avenue <br />
          Jones 203/204
          <br />
          Chicago, IL, 60615 <br />
          Email:{" "}
          <a
            href={`mailto:  abbystevens@uchicago.edu`}
            target="_blank"
            style={{ textDecoration: `underline` }}
          >
            abbystevens@uchicago.edu
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact
