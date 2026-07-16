import React, {useState} from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Winners.module.scss";
import Title from "@/components/title/Title";
import {winners} from "@/constants/copyright";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import Button from "@/components/button/Button";
import Carousel from "@/components/baseComponents/gui/carousel/Carousel";
import Winner from "@/components/winner/Winner";
import {EffectCoverflow, Pagination} from "swiper/modules";
import Modal from "@/components/modal/Modal";

export default function Winners({className, children}) {
  const settingsSwiper = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: -180,
    coverflowEffect: {
      scale: 0.3,
      rotate: 0,
      stretch: -30,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: true,
    modules: [EffectCoverflow, Pagination],
    navigation: {
      nextEl: "#swiper-right",
      prevEl: "#swiper-left",
    },
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <section className={classNames(styles.winners, className)}>
      <div className={styles.winners__header}>
        <Title color="red">{winners.title}</Title>
        <a className={styles.winners__link} href={winners.link.href}>
          {winners.link.text}
        </a>
      </div>

      <div className={styles.winners__content}>
        <div className={styles.winners__imgBlock}>
          <Picture
            imgAttr={{...winners.imgMen.img, className: styles.winners__img}}
            sourceData={winners.imgMen.sourceData}
          />
        </div>
        <div className={styles.winners__info}>
          <div className={styles.winners__carousel}>
            <div id="swiper-left" className={classNames(styles.winners__arrow, styles.winners__arrow_left)}>
              <Picture imgAttr={{...winners.arrowIcon, className: styles.winners__arrowImg}} />
            </div>
            <Carousel itemsData={winners.winners} item={Winner} settings={settingsSwiper} />
            <div id="swiper-right" className={classNames(styles.winners__arrow, styles.winners__arrow_right)}>
              <Picture imgAttr={{...winners.arrowIcon, className: styles.winners__arrowImg}} />
            </div>
          </div>

          {/*</div>*/}
          <Button>{winners.button.text}</Button>
        </div>
      </div>

      <Modal />
    </section>
  );
}

Winners.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
