import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Security.module.scss";
import Title from "@/components/title/Title";
import {security, winners} from "@/constants/copyright";
import SecurityCard from "@/components/securityCard/SecurityCard";
import Button from "@/components/button/Button";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import Carousel from "@/components/baseComponents/gui/carousel/Carousel";
import {EffectCoverflow, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Winner from "@/components/winner/Winner";
import CustomButton from "@/components/customButton/CustomButton";

export default function Security({className, children}) {
  const settingsSwiper = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      scale: 0.8,
      rotate: 0,
      stretch: 250,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    },
    modules: [EffectCoverflow],
    className: styles.security__swiper,
  };
  return (
    <section id="security" className={classNames(styles.security, className)}>
      <Title className={styles.security__title} color="white">
        {security.title}
      </Title>
      <div className={styles.security__content}>
        <div className={styles.security__carouselWrap}>
          <Carousel
            className={styles.security__carousel_none}
            settings={settingsSwiper}
            item={SecurityCard}
            itemsData={security.card}
          />
        </div>
        <div className={classNames(styles.security__list, styles.security__list_desktop)}>
          {security.card.map((card, index) => (
            <SecurityCard key={`security-card-${index}`} {...card}>
              {card.images &&
                card.images.map((img, index) => <Picture imgAttr={img} key={`security-card-img-${index}`} />)}
            </SecurityCard>
          ))}
        </div>
        <div className={styles.security__right}>
          <div>
            <img className={styles.security__img} {...security.video} />
          </div>
          <CustomButton>
            <a className={styles.security__btnLink} href={security.button.href}>
              {security.button.text}
            </a>
          </CustomButton>
        </div>
      </div>
    </section>
  );
}

Security.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
