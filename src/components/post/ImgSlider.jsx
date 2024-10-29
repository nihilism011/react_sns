import React, { useEffect, useRef, useState } from "react";
import { Carousel, Image } from "antd";

const ImgSlider = ({ imgList }) => {
  const [imgLists, setImgLists] = useState(imgList);
  if (imgLists.length === 0) {
    return null;
  }
  const imageStyle = {
    width: "100%",
    height: "400px", // 이미지 높이를 400px로 키움
    objectFit: "cover",
  };
  const slideStyle = {
    textAlign: "center",
    lineHeight: "400px",
    background: "#f0f0f0",
  };
  return (
    <Carousel arrows infinite={false}>
      {imgLists.map((imgName, index) => (
        <div key={imgName} style={slideStyle}>
          <Image
            alt={`Slide ${index + 1}`}
            src={`/static/${imgName}`}
            style={imageStyle}
            preview={false}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImgSlider;
