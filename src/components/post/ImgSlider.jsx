import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Image } from "antd";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
const ImgSlider = ({ imgList }) => {
  if (imgList.length === 0) {
    return <></>;
  }
  return (
    <Swiper
      navigation={true}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {imgList.map((imgName, i) => {
        return (
          <SwiperSlide key={imgName}>
            <Image alt={i} src={`/static/${imgName}`} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImgSlider;
