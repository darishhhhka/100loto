import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Security.module.scss";
import Title from "@/components/title/Title";
import {security} from "@/constants/copyright";
import SecurityCard from "@/components/securityCard/SecurityCard";
import Button from "@/components/button/Button";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import Carousel from "@/components/baseComponents/gui/carousel/Carousel";
import {EffectCoverflow, Pagination} from "swiper/modules";

export default function Security({className, children}) {
  const settingsSwiper = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: -50,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: true,
    modules: [EffectCoverflow, Pagination],
  };
  return (
    <section id="security" className={classNames(styles.security, className)}>
      <Title className={styles.security__title} color="white">
        {security.title}
      </Title>
      <div className={styles.security__content}>
        <Carousel
          className={classNames(styles.security__list, styles.security__list_mobile)}
          itemsData={security.card}
          item={SecurityCard}
          settings={settingsSwiper}
        />

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
          <Button>Купить билет</Button>
        </div>
      </div>
    </section>
  );
}

Security.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
