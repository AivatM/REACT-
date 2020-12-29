import React from "react";
import "./Dialogs.css";
import {
  sendMessageCreator,
  updateMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
