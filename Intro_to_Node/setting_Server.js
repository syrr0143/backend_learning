const http = require("http");

const server = http.createServer((req, res) => {
    console.log('going on localhost')
    res.end("hllo world")
});
server.listen(4000, () => {
    console.log('server is runnign on port 4000');
})