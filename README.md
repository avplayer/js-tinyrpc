js-tinyrpc
------------

# Table of Contents

* [Overview](#overview)
* [Examples](#examples)
* [API](#api)
  * [tinyrpc\.tiny(proto, events)](#tinyrpctinyproto-events)
  * [tiny\.takeover(ws)](#tinytakeoverws)
  * [tiny\.server(wss)](#tinyserverwss)
  * [tiny\.call(ws, request\_type, request\_object, callback)](#tinycallws-request_type-request_object-callback)

# Overview

This project os nodejs implemention of [avplayer/tinyrpc](https://github.com/avplayer/tinyrpc/) using ws(isomorphic-ws) & protobufjs

Supports both nodejs native & commonjs browser environment (e.g. webpack)

# Examples

first you need to write your .proto defining request & reply messages.

``` protobuf
message ChatSendMessage {
  string name = 1;
  string message = 2;
}

message ChatReplyMessage {
  string name = 1;
  string message = 2;
}
```

then with js-tinyrpc, you may have:

nodejs server

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

nodejs cmd readline client

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

or even browser client!

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

you can see full examples under test/

# API

To use:

run
```
npm install js-tinyrpc --save
npm install ws protobufjs --save
```
and maybe
```
npm install isomorphic-ws
```
if you need to use it in a browser

import it in your project:
```
const tinyrpc = require("js-tinyrpc")
```

## tinyrpc.tiny(proto, events)

proto: your protobufjs root object

you may use a reflexed object or a static object, both was supported


events: map of the events provided by **this end**, its keys are strings by format "request$reply"

e.g. { "chat.ChatSendMessage$chat.ChatReplyMessage", function () {...} }

the event function takes an object returned by protobufjs toObject, and **must return a "valid message object" defined by protobufjs**

see: [restrictions for valid message](https://www.npmjs.com/package/protobufjs#valid-message)

returns an object resembling an RPC end interface, which we call a "tiny"

```
let tiny = tinyrpc.tiny(proto, events)
```

## tiny.takeover(ws)

ws: a ws websocket, isomorphic-ws is supported

takeover the handle of ws, automatically handle request & replys of RPC on its interface

notice: when used in browser the websocket passes a Blob instead of Buffer, while it is supported, the data will be handled after all reading is done

## tiny.server(wss)

wss: a ws websocket server

takeover() all connections incoming, making wss an RPC server

## tiny.call(ws, request_type, request_object, callback)

ws: a ws websocket, isomorphic-ws is supported

request_type: message type name string for the request object

request_object: **valid message object** with request data

  see: [restrictions for valid message](https://www.npmjs.com/package/protobufjs#valid-message)

callback: takes the reply object returned by the other end



