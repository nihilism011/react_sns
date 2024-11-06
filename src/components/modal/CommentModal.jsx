import { Button, Divider, Input, message, Modal, Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "../../styles/commentModalStyle.css";
import { getAxios, postAxios } from "../../lib/restAxios";
import ProfileWho from "../post/ProfileWho";

const CommentModal = ({ postId, state }) => {
  const [list, setList] = useState(null);
  const [renderKey, setRenderKey] = useState(0);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const url = "/post/comment";
    getAxios(url, { postId: postId }).then((data) => {
      setList(data);
    });
  }, [postId, renderKey]);

  const addComment = () => {
    const content = inputValue.trim();
    if (content.length < 1) {
      message.error("한글자 이상 입력해야합니다.");
      return;
    }
    if (content.length > 100) {
      message.error("100글자 이하 입력 가능합니다.");
      return;
    }
    postAxios("/post/comment", {
      postId: postId,
      content: inputValue,
    }).then((status) => {
      if (status) {
        setInputValue("");
        setRenderKey(renderKey + 1);
        message.success("댓글이 등록되었습니다.");
      } else {
        message.error("뭔가 잘못되었습니다.");
      }
    });
  };
  return (
    <Modal
      title="댓글"
      open={state[0]}
      onOk={() => {
        state[1](false);
        setInputValue("");
      }}
      onCancel={() => {
        state[1](false);
        setInputValue("");
      }}
      footer={null}
      classNames={"commentModal"}
    >
      {list === null ? (
        <Spin />
      ) : Array.isArray(list) && list.length === 0 ? (
        "댓글이 없습니다."
      ) : Array.isArray(list) ? (
        list.map((item, index) => (
          <div key={index} className="commentBox">
            <div className="profileImg">
              <ProfileWho userId={item.userId}></ProfileWho>
            </div>
            <div className="commentContent">{item.content}</div>
          </div>
        ))
      ) : (
        "댓글 데이터를 불러오는 데 문제가 발생했습니다."
      )}
      <Divider style={{ margin: "8px 0" }} />
      <div className="inputBox">
        <Input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onPressEnter={addComment}
        ></Input>
        <Button type="default" onClick={addComment}>
          댓글 작성
        </Button>
      </div>
    </Modal>
  );
};

export default CommentModal;
