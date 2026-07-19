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
import {EffectCoverflow, Navigation, Pagination} from "swiper/modules";
import Modal from "@/components/modal/Modal";
import CustomButton from "@/components/customButton/CustomButton";

export default function Winners({className, children}) {
  const settingsSwiper = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "1",
    coverflowEffect: {
      rotate: 0,
      stretch: 150,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 90,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        },
      },
    },
    navigation: {
      nextEl: "#swiper-right",
      prevEl: "#swiper-left",
    },
    modules: [EffectCoverflow, Navigation],
    className: styles.winners__swiper,
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
          <div id="swiper-left" className={classNames(styles.winners__arrow, styles.winners__arrow_left)}>
            <Picture imgAttr={{...winners.arrowIcon, className: styles.winners__arrowImg}} />
          </div>
          <div className={styles.winners__carouselWrap}>
            <Carousel settings={settingsSwiper} item={Winner} itemsData={winners.winners} />
          </div>
          <div id="swiper-right" className={classNames(styles.winners__arrow, styles.winners__arrow_right)}>
            <Picture imgAttr={{...winners.arrowIcon, className: styles.winners__arrowImg}} />
          </div>
          <CustomButton>
            <a className={styles.winners__btnLink} href={winners.button.href}>
              {winners.button.text}
            </a>
          </CustomButton>
        </div>
      </div>
    </section>
  );
}

Winners.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
