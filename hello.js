const express = require('express');
// create an Express applicaion using top-level funtion
const app = express();

// define port number as 8000
const port = 8000;

// router http get request to the speccified path
app.get('/', function (request, response) {
    response.send('Hello,World');
});
// Make the app listen on port 8000
app.listen(port, function () {
    console.log('Server listening on http://localhost: ' + port);
});

