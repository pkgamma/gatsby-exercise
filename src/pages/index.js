import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: 'purple' }}>
      <Header headerText="Homepage" />
      <p>This is my first Gatsby site!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
