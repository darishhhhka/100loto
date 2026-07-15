import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Winners.module.scss";
import Title from "@/components/title/Title";
import {winners} from "@/constants/copyright";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import Button from "@/components/button/Button";

export default function Winners({className, children}) {
  return (
    <section className={classNames(styles.winners, className)}>
      <Title>{winners.title}</Title>
      <a href={winners.link.href}>{winners.link.text}</a>
      <div className={styles.winners__content}>
        <div className={styles.winners__imgBlock}>
          <Picture imgAttr={winners.imgMen.img} sourceData={winners.imgMen.sourceData} />
        </div>
        <div className={styles.winners__info}>
          <div className={styles.winners__caurosel}></div>
          <Button>{winners.button.text}</Button>
        </div>
      </div>
    </section>
  );
}

Winners.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
