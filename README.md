## 1 分钟了解 Server-Sent Events

### 服务器向浏览器推送信息，除了 WebSocket，还有一种方法：Server-Sent Events（以下简称 SSE）

SSE 相比 WebSocket 更加轻量，它基于 http 协议
WebSocket 是双向通信，SSE 只能服务端向客户端推送数据
SSE 默认支持断线重连，WebSocket 需要自己实现
...

总的来说 WebSocket 功能更强大，适用更多场合
但 SSE 更轻量，适用一些例如需要实时更新数据的场合
比如：**股票 K 线图实时更新**，或者一些代替轮询的场合，例如查询订单支付结果

### 客户端

```js
// 使用 SSE 时，浏览器首先生成一个EventSource实例，向服务器发起连接。
var source = new EventSource("http://127.0.0.1:8848");

source.onopen = function (event) {
  console.log("Connection open");
};

source.onerror = function (event) {
  console.log("Connection close");
};

// 客户端收到服务器发来的数据，就会触发message事件
source.onmessage = function (event) {
  console.log(event.data);
};
```

### 服务端

首先，response header 的 Content-Type 必须指定 MIME 类型为 event-steam

每一次发送的信息，由若干个 message 组成，每个 message 之间用\n\n 分隔

`[field]: value\n\n`

field 可取 data、event、id、retry，常见的取 data

```js
`data: ${内容}\n\n`;
```

```js
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "Access-Control-Allow-Origin": "*",
    });

    setInterval(function () {
      res.write(`data: ${new Date()}\n\n`);
    }, 1000);
  })
  .listen(8848);
```

```sh
node server

npx live-server
```

如果想要用于即时通讯，建议还是使用 WebSocket 来实现，
目前看来 SSE 应用到的地方较少，主要还是代替轮询，而且 IE/Edge 好像还不支持

### 参考链接：

- [完整示例](https://github.com/LogiCadi/sse-demo)
- [Server-Sent Events 教程](http://www.ruanyifeng.com/blog/2017/05/server-sent_events.html)
