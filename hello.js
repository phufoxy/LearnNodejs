const http = require('http'); // loads the http module
http.createServer((request, response) => {
    // 1 tell the browser 
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // write text the body web
    response.write('Hello , World\n');
    // tell the server that all of the response headers and body have been sent
    response.end();
}).listen(8000);