import { Flex } from "antd";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { loginUserId } from "../../lib/atom";
import { getAxios } from "../../lib/restAxios";
import "../../styles/myPosts.css";
import { LikeOutlined } from "@ant-design/icons";

const MyPosts = () => {
  const user = useRecoilValue(loginUserId);
  const [post, setPost] = useState([]);
  useEffect(() => {
    getAxios("/post/posts", { userId: user.id }).then((data) => {
      setPost(data);
    });
  }, []);
  const postView = (postId) => {
    console.log("임시", postId);
    console.log(post);
  };
  console.log(post);
  return (
    <div className="myPostPhotos">
      <Flex>
        {post.map((item, index) => (
          <div key={index} className="myPostsImgBox">
            <img
              className="myPostsImg"
              alt={index}
              src={`/static/${item.imageName}`}
            />
            <div
              className="likeCntBox"
              onClick={() => {
                postView(item.postId);
              }}
            >
              <LikeOutlined />
            </div>
          </div>
        ))}
      </Flex>
    </div>
  );
};

export default MyPosts;
