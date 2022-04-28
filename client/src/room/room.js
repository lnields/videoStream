import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button } from 'antd';
import ChatRoom from '../ChatRoom/ChatRoom';
import VideoPlayer from '../videoPlayer/videoPlayer';
import 'antd/dist/antd.css';
import './room.css';
import { PageHeader } from 'antd';
import 'react-banner/dist/style.css'
import { Link } from "react-router-dom";




const SwipeableEdgeDrawer = (props) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
	

  return (
    <>
		<div>
				<PageHeader
					className="site-page-header"
					onBack={showDrawer}
					title="Bob"
					subTitle={props.match.params.roomId}
					extra={[
						<Link key="3" to="/">Change Room</Link>,
					]}
					image={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
				/>
		</div>
			<div>
				<VideoPlayer { ...props.match.params}/>
			</div>
      <Drawer title="Chat" placement="left" onClose={onClose} visible={visible} >
				<ChatRoom { ...props.match.params}/>
      </Drawer>
    </>
  );
};

export default SwipeableEdgeDrawer;