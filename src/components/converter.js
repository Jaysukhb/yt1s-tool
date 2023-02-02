import * as React from "react"
import { useState } from "react"
import { FormattedMessage, useIntl, navigate } from "gatsby-plugin-intl"
import * as styles from "../styles/converter.module.css"

const Converter = () => {
  const [inputValue, setInputValue] = useState();
  const intl = useIntl();

  const isYtUrl = (url) => {
    const ytRegex = new RegExp(
      /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\\-]+\?v=|embed\/|v\/)?)([\w\\-]+)(\S+)?$/g
    );
    return ytRegex.test(url)
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleClickEnter = (e) => {
    if (e.keyCode === 13) {
      if (isYtUrl(inputValue)) {
        navigate(`/download`, { state: { url: inputValue } })
      } else {
        navigate(`/search`, { state: { url: inputValue } })
      }
    }
  };

  const handleClickConvert = () => {
    if (isYtUrl(inputValue)) {
      navigate(`/download`, { state: { url: inputValue } })
    } else {
      navigate(`/search`, { state: { url: inputValue } })
    }
  };

  return (
    <>
      <div className={styles.converter}>
        <input
          type="search"
          className={styles.search}
          placeholder={intl.formatMessage({ id: "search-placeholder" })}
          onChange={handleInputChange}
          onKeyDown={handleClickEnter}
        />
        <button
          className={styles.button}
          type="button"
          onClick={handleClickConvert}
        >
          <FormattedMessage id="convert-btn"/>
        </button>
      </div>
    </>
  )
};

export default Converter
