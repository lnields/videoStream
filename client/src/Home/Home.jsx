import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [roomName, setRoomName] = React.useState("");
	const [name, setName] = React.useState("");
  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };
	const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
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
      <Link to={`/${roomName}/${name}`} className="enter-room-button">
        Join room
      </Link>
    </div>
  );
};

export default Home;
