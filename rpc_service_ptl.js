/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.rpc_service_ptl = (function() {

    /**
     * Namespace rpc_service_ptl.
     * @exports rpc_service_ptl
     * @namespace
     */
    var rpc_service_ptl = {};

    rpc_service_ptl.rpc_base_ptl = (function() {

        /**
         * Properties of a rpc_base_ptl.
         * @memberof rpc_service_ptl
         * @interface Irpc_base_ptl
         * @property {string|null} [message] rpc_base_ptl message
         * @property {rpc_service_ptl.rpc_base_ptl.calltype|null} [call] rpc_base_ptl call
         * @property {number|null} [session] rpc_base_ptl session
         * @property {Uint8Array|null} [payload] rpc_base_ptl payload
         */

        /**
         * Constructs a new rpc_base_ptl.
         * @memberof rpc_service_ptl
         * @classdesc Represents a rpc_base_ptl.
         * @implements Irpc_base_ptl
         * @constructor
         * @param {rpc_service_ptl.Irpc_base_ptl=} [properties] Properties to set
         */
        function rpc_base_ptl(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * rpc_base_ptl message.
         * @member {string} message
         * @memberof rpc_service_ptl.rpc_base_ptl
         * @instance
         */
        rpc_base_ptl.prototype.message = "";

        /**
         * rpc_base_ptl call.
         * @member {rpc_service_ptl.rpc_base_ptl.calltype} call
         * @memberof rpc_service_ptl.rpc_base_ptl
         * @instance
         */
        rpc_base_ptl.prototype.call = 0;

        /**
         * rpc_base_ptl session.
         * @member {number} session
         * @memberof rpc_service_ptl.rpc_base_ptl
         * @instance
         */
        rpc_base_ptl.prototype.session = 0;

        /**
         * rpc_base_ptl payload.
         * @member {Uint8Array} payload
         * @memberof rpc_service_ptl.rpc_base_ptl
         * @instance
         */
        rpc_base_ptl.prototype.payload = $util.newBuffer([]);

        /**
         * Creates a new rpc_base_ptl instance using the specified properties.
         * @function create
         * @memberof rpc_service_ptl.rpc_base_ptl
         * @static
         * @param {rpc_service_ptl.Irpc_base_ptl=} [properties] Properties to set
         * @returns {rpc_service_ptl.rpc_base_ptl} rpc_base_ptl instance
         */
        rpc_base_ptl.create = function create(properties) {
            return new rpc_base_ptl(properties);
        };

        /**
         * Encodes the specified rpc_base_ptl message. Does not implicitly {@link rpc_service_ptl.rpc_base_ptl.verify|verify} messages.
         * @function encode
         * @memberof rpc_service_ptl.rpc_base_ptl
         * @static
         * @param {rpc_service_ptl.Irpc_base_ptl} message rpc_base_ptl message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        rpc_base_ptl.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            if (message.call != null && message.hasOwnProperty("call"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.call);
            if (message.session != null && message.hasOwnProperty("session"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.session);
            if (message.payload != null && message.hasOwnProperty("payload"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.payload);
            return writer;
        };

        /**
         * Encodes the specified rpc_base_ptl message, length delimited. Does not implicitly {@link rpc_service_ptl.rpc_base_ptl.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc_service_ptl.rpc_base_ptl
         * @static
         * @param {rpc_service_ptl.Irpc_base_ptl} message rpc_base_ptl message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        rpc_base_ptl.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a rpc_base_ptl message from the specified reader or buffer.
         * @function decode
         * @memberof rpc_service_ptl.rpc_base_ptl
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc_service_ptl.rpc_base_ptl} rpc_base_ptl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        rpc_base_ptl.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc_service_ptl.rpc_base_ptl();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.call = reader.int32();
                    break;
                case 3:
                    message.session = reader.uint32();
                    break;
                case 4:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a rpc_base_ptl message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc_service_ptl.rpc_base_ptl
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc_service_ptl.rpc_base_ptl} rpc_base_ptl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        rpc_base_ptl.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a rpc_base_ptl message.
         * @function verify
         * @memberof rpc_service_ptl.rpc_base_ptl
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        rpc_base_ptl.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.call != null && message.hasOwnProperty("call"))
                switch (message.call) {
                default:
                    return "call: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.session != null && message.hasOwnProperty("session"))
                if (!$util.isInteger(message.session))
                    return "session: integer expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };

        /**
         * Creates a rpc_base_ptl message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc_service_ptl.rpc_base_ptl
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc_service_ptl.rpc_base_ptl} rpc_base_ptl
         */
        rpc_base_ptl.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc_service_ptl.rpc_base_ptl)
                return object;
            var message = new $root.rpc_service_ptl.rpc_base_ptl();
            if (object.message != null)
                message.message = String(object.message);
            switch (object.call) {
            case "caller":
            case 0:
                message.call = 0;
                break;
            case "callee":
            case 1:
                message.call = 1;
                break;
            }
            if (object.session != null)
                message.session = object.session >>> 0;
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            return message;
        };

        /**
         * Creates a plain object from a rpc_base_ptl message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc_service_ptl.rpc_base_ptl
         * @static
         * @param {rpc_service_ptl.rpc_base_ptl} message rpc_base_ptl
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        rpc_base_ptl.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.message = "";
                object.call = options.enums === String ? "caller" : 0;
                object.session = 0;
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.call != null && message.hasOwnProperty("call"))
                object.call = options.enums === String ? $root.rpc_service_ptl.rpc_base_ptl.calltype[message.call] : message.call;
            if (message.session != null && message.hasOwnProperty("session"))
                object.session = message.session;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };

        /**
         * Converts this rpc_base_ptl to JSON.
         * @function toJSON
         * @memberof rpc_service_ptl.rpc_base_ptl
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        rpc_base_ptl.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * calltype enum.
         * @name rpc_service_ptl.rpc_base_ptl.calltype
         * @enum {string}
         * @property {number} caller=0 caller value
         * @property {number} callee=1 callee value
         */
        rpc_base_ptl.calltype = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "caller"] = 0;
            values[valuesById[1] = "callee"] = 1;
            return values;
        })();

        return rpc_base_ptl;
    })();

    return rpc_service_ptl;
})();

module.exports = $root;
