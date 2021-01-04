import React from "react";
import "./Dialogs.css";
import {
  sendMessageCreator,
  updateMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { widthAuthRedirect } from "../../hoc/withAuthRedirect";

let AuthRedirectComponent = widthAuthRedirect(Dialogs);
let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (text) => {
      dispatch(updateMessageCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
