import React from "react";
import "./ChatRoom.css";
import useChat from "../useChat";
import moment from 'moment';


const ChatRoom = (props) => {
  const { roomId, name } = props;
  const { messages, sendMessage } = useChat(roomId);
  const [message, setMessage] = React.useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

const time = 'time:' + moment().format('h:mm a');

  const handleSendMessage = () => {
    sendMessage(name.concat(": ", message));
    setMessage("");
  };

  return (
    <div className="chat-room-container">
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <ul>
              
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.body}
            </li>
            <li

            className={`time-item ${
              message.ownedByCurrentUser ? "my-timestamp" : "received-timestamp"
            }`}
          >
            {time}
          </li>
          </ul>
          ))}
        </ol>
      </div>
      <textarea
        value={message}
        onChange={handleMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </div>
  );
};

export default ChatRoom;