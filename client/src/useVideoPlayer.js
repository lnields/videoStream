
import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
const SYNC = "sync";
const PLAY_EVENT = "play";
const PAUSE_EVENT = "pause";
const SEEK_EVENT = "seek";
const SOCKET_SERVER_URL = "http://localhost:4000";

const useVideoPlayer = (roomId) => {
  const [playing, setPlaying] = useState([]);
	const [currentTime, setCurrentTime] = useState(0);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    socketRef.current.on(PLAY_EVENT, (timeStamp) => {
			if (timeStamp !== currentTime){
				setCurrentTime(timeStamp)
			}
			setPlaying(true)
			console.log("play event herd")
    });
		socketRef.current.emit(SYNC, () => {
			console.log("play event herd")
			// send a message to the server
		});
		socketRef.current.on(PAUSE_EVENT, (timeStamp) => {
			console.log(timeStamp)
			if (timeStamp !== currentTime){
				setCurrentTime(timeStamp)
			}
			setPlaying(false)
			console.log("pause event herd")
    });
		socketRef.current.on(SEEK_EVENT, (timeStamp) => {
			console.log(timeStamp)
			if (timeStamp !== currentTime){
				setCurrentTime(timeStamp)
			}
			console.log("Seek event herd")
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendPause = (timeStamp) => {
    socketRef.current.emit(PAUSE_EVENT, timeStamp);
		setPlaying(false)
		console.log("pause event sent")
  };
	const sendPlay = (timeStamp) => {
    socketRef.current.emit(PLAY_EVENT, timeStamp);
		setPlaying(true)
		console.log("play event sent")
  };
	const sendSeek = (timeStamp) => {
    socketRef.current.emit(SEEK_EVENT, timeStamp);
		console.log("seek event sent")
  };

  return { playing, currentTime, sendPause, sendPlay, sendSeek };
};

export default useVideoPlayer;
