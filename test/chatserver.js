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
