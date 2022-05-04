import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const CHAT_MESSAGE_EVENT = "chatMessage";
const SOCKET_SERVER_URL = "http://localhost:4000";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    socketRef.current.on(CHAT_MESSAGE_EVENT, (message, time) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
				time: message.time,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendMessage = (messageBody, time) => {
    socketRef.current.emit(CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
			time: time
    });
  };

  return { messages, sendMessage };
};

export default useChat;
