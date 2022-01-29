import styles from "./carousel.module.css";
import Slider from "react-slick";
import { Card } from "@components/Card";
import { useRef } from "react";
import { IconBtn } from "@components/Button/icon-button";
import { categories } from "@src/data/categories";

export const Categories = () => {
  const slider1 = useRef<any>(null);

  const next = () => {
    slider1.current.slickNext();
  };

  const previous = () => {
    slider1.current.slickPrev();
  };

  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className={styles.container}>
        <Slider {...settings} ref={slider1} className={styles.slider}>
          {categories.map((data, i) => {
            return (
              <Card
                key={data.title + i}
                work={data.work}
                img={data.img}
                title={data.title}
                count={data.count}
                color={data.color}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
