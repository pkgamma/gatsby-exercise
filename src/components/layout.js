import React from "react"
import containerStyles from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={containerStyles.container}>
      <h3>Gatsby Site!</h3>
      {children}
    </div>
  )
}