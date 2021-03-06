import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>
        Contact us via{" "}
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
      </h1>
    </Layout>
  )
}

export default ContactPage
