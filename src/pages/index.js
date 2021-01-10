import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home({data}) {
  // console.log(data)
  return (
    <Layout>
      <div>
        <Header headerText="Home" />
        <p>This is my first Gatsby site!</p>
        <h2>Some posts:</h2>
        <table>
          <tbody>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <tr key={node.id}>
                <td>{node.frontmatter.title}</td>
                <td>{node.frontmatter.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query{
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date
            title
          }
        }
      }
      totalCount
    }
  }
  
  
`
