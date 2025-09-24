const http = require('http');
const fs=require('fs');
const url=require('url');

const server = http.createServer((req, res) => {
    // res.write('Hello, World!');
    if(req.url=='/hello'){
        res.write('Hello, World!');
    }
    else if(req.url=='/hello/user'){
        res.write('Welcome, User!');
    }
    else if(req.url=='/bye'){
        res.write('Bye, World!');
    }
    else{
        res.write('Welcome, World!');
    }
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
