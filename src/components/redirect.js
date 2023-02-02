import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Seo from "../components/seo"

const Redirect = ({ intl }) => {
  return <Seo title={`${intl.formatMessage({ id: "title" })}`} />
};

export default injectIntl(Redirect)