import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Winner.module.scss";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import {baseConsumers} from "@PS/core";

export default function Winner({className, name, prize, img, isPrev, isActive, isNext, srcVideo}) {
  const [firstName, lastName] = name.split(" ");
  return (
    <div
      className={classNames(
        styles.winner,
        isPrev && styles.winner_prev,
        isNext && styles.winner_next,
        isActive && styles.winner_active,
        className,
      )}
      onClick={() => baseConsumers.modalOpen({type: "interview", props: {srcVideo}})}
    >
      <div className={styles.winner__imgWrap}>
        {isActive && (
          <div className={styles.winner__play}>
            <Picture imgAttr={{src: "/images/winners/play.svg", className: styles.winner__playImg}} />
            <a href="">Смотреть интервью</a>
          </div>
        )}
        <Picture imgAttr={{...img, className: styles.winner__img}} />
      </div>
      <div>
        <p className={styles.winner__name}>
          <span>{firstName}</span>
          <span>{lastName}</span>
        </p>
        <span className={styles.winner__prize}>{prize}</span>
      </div>
    </div>
  );
}

Winner.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  prize: PropTypes.string,
  isPrev: PropTypes.bool,
  isNext: PropTypes.bool,
};
