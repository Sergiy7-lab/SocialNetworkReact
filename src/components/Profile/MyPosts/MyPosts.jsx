import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

let addNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.new__posts}>
        <Field
          name="newPostText"
          component={Textarea}
          placeholder={"Post text"}
          validate={[required, maxLength10]}
        />

        <div>
          <button>Add post</button>
        </div>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(
  addNewPostForm
);

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post message={p.message} like={p.like} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.posts}>
      <div className={s.my__posts}>My posts</div>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
