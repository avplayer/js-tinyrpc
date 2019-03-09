
const path = require("path")

const rpc_proto = require("./rpc_service_ptl.js")
const baseproto = rpc_proto.rpc_service_ptl.rpc_base_ptl
const call_enum = rpc_proto.rpc_service_ptl.rpc_base_ptl.calltype

const to_object_settings = {
	bytes: Buffer, 
	enums: String, 
	defaults: true
}

function send_base(ws, base_object)
{
	let data = baseproto.encode(base_object).finish()
	ws.send(data)
}


function process_base(base_data)
{
	let message
	if (base_data instanceof String || typeof(base_data) == "string")
	{
		message = baseproto.decode(Buffer.from(base_data, "utf8"))
	} else {
		message = baseproto.decode(base_data)
	}
	let packet = baseproto.toObject(message, to_object_settings)
	return packet
}

function tiny(proto, events)
{
	var event_by_request = {}
	var reply_by_request = {}
	for(let request_reply in events)
	{
		let request = request_reply.split("$")[0]
		let reply = request_reply.split("$")[1]
		event_by_request[request] = events[request_reply]
		reply_by_request[request] = reply
	}
	return {
		proto, 
		call: function (ws, request_type, request_object, callback) {
			let session
			if (this.recycled_sessions.length == 0)
			{
				session = this.session_callbacks.push(callback) - 1
			} else {
				session = this.recycled_sessions.pop()
				this.session_callbacks[session] = callback
			}
			

			let request_proto = proto.lookupType(request_type)
			let request_payload = request_proto.encode(request_object).finish()
			send_base(ws, {
				message: request_type, 
				call: call_enum["caller"], 
				session: session, 
				payload: Buffer.from(request_payload)
			})
		}, 
		event_by_request, 
		reply_by_request, 
		session_callbacks: [], 
		recycled_sessions: [], 
		takeover: function(ws)
		{
			takeover(this, ws)
		}, 
		server: function(wss)
		{
			wss.on("connection", (ws) => {
				takeover(this, ws)
			})
		}
	}
}

function takeover(tiny, ws)
{
	ws.on("message", function incoming(data) {
		let packet = process_base(data)
		let payload_proto = tiny.proto.lookupType(packet.message)
		let payload_message = payload_proto.decode(packet.payload)
		let payload_object = payload_proto.toObject(payload_message, to_object_settings)

		switch(packet.call)
		{
			case "caller":
			let returned_object = tiny.event_by_request[packet.message](payload_object)

			let returned_proto_typename = tiny.reply_by_request[packet.message]
			let returned_proto = tiny.proto.lookupType(returned_proto_typename)
			let returned_payload = returned_proto.encode(returned_object).finish()
			send_base(ws, {
				message: returned_proto_typename, 
				call: call_enum["callee"], 
				session: packet.session, 
				payload: Buffer.from(returned_payload)
			})
			break
			case "callee":
			tiny.session_callbacks[packet.session](payload_object)
			tiny.recycled_sessions.push(packet.session)
			break
		}
	})
}

module.exports.tiny = tiny
