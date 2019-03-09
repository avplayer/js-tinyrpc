/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.chat = (function() {

    /**
     * Namespace chat.
     * @exports chat
     * @namespace
     */
    var chat = {};

    chat.ChatSendMessage = (function() {

        /**
         * Properties of a ChatSendMessage.
         * @memberof chat
         * @interface IChatSendMessage
         * @property {string|null} [name] ChatSendMessage name
         * @property {string|null} [message] ChatSendMessage message
         */

        /**
         * Constructs a new ChatSendMessage.
         * @memberof chat
         * @classdesc Represents a ChatSendMessage.
         * @implements IChatSendMessage
         * @constructor
         * @param {chat.IChatSendMessage=} [properties] Properties to set
         */
        function ChatSendMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatSendMessage name.
         * @member {string} name
         * @memberof chat.ChatSendMessage
         * @instance
         */
        ChatSendMessage.prototype.name = "";

        /**
         * ChatSendMessage message.
         * @member {string} message
         * @memberof chat.ChatSendMessage
         * @instance
         */
        ChatSendMessage.prototype.message = "";

        /**
         * Creates a new ChatSendMessage instance using the specified properties.
         * @function create
         * @memberof chat.ChatSendMessage
         * @static
         * @param {chat.IChatSendMessage=} [properties] Properties to set
         * @returns {chat.ChatSendMessage} ChatSendMessage instance
         */
        ChatSendMessage.create = function create(properties) {
            return new ChatSendMessage(properties);
        };

        /**
         * Encodes the specified ChatSendMessage message. Does not implicitly {@link chat.ChatSendMessage.verify|verify} messages.
         * @function encode
         * @memberof chat.ChatSendMessage
         * @static
         * @param {chat.IChatSendMessage} message ChatSendMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatSendMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified ChatSendMessage message, length delimited. Does not implicitly {@link chat.ChatSendMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.ChatSendMessage
         * @static
         * @param {chat.IChatSendMessage} message ChatSendMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatSendMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatSendMessage message from the specified reader or buffer.
         * @function decode
         * @memberof chat.ChatSendMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.ChatSendMessage} ChatSendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatSendMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.ChatSendMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChatSendMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.ChatSendMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.ChatSendMessage} ChatSendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatSendMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatSendMessage message.
         * @function verify
         * @memberof chat.ChatSendMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatSendMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a ChatSendMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.ChatSendMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.ChatSendMessage} ChatSendMessage
         */
        ChatSendMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.ChatSendMessage)
                return object;
            var message = new $root.chat.ChatSendMessage();
            if (object.name != null)
                message.name = String(object.name);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a ChatSendMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.ChatSendMessage
         * @static
         * @param {chat.ChatSendMessage} message ChatSendMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatSendMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.message = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this ChatSendMessage to JSON.
         * @function toJSON
         * @memberof chat.ChatSendMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatSendMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChatSendMessage;
    })();

    chat.ChatReplyMessage = (function() {

        /**
         * Properties of a ChatReplyMessage.
         * @memberof chat
         * @interface IChatReplyMessage
         * @property {string|null} [name] ChatReplyMessage name
         * @property {string|null} [message] ChatReplyMessage message
         */

        /**
         * Constructs a new ChatReplyMessage.
         * @memberof chat
         * @classdesc Represents a ChatReplyMessage.
         * @implements IChatReplyMessage
         * @constructor
         * @param {chat.IChatReplyMessage=} [properties] Properties to set
         */
        function ChatReplyMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatReplyMessage name.
         * @member {string} name
         * @memberof chat.ChatReplyMessage
         * @instance
         */
        ChatReplyMessage.prototype.name = "";

        /**
         * ChatReplyMessage message.
         * @member {string} message
         * @memberof chat.ChatReplyMessage
         * @instance
         */
        ChatReplyMessage.prototype.message = "";

        /**
         * Creates a new ChatReplyMessage instance using the specified properties.
         * @function create
         * @memberof chat.ChatReplyMessage
         * @static
         * @param {chat.IChatReplyMessage=} [properties] Properties to set
         * @returns {chat.ChatReplyMessage} ChatReplyMessage instance
         */
        ChatReplyMessage.create = function create(properties) {
            return new ChatReplyMessage(properties);
        };

        /**
         * Encodes the specified ChatReplyMessage message. Does not implicitly {@link chat.ChatReplyMessage.verify|verify} messages.
         * @function encode
         * @memberof chat.ChatReplyMessage
         * @static
         * @param {chat.IChatReplyMessage} message ChatReplyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatReplyMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified ChatReplyMessage message, length delimited. Does not implicitly {@link chat.ChatReplyMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.ChatReplyMessage
         * @static
         * @param {chat.IChatReplyMessage} message ChatReplyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatReplyMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatReplyMessage message from the specified reader or buffer.
         * @function decode
         * @memberof chat.ChatReplyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.ChatReplyMessage} ChatReplyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatReplyMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.ChatReplyMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChatReplyMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.ChatReplyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.ChatReplyMessage} ChatReplyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatReplyMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatReplyMessage message.
         * @function verify
         * @memberof chat.ChatReplyMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatReplyMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a ChatReplyMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.ChatReplyMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.ChatReplyMessage} ChatReplyMessage
         */
        ChatReplyMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.ChatReplyMessage)
                return object;
            var message = new $root.chat.ChatReplyMessage();
            if (object.name != null)
                message.name = String(object.name);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a ChatReplyMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.ChatReplyMessage
         * @static
         * @param {chat.ChatReplyMessage} message ChatReplyMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatReplyMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.message = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this ChatReplyMessage to JSON.
         * @function toJSON
         * @memberof chat.ChatReplyMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatReplyMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChatReplyMessage;
    })();

    return chat;
})();

module.exports = $root;
