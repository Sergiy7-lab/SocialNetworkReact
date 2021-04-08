import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://html5css.ru/howto/img_avatar.png"></img>
      {props.message}
      <div>
        <span>Like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
