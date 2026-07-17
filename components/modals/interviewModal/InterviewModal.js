import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./InterviewModal.module.scss";
import CustomModal from "@/components/baseComponents/gui/customModal/CustomModal";
import {baseConsumers} from "@PS/core";

export default function InterviewModal({className, children, srcVideo}) {
  return (
    <CustomModal onClickOutside={() => baseConsumers.modalClose({type: "interview"})}>
      <div className={classNames(styles.interviewModal, className)}>
        <iframe className={styles.interviewModal__iframe} src={srcVideo} frameborder="0"></iframe>
      </div>
    </CustomModal>
  );
}

InterviewModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
