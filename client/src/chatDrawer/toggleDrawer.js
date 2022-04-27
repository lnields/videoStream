import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button } from 'antd';
import ChatRoom from '../ChatRoom/ChatRoom';
import VideoPlayer from '../videoPlayer/videoPlayer';






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
      <Button type="primary" onClick={showDrawer}>
        Open Chat
      </Button>
			<div>
				<VideoPlayer { ...props.match.params}/>
			</div>
      <Drawer title="Chat" placement="right" onClose={onClose} visible={visible} >
				<ChatRoom { ...props.match.params}/>
      </Drawer>
    </>
  );
};

export default SwipeableEdgeDrawer;