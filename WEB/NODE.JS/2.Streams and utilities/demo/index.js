require('./subscriber') // синхронно
require('./subscriber2')
const publish = require('./publisher');

let index = 0;
setInterval(() =>{
    publish(++index);
}, 2000)    // функцията се вика на всеки 2 секунди.