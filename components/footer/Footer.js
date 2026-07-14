import React from "react";
import classNames from "classnames";
import styles from "./Footer.module.scss";
import {footer} from "@/constants/copyright";

export default function Footer() {
  return (
    <footer className={classNames(styles.footer)}>
      <div className={styles.footer__leftColumn}>
        <img className={styles.footer__logo} {...footer.logo} />
        <div className={styles.footer__copyright}>
          {footer.copyright.map((t, index) => (
            <p className={styles.footer__textGrey} key={`footer-copyright-${index}`}>
              {t}
            </p>
          ))}
        </div>
        <div className={styles.footer__line}></div>
        <div className={styles.footer__mediaList}>
          {footer.socialMedia.map((media, index) => (
            <div className={styles.footer__socialMedia}>
              <img {...media} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer__rightColumn}>
        <div className={styles.footer__partnersBlock}>
          <div className={styles.footer__parntersImg}>
            {footer.partners.logo.map((img, index) => (
              <img key={`partners-logo-${index}`} {...img} />
            ))}
          </div>
          <p className={styles.footer__textWhite}>{footer.partners.organizators}</p>
        </div>
        <div className={styles.footer__partnersBlock}>
          <div>
            <img {...footer.partners.logoAssociations} />
          </div>
          <div className={styles.footer__copyright}>
            <p className={styles.footer__textWhite}>{footer.partners.right}</p>
            {footer.partners.note.map((n, index) => (
              <p className={styles.footer__textGrey} key={`footer-note-${index}`}>
                {n}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );

  function lines(total) {
    const arr = [];
    for (let i = 0; i < total; i++) {
      arr.push(
        <div
          className={classNames(styles.footer__lineItem, [styles[`footer__lineItem_${i + 1}`]])}
          key={`footer-line-item-${i}`}
        >
          <div className={classNames(styles.footer__lineItemText)}>{line}</div>
          <div className={classNames(styles.footer__lineItemPoint)} />
        </div>,
      );
    }
    return arr;
  }
}
