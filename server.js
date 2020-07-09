var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Access-Control-Allow-Origin": '*',
    });

    interval = setInterval(function () {
        res.write("data: " + JSON.stringify({
            id: 1,
            date: (new Date())
        }) + "\n\n");
    }, 1000);
}).listen(8844);