import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./MoreWinners.module.scss";
import {moreWinners} from "@/constants/copyright";
import Title from "@/components/title/Title";
import Button from "@/components/button/Button";
import Ntv from "@/components/ntv/Ntv";
import CustomButton from "@/components/customButton/CustomButton";

export default function MoreWinners({className, children}) {
  return (
    <div className={classNames(styles.moreWinners, className)}>
      <Title className={styles.moreWinners__title} color="white">
        {moreWinners.title}
      </Title>
      <div className={styles.moreWinners__content}>
        <CustomButton className={styles.moreWinners__btn}>{moreWinners.button.text}</CustomButton>
        <Ntv className={styles.moreWinners__ntv} />
      </div>
    </div>
  );
}

MoreWinners.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
