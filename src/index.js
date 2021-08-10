import express from 'express';
import { Server as WebSocketServer } from 'socket.io';
import http from 'http';
import { v4 as uuid } from 'uuid';

const notes = [];
const app = express();
const httpServer = http.createServer(app);
const io = new WebSocketServer(httpServer);

app.use(express.static(`${__dirname}/public`));

io.on('connection', (socket) => {
  console.log('new connection', socket.id);
  socket.emit('server:loadnotes', notes);

  // guardar data del evento client:newnote
  socket.on('client:newnote', (newNote) => {
    const note = {
      ...newNote,
      id: uuid(),
    };
    notes.push(note);
    socket.emit('server:newnote', newNote);
  });
});

httpServer.listen(3001, () => {
  console.log('Server listening on port:', 3001);
});
