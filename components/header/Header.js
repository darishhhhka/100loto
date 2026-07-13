import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Header.module.scss";
import {header} from "@/constants/copyright";

export default function Header({className, children}) {
  return (
    <div className={classNames(styles.header, className)}>
      <img className={styles.header__logo} {...header.logo} />
      <nav className={styles.header__navbar}>
        {header.menuList.map((link, index) => (
          <a className={styles.header__link} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <img className={styles.header__img} {...header.img} />
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
