import { Modal } from "antd";
import React, { useRef } from "react";
import "../../styles/postViewStyle.css";
import ImgSlider from "../post/ImgSlider";

const PostView = ({ dialogRef, postInfo }) => {
  const handleCloseModal = () => {
    dialogRef.current.close();
  };

  return (
    <div>
      <dialog ref={dialogRef}>
        <div className="postViewContainer">
          <div>asdfsdafasfdsafd</div>
          <div>asddss</div>
          <ImgSlider imgList={postInfo.imgName} />
        </div>
      </dialog>
    </div>
  );
};

export default PostView;
