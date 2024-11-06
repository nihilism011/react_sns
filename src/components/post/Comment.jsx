import React, { useEffect, useState } from "react";
import { getAxios, postAxios } from "../../lib/restAxios";
import ProfileWho from "./ProfileWho";
import { Button, Input } from "antd";
const Comment = ({ postInfo, setCommentCnt }) => {
  const [inputS, setInputS] = useState("");
  const [comments, setComments] = useState([]);
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    getAxios("/post/comment", { postId: postInfo.postId }).then((data) => {
      setComments(data);
    });
  }, [renderKey, postInfo]);
  const addComment = () => {
    postAxios("/post/comment", {
      postId: postInfo.postId,
      content: inputS,
    }).then((status) => {
      if (status) {
        setInputS("");
        setRenderKey(renderKey + 1);
        setCommentCnt((prev) => prev + 1);
      }
    });
  };
  return (
    <div>
      {comments && comments.length === 0 ? (
        <div>댓글이 없습니다.</div>
      ) : (
        comments.map((comment, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              width: "100%",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "30%",
                alignContent: "center",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <ProfileWho userId={comment.userId}></ProfileWho>
            </div>
            <div
              style={{
                display: "flex",
                width: "70%",
                alignContent: "center",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              {comment.content}
            </div>
          </div>
        ))
      )}
      <div>
        <Input
          value={inputS}
          onChange={(e) => {
            setInputS(e.target.value);
          }}
          onPressEnter={addComment}
        />
        <Button onClick={addComment}>{"댓글쓰기"}</Button>
      </div>
    </div>
  );
};

export default Comment;
