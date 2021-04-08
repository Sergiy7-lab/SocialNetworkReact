import React from "react";
import { sendMessageCreator } from "../../redux/messageReducer";
import Messages from "./Messages";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessageCreator: (newMessageText) => {
      dispatch(sendMessageCreator(newMessageText));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);
