import React from "react";
import "./Dialogs.css";
import DialogsMessagesItem from "./DialogsMessagesItem/DialogsMessagesItem";
import DialogsPeopleItem from "./DialogsPeopleItem/DialogsPeopleItem";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsPeopleDataList = state.dialogsPeopleData.map((people) => (
    <DialogsPeopleItem name={people.name} id={people.id} />
  ));
  let dialogsMessagesDataList = state.dialogsMessagesData.map((message) => (
    <DialogsMessagesItem message={message.message} />
  ));
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateMessage(text);
  };
  let sendMessage = () => {
    props.sendMessage();
  };

  return (
    <main className="dialogs">
      <h3 className="dialogs__header">Сообщения</h3>
      <div className="flex">
        <div className="dialogs__people">{dialogsPeopleDataList}</div>
        <div className="dialogs__messages dialogs-messages">
          {dialogsMessagesDataList}
          <textarea
            onChange={onMessageChange}
            value={state.newMessage}
            className="dialogs__messages-window"
          ></textarea>
          <button onClick={sendMessage} className="dialogs__messages-button">
            Отправить сообщение
          </button>
        </div>
      </div>
    </main>
  );
};
export default Dialogs;
