import React from "react"
import Layout from "../components/layout"

import "../index.css"
import SiteMetadata from "../components/site-metadata"

export default () => {
  return (
    <Layout>
      <SiteMetadata pathname="/" />
      <h2>This is the website</h2>
    </Layout>
  )
}
