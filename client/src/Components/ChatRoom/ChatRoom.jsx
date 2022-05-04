import React from "react";
import "./ChatRoom.css";
import moment from 'moment';


const ChatRoom = (props) => {
	const sendMessage = props.sendMessage;
	const name = props.name;
	const messages = props.messages;
  
  const [message, setMessage] = React.useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

const time = moment().format('h:mm a');

  const handleSendMessage = () => {
    sendMessage(name.concat(": ", message), time);
    setMessage("");
  };

  return (
    <div className="chat-room-container">
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <ul key={i} className="no-bullets">
              
            <li
              
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
            {message.time}
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