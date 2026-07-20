import React, {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./CustomParallax.module.scss";

export default function CustomParallax({className, children}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMove = e => {
      setX(state => (e.clientX / window.innerWidth) * 70);
      setY(state => (e.clientY / window.innerHeight) * 70);
    };
    window.addEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className={classNames(styles.customParallax, className)} style={{transform: `translate(${x}px,${y}px)`}}>
      {children}
    </div>
  );
}

CustomParallax.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
