import React from "react"
import {injectIntl} from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Privacy = ({intl}) => (
  <Layout>
    <Seo lang={intl.locale} title={`${intl.formatMessage({id: "title"})}`}/>
    <h1>Privacy Page</h1>
  </Layout>
);

export default injectIntl(Privacy)