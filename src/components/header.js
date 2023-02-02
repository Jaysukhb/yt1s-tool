import * as React from "react"
import {useState} from "react"
import {changeLocale, IntlContextConsumer, Link} from "gatsby-plugin-intl"
import Navigation from "./navigation"
import * as styles from "../styles/header.module.css"
import {languageName} from "../data";

const Header = () => {
  const [openLang, setOpenLang] = useState(false);
  const [languages, setLanguages] = useState();

  const handleLanguageChange = (item) => {
    const array = Object.entries(languageName);
    const filtered = array.filter(([key]) => key === item);
    const filteredArray = Object.values(filtered);
    setLanguages(filteredArray[0][1])
  };

  return (
    <header>
      <div className={styles.mainHeader}>
        <Link
          className={styles.logo} to="/">
          <img
            alt="logo"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='37' height='28' viewBox='0 0 37 28' fill='none' alt='YT1S'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M0.413567 5.80249C0.646742 2.9375 2.94402 0.705376 5.81232 0.517162C9.497 0.275378 14.5363 0 18.375 0C22.2137 0 27.253 0.275378 30.9377 0.517162C33.806 0.705375 36.1033 2.9375 36.3364 5.80249C36.5469 8.38873 36.75 11.5252 36.75 14C36.75 16.4748 36.5469 19.6113 36.3364 22.1975C36.1033 25.0625 33.806 27.2946 30.9377 27.4828C27.253 27.7246 22.2137 28 18.375 28C14.5363 28 9.497 27.7246 5.81232 27.4828C2.94402 27.2946 0.646742 25.0625 0.413567 22.1975C0.203079 19.6113 0 16.4748 0 14C0 11.5252 0.203079 8.38873 0.413567 5.80249Z' fill='%23FF0000'%3E%3C/path%3E%3Cpath d='M11.1223 8.18535L8 11.1334L18 21L28 11.1334L24.8777 8.18535L20.1879 12.8132V0H15.8121V12.8132L11.1223 8.18535Z' fill='white'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='36.75' height='28' fill='white'%3E%3C/rect%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
          />
          <span className={styles.LinkTitle}>YT1s.com</span>
        </Link>
        <div className={styles.language}>
          <div onClick={() => setOpenLang(!openLang)}>
            <span>{languages}</span>
            <img
              alt="arrow"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='8' viewBox='0 0 16 8' fill='none'%3E%3Cpath d='M15.0449 0.291415C14.8464 0.0929657 14.5239 0.0929657 14.3255 0.291415L7.9999 6.6294L1.66192 0.291415C1.46347 0.0929657 1.14099 0.0929657 0.942538 0.291415C0.744089 0.489865 0.744089 0.812346 0.942538 1.0108L7.62781 7.69606C7.72703 7.79529 7.85107 7.8449 7.9875 7.8449C8.11153 7.8449 8.24796 7.79529 8.34719 7.69606L15.0325 1.0108C15.2433 0.812346 15.2433 0.489865 15.0449 0.291415Z' fill='%23333333'%3E%3C/path%3E%3C/svg%3E"
            />
          </div>
          <div>
            <IntlContextConsumer>
              {({languages, language: currentLocale}) => (
                <div onChange={handleLanguageChange(currentLocale)}>
                  {openLang &&
                  <ul className={styles.subMenuLang}>
                    {languages.map(language => (
                      <li className={styles.list}>
                        <a className={styles.languageName}
                           key={language}
                           onClick={() => changeLocale(language)}>
                          {languageName[language]}
                        </a>
                      </li>
                    ))}
                  </ul>
                  }
                </div>
              )}
            </IntlContextConsumer>
          </div>
        </div>
      </div>
      <Navigation/>
    </header>
  )
};

export default Header
