import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
  return (
    <div>
      <h1>{props.headerText}</h1>
      {/* <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link> */}
    </div>
  )
}