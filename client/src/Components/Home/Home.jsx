import React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from 'antd';
import 'react-banner/dist/style.css'
import "./Home.css";
import { useHistory } from "react-router-dom";


const Home = () => {
	const history = useHistory();
  const [roomName, setRoomName] = React.useState("");
	const [name, setName] = React.useState("");
  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };
	const handleNameChange = (event) => {
    setName(event.target.value);
  };
	const enterRoom = () => {
			if (roomName && name){
				history.push(`/${roomName}/${name}`);
			}else{
				alert("You must enter a Room and Name")
			}
	}

  return (
		<div>
	<div>
		<PageHeader
			className="site-page-header"
			title="Bob"
			avatar={{ src: 'https://github.com/lnields/videoStream/blob/master/client/public/bobo.png?raw=true' }}
		/>
	</div>
    <div className="home-container">
					<input
						type="text"
						placeholder="Room"
						value={roomName}
						onChange={handleRoomNameChange}
						className="text-input-field"
					/>
	
						<input
						type="text"
						placeholder="Name"
						value={name}
						onChange={handleNameChange}
						className="text-input-field"
					/>

      <button className="enter-room-button" onClick={enterRoom}>
        Join room
      </button>
    </div>
		</div>
  );
};

export default Home;
