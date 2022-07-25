const request = require('request');
const EventEmitter = require('events')
const fs = require('fs')
// let content;
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error);
// //   console.log('statusCode:', response && response.statusCode);
// //   console.log('body:', body);
//   fs.writeFile('google.html',body, error => error?console.log(error):console.log('file saved'))
// });

const eventEmitter = new EventEmitter();
eventEmitter.on('fetch', url => request(url, function(error, response, body){
    if(error) console.error(error)
    else{
        fs.writeFile('webpages/'+url.replace(/[^a-z]/gi, '')+'.html',body, error => error?console.log(error):console.log('file saved'))
    }
}))

eventEmitter.emit('fetch', 'http://www.google.com');