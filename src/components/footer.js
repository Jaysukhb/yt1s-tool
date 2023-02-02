import * as React from "react"
import { Link } from "gatsby-plugin-intl"
import { footerList } from "../data"
import * as styles from "../styles/footer.module.css"

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.menuList}>
      {footerList.map((link, i) => (
        <Link
          key={i}
          className={styles.menuLink}
          to={link.url}>
          {link.text}
        </Link>
      ))}
    </div>
    <p className={styles.copyright}>© 2020 yt1s.com </p>
  </div>
);

export default Footer
