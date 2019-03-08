const WebSocket = require("ws")
const protobuf = require('protobufjs')

const tinyrpc = require("../index.js")

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function run()
{
	await tinyrpc.init()
	console.log("TinyRPC inited")
	
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
}

run()
