Nodejs implemention of [avplayer/tinyrpc](https://github.com/avplayer/tinyrpc/)

此项目是[avplayer/tinyrpc](https://github.com/avplayer/tinyrpc/)的js版本。

既可以在nodejs环境下使用，也可以在支持commonjs的浏览器环境下（例如webpack）使用！

### 基本用法

服务器端：

``` javascript
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
```

客户端：

``` javascript
	let chat_proto = await protobuf.load("chat.proto")

	let ws = new WebSocket("ws://127.0.0.1:8000/")

	let tiny = tinyrpc.tiny(chat_proto, {})
	tiny.takeover(ws)

	let name

	var say_something = function() {
		rl.question(name + ": ", (inputed) => {
			tiny.call(ws, "chat.ChatSendMessage", {
				name: name, 
				message: inputed
			}, (reply) => {
				process.stdout.write(reply.name + ": " + reply.message + "\n")
				say_something()
			})
		})
	}

	rl.question("What's your name? ", (inputed_name) => {
		name = inputed_name
		say_something()
	})
```

浏览器客户端：

``` javascript
var ws = new WebSocket("ws://127.0.0.1:8000/")

var tiny = tinyrpc.tiny(chat_proto, {})
tiny.takeover(ws)

document.getElementById("send").addEventListener('click', function (e) {
	tiny.call(ws, "chat.ChatSendMessage", {
		name: document.getElementById("name").value, 
		message: document.getElementById("message").value
	}, (reply) => {
		var newline = document.createElement("p")
		newline.innerHTML = reply.name + ": " + reply.message
		document.getElementById("messages").appendChild(newline)
	})
}, false)
```

详请参见test目录下
