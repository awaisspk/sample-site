import styles from "./carousel.module.css";
import Slider from "react-slick";
import { Card } from "@components/Card";
import { categories } from "@src/data/categories";

export const Categories = () => {
  const settings = {
    arrows: false,
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
        <Slider {...settings} className={styles.slider}>
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
