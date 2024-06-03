const observer = require('./observer');

function subscribe(){
    observer.on('alert', (data)=>{
        console.log('Event received inside second subscriber');
        console.log(data);
    })
};

subscribe();