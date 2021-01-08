import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import User from "../components/user"

// const User = props => (
//   <div className={styles.user}>
//     <img src={props.avatar} className={styles.avatar} alt="" />
//     <div className={styles.description}>
//       <h2 className={styles.username}>{props.username}</h2>
//       <p className={styles.excerpt}>{props.excerpt}</p>
//     </div>
//   </div>
// )

export default function About() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Header headerText="About" />
        <p>Such wow. Very React.</p>
        <User
          username="Jane Doe"
          avatar="https://d33wubrfki0l68.cloudfront.net/f889430202cebb38797416bf08da875a98ff4585/a607f/img/philip_kuo.jpg"
          excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User
          username="Bob Smith"
          avatar="https://d33wubrfki0l68.cloudfront.net/f889430202cebb38797416bf08da875a98ff4585/a607f/img/philip_kuo.jpg"
          excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
      </div>
    </Layout>
  )
}