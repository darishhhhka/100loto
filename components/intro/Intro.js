import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Intro.module.scss";
import {TypeAnimation} from "react-type-animation";
import CustomButton from "../customButton/CustomButton";
import PS from "@PS";
const {safeHTML, image} = PS.frontend;

export default function Intro({className, title, wordList, button}) {
  const sequence = [];
  wordList.forEach((word, index) => {
    sequence.push(word.text);
    sequence.push(1000);
  });

  return (
    <section className={classNames(styles.intro, className)}>
      <h2 className={classNames(styles.intro__title)}>{safeHTML(title)}</h2>
      <div className={classNames(styles.intro__list)}>
        <img src={image("intro/dec.svg")} className={classNames(styles.intro__listBorder)} />
        <div className={classNames(styles.intro__listBlock)}>
          <TypeAnimation sequence={sequence} wrapper="span" speed={50} repeat={Infinity} />
        </div>
      </div>
      <CustomButton {...button} />
    </section>
  );
}
Intro.propTypes = {
  className: PropTypes.string,
};
