var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Access-Control-Allow-Origin": '*',
    });

    setInterval(function () {
        res.write(`data: ${new Date}\n\n`);
    }, 1000);
}).listen(8844);