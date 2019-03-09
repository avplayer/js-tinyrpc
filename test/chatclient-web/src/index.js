
const WebSocket = require("isomorphic-ws")
const chat_proto = require('./chat.js')

const tinyrpc = require("../../../index.js")

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

