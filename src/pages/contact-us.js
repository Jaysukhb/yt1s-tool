import React from "react"
import {injectIntl} from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactUs = ({intl}) => (
  <Layout>
    <Seo lang={intl.locale} title={`${intl.formatMessage({id: "title"})}`}/>
    <h1>ContactUs Page</h1>
  </Layout>
);

export default injectIntl(ContactUs)