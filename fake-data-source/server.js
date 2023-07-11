const http = require('http');

const fakeData = [
    {
        title: 'Hello world',
        body: 'A big chunk of content.'
    },
    {
        title: 'Hello world strikes back',
        body: 'A bigger chunk of content.'
    },
    {
        title: 'The return of the hello world',
        body: 'The last chapter of the hello world trilogy..'
    },
]

http.createServer((request, response) => {

    const data = JSON.stringify({ data: fakeData });
    response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/json'
    });
    response.write(data);
    response.end();

}).listen(3000);

console.log('Server started in http://localhost:3000');