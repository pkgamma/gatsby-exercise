import React from "react"
import containerStyles from "./layout.module.css"
import { Link, graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/react"

import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `0.5rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className={containerStyles.container}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
      <div className={containerStyles.footer}>
        <p>Copyright no one really I followed the tutorial</p>
      </div>
    </div>
  )
}
