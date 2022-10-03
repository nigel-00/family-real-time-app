const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utilities/messages');
const {userJoin, getCurrentUser, userLeave, getRoomUsers} = require('./utilities/users');
const app = express();
const server = http.createServer(app);
//run when client connects
const io = socketio(server);
//create a bot name 
const  botName = 'FamChat-bot';
//Set a static folder
app.use(express.static(path.join(__dirname, 'public')));
//run when a client connects
io.on('connection', socket => {

    socket.on('joinRoom', ({username, room}) => {
        const user = userJoin(socket.id, username, room);
        socket.join(user.room);
        //welcomes the current user
        socket.emit('message', formatMessage(botName, 'Welcome to FamChat'));
        //Broadcast when a user connects
        socket.broadcast.to(user.room).emit('message', formatMessage(botName,`${user.username} has joined the chat`));
        
        //send users and room info 
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        })
    });
    
    //listen for the chatMessage
    socket.on('chatMessage', (msg) => {
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('message', formatMessage(user.username,msg));
    } );

    //run when a client disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        //check if user exists
        if (user){
            io.to(user.room).emit('message', formatMessage(botName, `${user.username} has left the chat`));
        }
        
    });
});

const PORT = 3000 || process.env.PORT;
server.listen(PORT,  () => console.log(`Server is running on port ${PORT}`));