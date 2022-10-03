//require the moment js module to keep track of time 
const moment = require('moment');
//function that manipulates the user, login time, message
function formatMessage(username, text){
    return {
        username,
        text,
        time: moment().format('h:mm a')
    }
}

module.exports = formatMessage;