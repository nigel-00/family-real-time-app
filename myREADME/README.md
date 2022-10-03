# Overview
This is a chat application built using HTML, CSS, JavaScript, Nodejs, and socket.io. The application constists of two HTML pages, the login page and the chat page. It also consists of the CSS page which is mainly for styling the application for better user experience. The front-end side is written in JavaScript and an integration of socket.io that enables event-based communication between a client and a server. The backend consists of nodejs and its framework express.js which knows how to perform serving files, handling requests, and handling HTTP methods. In the backend, there is also an integration of JavaScript code and socketio. 

When starting the application you have to first run "npm run dev" on the terminal of your choice of IDE. Dev runs the nodemon server which automatically restarting the node application and also updates changes. The port used for this web app is 3000. After running dev in the commanf line, you can head over to your browser and run "localhost:300". That will run the port where our web app is located. The first page that will appear is the log in page, that will allow you to put your username and a room to join. When you join the room, it will open another page which is the chat room and area where you can send messages back and forth with other users.



My purpose for creating this software was to mainly to build a chat application that me and my family can use to communicate. 


[Software Demo Video](https://youtu.be/C4TU5zVYsos)

# Web Pages
The first web page is the login page, which prompts the user to enter their username and room they want to enter. Since this web app is mainly for family use, There are three room which are main, parents, and kids rooms. When a user enters the username and password they transition to the second web page which is the chat page. JavaScript plays a big role through the DOM manipulation to add users in an array and with the integration of the socket.io emit method, allows them to join their room of choice and transition to the second chat page. When in the chat page, socket io to and emit methods integrated with JavaScript functions manipulated by the DOM (Document Object Models) which changes static web pages and making them dynamic. Examples are functions  that format messages before they are emited using a JavaScript function called moment. 



# Development Environment
## Tools Used
* VS Code, a development environment
* Git/ GitHub 
* Nodejs/ Expressjs 
* socket.io

## Programming Languages Used
* HTML & CSS 
* JavaScript
* moment
* npm (node package manager)


# Useful Websites

{Make a list of websites that you found helpful in this project}
* [Learn Node in 1hr](https://www.youtube.com/watch?v=TlB_eWDSMt4&t=257s)
* [Learn Socket.io In 30 Minutes](https://www.youtube.com/watch?v=ZKEqqIO7n-k)
* [JavaScript DOM Manipulation](https://www.youtube.com/watch?v=5fb2aPlgoys)
# Future Work

* Integrate databases to my chat app.
* Add options for picture and video upload.
* Add optiond for video chaatting.