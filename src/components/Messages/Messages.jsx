import React from "react";
import s from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const Messages = (props) => {
  let state = props.messagePage;

  let dialogElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messageElements = state.messageData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessageText = state.newMessageText;

  let addNewMessage = (value) => {
    props.sendMessageCreator(value.newMessageText);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogElements}</div>
      <div className={s.messages}>{messageElements}</div>
      <div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength50]}
          name="newMessageText"
          placeholder="Enter your message..."
        />
      </div>
      <div>
        <button>send message</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "messageForm" })(AddMessageForm);

export default Messages;
