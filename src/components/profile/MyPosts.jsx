import { Flex } from "antd";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { loginUserId } from "../../lib/atom";
import { getAxios } from "../../lib/restAxios";

import PhotoPost from "../post/PhotoPost";

const MyPosts = () => {
  const user = useRecoilValue(loginUserId);
  const [post, setPost] = useState([]);
  useEffect(() => {
    getAxios("/post/posts", { userId: user.id }).then((data) => {
      setPost(data);
    });
  }, []);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Flex>
        {post.map((item, index) => (
          <PhotoPost key={index} postInfo={item} />
        ))}
      </Flex>
    </div>
  );
};

export default MyPosts;
