
import React, { useEffect } from "react";
import useVideoPlayer from "../useVideoPlayer";


const VideoPlayer = (props) =>{
	const { roomId } = props;
  const { playing, currentTime, sendPause, sendPlay, sendSeek } = useVideoPlayer(roomId);
	React.useEffect(()=>{
		document.getElementById('video').currentTime = currentTime
		console.log("useEffect: " + currentTime)
	})
	useEffect(() => {
		console.log(playing)
    if (playing){
			document.getElementById('video').play()
		}else if(!playing){
			document.getElementById('video').pause()
		}
  });
	const handlePause = () =>{
		console.log(document.getElementById('video').currentTime)
		sendPause(document.getElementById('video').currentTime);
	}
	const handleSeek = () =>{
		if (playing){
			sendSeek(document.getElementById('video').currentTime)}
		}
	const handlePlay = () =>{
		sendPlay();
	}

	return(
		<video id = "video" width="100%" height="auto" controls
			onPlay={handlePlay} onPause={handlePause} onSeeked={handleSeek}>
		<source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type = "video/mp4" autostart="false"/>
		</video>
		
)}
export default VideoPlayer