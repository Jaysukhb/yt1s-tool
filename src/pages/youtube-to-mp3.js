import * as React from "react"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Converter from "../components/converter"
import Sections from "../components/sections"
import * as styles from "../styles/index.module.css"

const Mp3 = () => {
  const intl = useIntl();

  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "mp3-seo-title" })}/>
      <div className={styles.mainWrapper}>
        <h1><FormattedMessage id="mp3-title"/></h1>
        <p><FormattedMessage id="mp3-desc"/></p>
        <Converter/>
      </div>
      <Sections/>
    </Layout>
  )
};

export default Mp3
