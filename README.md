Nodejs implemention of [avplayer/tinyrpc](https://github.com/avplayer/tinyrpc/)

此项目是[avplayer/tinyrpc](https://github.com/avplayer/tinyrpc/)的js版本。

基本用法：

``` javascript
const WebSocket = require("ws")
const http = require('http')
const protobuf = require('protobufjs')

const tinyrpc = require("../index.js")

const server = new http.createServer()
const wss = new WebSocket.Server({
	server: server
})


async function run()
{
	await tinyrpc.init()
	console.log("TinyRPC inited")

	let chat_proto = await protobuf.load("chat.proto")
	let tiny = tinyrpc.tiny(chat_proto, {
		"chat.ChatSendMessage$chat.ChatReplyMessage": function(request) {
			process.stdout.write(request.name + " said : " + request.message + "\n")
			return {
				name : "server", 
				message : request.message + " copy!"
			}
		}
	})

	tiny.server(wss)
	server.listen(8000)
	console.log("Server started")
}

run()

```

客户端则采用tiny.takeover接管websocket对象。

更多用法参见test目录下
