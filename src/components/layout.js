import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import Header from "./header"
import Footer from "./footer";
import "../styles/layout.css"

const Layout = ({ children, intl }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={intl.formatMessage({ id: "title" })} />
      <div className="layout">
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  )
};

export default injectIntl(Layout)