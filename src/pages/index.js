import * as React from "react"
import {FormattedMessage, useIntl} from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Converter from "../components/converter"
import Sections from "../components/sections"
import * as styles from "../styles/index.module.css"

const IndexPage = () => {
  const intl = useIntl();

  return (
    <Layout>
      <Seo
        lang={intl.locale}
        title={intl.formatMessage({id: "downloader-seo-title"})}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <div className={styles.mainWrapper}>
        <h1><FormattedMessage id="downloader-title"/></h1>
        <p><FormattedMessage id="downloader-desc"/></p>
        <Converter/>
      </div>
      <Sections/>
    </Layout>
  )
};

export default IndexPage