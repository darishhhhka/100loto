import React from "react";
import classNames from "classnames";
import styles from "./Footer.module.scss";
import {footer} from "@/constants/copyright";
import Picture from "@/components/baseComponents/gui/picture/Picture";

export default function Footer() {
  return (
    <footer className={classNames(styles.footer)}>
      <div className={styles.footer__leftColumn}>
        <div className={styles.footer__logo}>
          <Picture imgAttr={footer.logo} />
        </div>
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
            <div key={`footer-socia-media-${index}`} className={styles.footer__socialMedia}>
              <Picture imgAttr={media} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer__rightColumn}>
        <div className={styles.footer__partnersBlock}>
          <div className={styles.footer__parntersImg}>
            {footer.partners.logo.map((img, index) => (
              <Picture key={`partners-logo-${index}`} imgAttr={img} />
            ))}
          </div>
          <p className={styles.footer__textWhite}>{footer.partners.organizators}</p>
        </div>
        <div className={styles.footer__partnersBlock}>
          <div>
            <Picture imgAttr={footer.partners.logoAssociations} />
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
}
