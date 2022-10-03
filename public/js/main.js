//Get the chat form id from the chat.html 
const chatForm = document.getElementById('chat-form');
//Get the chat-messages class from the chat.html 
const chatMessages = document.querySelector('.chat-messages');
//get room id from the chat.html
const roomName = document.getElementById('room-name');
//get the user array id
const userList = document.getElementById('users');
//get username and room from URL 
const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

// Message from server
const socket = io();
// join chatroom with username and room
socket.emit('joinRoom', {username, room});

//get room and users
socket.on('roomUsers', ({room, users}) => {
    outputRoomName(room);
    outputUsers(users);
})
socket.on('message', message => {
        console.log(message);
        outputMessage(message);

    //enable scroll up option 
    chatMessages.scrollTop = chatMessages.scrollHeight;
});
//a message submit that prevents from defautling the message
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get the message text through the msg id from the chat.html
    const msg = e.target.elements.msg.value;
    //send/emit message to the server
    socket.emit('chatMessage', msg);

    //clear the message 
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
} );
//output message to the document
function outputMessage(message){
    const div = document.createElement('div');
    div.classList.add('message')
    div.innerHTML =`<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
       ${message.text}
    </p>`
    document.querySelector('.chat-messages').appendChild(div);
}
// add the room name to the DOM 
function outputRoomName(room){
    roomName.innerText = room;
}
//add the users 
function outputUsers(users){
    userList.innerHTML = `
        ${users.map(user => `<li> ${user.username}</li>`).join('')}

    `;
}