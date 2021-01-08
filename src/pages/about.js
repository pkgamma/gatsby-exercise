import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Link to="/contact/">Contact</Link>
      <h1>About Gatsby</h1>
      <Header headerText="Philip"/>
      <p>Such wow. Very React.</p>
    </div>
  )
}