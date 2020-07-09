### http SSE (Server-Sent Events) DEMO

#### SSE 与 WebSocket 作用相似，都是建立浏览器与服务器之间的通信渠道，然后服务器向浏览器推送信息。

总体来说，WebSocket 更强大和灵活。因为它是全双工通道，可以双向通信；SSE 是单向通道，只能服务器向浏览器发送，因为流信息本质上就是下载。如果浏览器向服务器发送信息，就变成了另一次 HTTP 请求。

[http://www.ruanyifeng.com/blog/2017/05/server-sent_events.html](http://www.ruanyifeng.com/blog/2017/05/server-sent_events.html)

```
node server

npx live-server
```
