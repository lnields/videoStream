const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const PORT = 4000;
const CHAT_MESSAGE_EVENT = "chatMessage";
const PLAY_EVENT = "play";
const PAUSE_EVENT = "pause";
const SEEK_EVENT = "seek"
const SYNC = "sync"

io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);
	socket.send(SYNC)
  // Join a conversation
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  // Listen for new messages
  socket.on(CHAT_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(CHAT_MESSAGE_EVENT, data);
  });

  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    console.log(`Client ${socket.id} diconnected`);
    socket.leave(roomId);
  });
	socket.on(PLAY_EVENT, time => {
		console.log('client playing video');
		io.emit(PLAY_EVENT, time);
	});
	socket.on(PAUSE_EVENT, time => {
			console.log('client paused video');
			io.emit(PAUSE_EVENT, time);
	});
	socket.on(SEEK_EVENT, time => {
		console.log('client seeked video');
 		io.emit(SEEK_EVENT, time);
});
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
