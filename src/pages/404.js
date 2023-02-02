import React from "react"
import {injectIntl} from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({intl}) => (
  <Layout>
    <Seo lang={intl.locale} title={`404: ${intl.formatMessage({id: "title"})}`}/>
    <h1>404: Page Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default injectIntl(NotFoundPage)