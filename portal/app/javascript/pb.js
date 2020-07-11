/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

$root.isuxportal = (function() {

    /**
     * Namespace isuxportal.
     * @exports isuxportal
     * @namespace
     */
    var isuxportal = {};

    isuxportal.proto = (function() {

        /**
         * Namespace proto.
         * @memberof isuxportal
         * @namespace
         */
        var proto = {};

        proto.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof isuxportal.proto
             * @interface IError
             * @property {number|null} [code] Error code
             * @property {string|null} [name] Error name
             * @property {string|null} [humanMessage] Error humanMessage
             * @property {Array.<string>|null} [humanDescriptions] Error humanDescriptions
             * @property {isuxportal.proto.Error.IDebugInfo|null} [debugInfo] Error debugInfo
             */

            /**
             * Constructs a new Error.
             * @memberof isuxportal.proto
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {isuxportal.proto.IError=} [properties] Properties to set
             */
            function Error(properties) {
                this.humanDescriptions = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error code.
             * @member {number} code
             * @memberof isuxportal.proto.Error
             * @instance
             */
            Error.prototype.code = 0;

            /**
             * Error name.
             * @member {string} name
             * @memberof isuxportal.proto.Error
             * @instance
             */
            Error.prototype.name = "";

            /**
             * Error humanMessage.
             * @member {string} humanMessage
             * @memberof isuxportal.proto.Error
             * @instance
             */
            Error.prototype.humanMessage = "";

            /**
             * Error humanDescriptions.
             * @member {Array.<string>} humanDescriptions
             * @memberof isuxportal.proto.Error
             * @instance
             */
            Error.prototype.humanDescriptions = $util.emptyArray;

            /**
             * Error debugInfo.
             * @member {isuxportal.proto.Error.IDebugInfo|null|undefined} debugInfo
             * @memberof isuxportal.proto.Error
             * @instance
             */
            Error.prototype.debugInfo = null;

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof isuxportal.proto.Error
             * @static
             * @param {isuxportal.proto.IError=} [properties] Properties to set
             * @returns {isuxportal.proto.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link isuxportal.proto.Error.verify|verify} messages.
             * @function encode
             * @memberof isuxportal.proto.Error
             * @static
             * @param {isuxportal.proto.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.humanMessage != null && Object.hasOwnProperty.call(message, "humanMessage"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.humanMessage);
                if (message.humanDescriptions != null && message.humanDescriptions.length)
                    for (var i = 0; i < message.humanDescriptions.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.humanDescriptions[i]);
                if (message.debugInfo != null && Object.hasOwnProperty.call(message, "debugInfo"))
                    $root.isuxportal.proto.Error.DebugInfo.encode(message.debugInfo, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link isuxportal.proto.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof isuxportal.proto.Error
             * @static
             * @param {isuxportal.proto.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof isuxportal.proto.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {isuxportal.proto.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.humanMessage = reader.string();
                        break;
                    case 4:
                        if (!(message.humanDescriptions && message.humanDescriptions.length))
                            message.humanDescriptions = [];
                        message.humanDescriptions.push(reader.string());
                        break;
                    case 16:
                        message.debugInfo = $root.isuxportal.proto.Error.DebugInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof isuxportal.proto.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {isuxportal.proto.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof isuxportal.proto.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.humanMessage != null && message.hasOwnProperty("humanMessage"))
                    if (!$util.isString(message.humanMessage))
                        return "humanMessage: string expected";
                if (message.humanDescriptions != null && message.hasOwnProperty("humanDescriptions")) {
                    if (!Array.isArray(message.humanDescriptions))
                        return "humanDescriptions: array expected";
                    for (var i = 0; i < message.humanDescriptions.length; ++i)
                        if (!$util.isString(message.humanDescriptions[i]))
                            return "humanDescriptions: string[] expected";
                }
                if (message.debugInfo != null && message.hasOwnProperty("debugInfo")) {
                    var error = $root.isuxportal.proto.Error.DebugInfo.verify(message.debugInfo);
                    if (error)
                        return "debugInfo." + error;
                }
                return null;
            };

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof isuxportal.proto.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {isuxportal.proto.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.isuxportal.proto.Error)
                    return object;
                var message = new $root.isuxportal.proto.Error();
                if (object.code != null)
                    message.code = object.code | 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.humanMessage != null)
                    message.humanMessage = String(object.humanMessage);
                if (object.humanDescriptions) {
                    if (!Array.isArray(object.humanDescriptions))
                        throw TypeError(".isuxportal.proto.Error.humanDescriptions: array expected");
                    message.humanDescriptions = [];
                    for (var i = 0; i < object.humanDescriptions.length; ++i)
                        message.humanDescriptions[i] = String(object.humanDescriptions[i]);
                }
                if (object.debugInfo != null) {
                    if (typeof object.debugInfo !== "object")
                        throw TypeError(".isuxportal.proto.Error.debugInfo: object expected");
                    message.debugInfo = $root.isuxportal.proto.Error.DebugInfo.fromObject(object.debugInfo);
                }
                return message;
            };

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof isuxportal.proto.Error
             * @static
             * @param {isuxportal.proto.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.humanDescriptions = [];
                if (options.defaults) {
                    object.code = 0;
                    object.name = "";
                    object.humanMessage = "";
                    object.debugInfo = null;
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.humanMessage != null && message.hasOwnProperty("humanMessage"))
                    object.humanMessage = message.humanMessage;
                if (message.humanDescriptions && message.humanDescriptions.length) {
                    object.humanDescriptions = [];
                    for (var j = 0; j < message.humanDescriptions.length; ++j)
                        object.humanDescriptions[j] = message.humanDescriptions[j];
                }
                if (message.debugInfo != null && message.hasOwnProperty("debugInfo"))
                    object.debugInfo = $root.isuxportal.proto.Error.DebugInfo.toObject(message.debugInfo, options);
                return object;
            };

            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof isuxportal.proto.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Error.DebugInfo = (function() {

                /**
                 * Properties of a DebugInfo.
                 * @memberof isuxportal.proto.Error
                 * @interface IDebugInfo
                 * @property {string|null} [exception] DebugInfo exception
                 * @property {Array.<string>|null} [trace] DebugInfo trace
                 * @property {Array.<string>|null} [applicationTrace] DebugInfo applicationTrace
                 * @property {Array.<string>|null} [frameworkTrace] DebugInfo frameworkTrace
                 */

                /**
                 * Constructs a new DebugInfo.
                 * @memberof isuxportal.proto.Error
                 * @classdesc Represents a DebugInfo.
                 * @implements IDebugInfo
                 * @constructor
                 * @param {isuxportal.proto.Error.IDebugInfo=} [properties] Properties to set
                 */
                function DebugInfo(properties) {
                    this.trace = [];
                    this.applicationTrace = [];
                    this.frameworkTrace = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DebugInfo exception.
                 * @member {string} exception
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @instance
                 */
                DebugInfo.prototype.exception = "";

                /**
                 * DebugInfo trace.
                 * @member {Array.<string>} trace
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @instance
                 */
                DebugInfo.prototype.trace = $util.emptyArray;

                /**
                 * DebugInfo applicationTrace.
                 * @member {Array.<string>} applicationTrace
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @instance
                 */
                DebugInfo.prototype.applicationTrace = $util.emptyArray;

                /**
                 * DebugInfo frameworkTrace.
                 * @member {Array.<string>} frameworkTrace
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @instance
                 */
                DebugInfo.prototype.frameworkTrace = $util.emptyArray;

                /**
                 * Creates a new DebugInfo instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @static
                 * @param {isuxportal.proto.Error.IDebugInfo=} [properties] Properties to set
                 * @returns {isuxportal.proto.Error.DebugInfo} DebugInfo instance
                 */
                DebugInfo.create = function create(properties) {
                    return new DebugInfo(properties);
                };

                /**
                 * Encodes the specified DebugInfo message. Does not implicitly {@link isuxportal.proto.Error.DebugInfo.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @static
                 * @param {isuxportal.proto.Error.IDebugInfo} message DebugInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DebugInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.exception != null && Object.hasOwnProperty.call(message, "exception"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.exception);
                    if (message.trace != null && message.trace.length)
                        for (var i = 0; i < message.trace.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.trace[i]);
                    if (message.applicationTrace != null && message.applicationTrace.length)
                        for (var i = 0; i < message.applicationTrace.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.applicationTrace[i]);
                    if (message.frameworkTrace != null && message.frameworkTrace.length)
                        for (var i = 0; i < message.frameworkTrace.length; ++i)
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.frameworkTrace[i]);
                    return writer;
                };

                /**
                 * Encodes the specified DebugInfo message, length delimited. Does not implicitly {@link isuxportal.proto.Error.DebugInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @static
                 * @param {isuxportal.proto.Error.IDebugInfo} message DebugInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DebugInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DebugInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.Error.DebugInfo} DebugInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DebugInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.Error.DebugInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.exception = reader.string();
                            break;
                        case 2:
                            if (!(message.trace && message.trace.length))
                                message.trace = [];
                            message.trace.push(reader.string());
                            break;
                        case 3:
                            if (!(message.applicationTrace && message.applicationTrace.length))
                                message.applicationTrace = [];
                            message.applicationTrace.push(reader.string());
                            break;
                        case 4:
                            if (!(message.frameworkTrace && message.frameworkTrace.length))
                                message.frameworkTrace = [];
                            message.frameworkTrace.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DebugInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.Error.DebugInfo} DebugInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DebugInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DebugInfo message.
                 * @function verify
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DebugInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.exception != null && message.hasOwnProperty("exception"))
                        if (!$util.isString(message.exception))
                            return "exception: string expected";
                    if (message.trace != null && message.hasOwnProperty("trace")) {
                        if (!Array.isArray(message.trace))
                            return "trace: array expected";
                        for (var i = 0; i < message.trace.length; ++i)
                            if (!$util.isString(message.trace[i]))
                                return "trace: string[] expected";
                    }
                    if (message.applicationTrace != null && message.hasOwnProperty("applicationTrace")) {
                        if (!Array.isArray(message.applicationTrace))
                            return "applicationTrace: array expected";
                        for (var i = 0; i < message.applicationTrace.length; ++i)
                            if (!$util.isString(message.applicationTrace[i]))
                                return "applicationTrace: string[] expected";
                    }
                    if (message.frameworkTrace != null && message.hasOwnProperty("frameworkTrace")) {
                        if (!Array.isArray(message.frameworkTrace))
                            return "frameworkTrace: array expected";
                        for (var i = 0; i < message.frameworkTrace.length; ++i)
                            if (!$util.isString(message.frameworkTrace[i]))
                                return "frameworkTrace: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a DebugInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.Error.DebugInfo} DebugInfo
                 */
                DebugInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.Error.DebugInfo)
                        return object;
                    var message = new $root.isuxportal.proto.Error.DebugInfo();
                    if (object.exception != null)
                        message.exception = String(object.exception);
                    if (object.trace) {
                        if (!Array.isArray(object.trace))
                            throw TypeError(".isuxportal.proto.Error.DebugInfo.trace: array expected");
                        message.trace = [];
                        for (var i = 0; i < object.trace.length; ++i)
                            message.trace[i] = String(object.trace[i]);
                    }
                    if (object.applicationTrace) {
                        if (!Array.isArray(object.applicationTrace))
                            throw TypeError(".isuxportal.proto.Error.DebugInfo.applicationTrace: array expected");
                        message.applicationTrace = [];
                        for (var i = 0; i < object.applicationTrace.length; ++i)
                            message.applicationTrace[i] = String(object.applicationTrace[i]);
                    }
                    if (object.frameworkTrace) {
                        if (!Array.isArray(object.frameworkTrace))
                            throw TypeError(".isuxportal.proto.Error.DebugInfo.frameworkTrace: array expected");
                        message.frameworkTrace = [];
                        for (var i = 0; i < object.frameworkTrace.length; ++i)
                            message.frameworkTrace[i] = String(object.frameworkTrace[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a DebugInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @static
                 * @param {isuxportal.proto.Error.DebugInfo} message DebugInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DebugInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.trace = [];
                        object.applicationTrace = [];
                        object.frameworkTrace = [];
                    }
                    if (options.defaults)
                        object.exception = "";
                    if (message.exception != null && message.hasOwnProperty("exception"))
                        object.exception = message.exception;
                    if (message.trace && message.trace.length) {
                        object.trace = [];
                        for (var j = 0; j < message.trace.length; ++j)
                            object.trace[j] = message.trace[j];
                    }
                    if (message.applicationTrace && message.applicationTrace.length) {
                        object.applicationTrace = [];
                        for (var j = 0; j < message.applicationTrace.length; ++j)
                            object.applicationTrace[j] = message.applicationTrace[j];
                    }
                    if (message.frameworkTrace && message.frameworkTrace.length) {
                        object.frameworkTrace = [];
                        for (var j = 0; j < message.frameworkTrace.length; ++j)
                            object.frameworkTrace[j] = message.frameworkTrace[j];
                    }
                    return object;
                };

                /**
                 * Converts this DebugInfo to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DebugInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DebugInfo;
            })();

            return Error;
        })();

        proto.resources = (function() {

            /**
             * Namespace resources.
             * @memberof isuxportal.proto
             * @namespace
             */
            var resources = {};

            resources.BenchmarkJob = (function() {

                /**
                 * Properties of a BenchmarkJob.
                 * @memberof isuxportal.proto.resources
                 * @interface IBenchmarkJob
                 * @property {number|Long|null} [id] BenchmarkJob id
                 * @property {number|Long|null} [teamId] BenchmarkJob teamId
                 * @property {number|Long|null} [targetId] BenchmarkJob targetId
                 * @property {isuxportal.proto.resources.BenchmarkJob.Status|null} [status] BenchmarkJob status
                 * @property {isuxportal.proto.resources.IBenchmarkResult|null} [result] BenchmarkJob result
                 * @property {google.protobuf.ITimestamp|null} [createdAt] BenchmarkJob createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] BenchmarkJob updatedAt
                 * @property {google.protobuf.ITimestamp|null} [startedAt] BenchmarkJob startedAt
                 * @property {google.protobuf.ITimestamp|null} [finishedAt] BenchmarkJob finishedAt
                 * @property {isuxportal.proto.resources.ITeam|null} [team] BenchmarkJob team
                 * @property {isuxportal.proto.resources.IContestantInstance|null} [target] BenchmarkJob target
                 */

                /**
                 * Constructs a new BenchmarkJob.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a BenchmarkJob.
                 * @implements IBenchmarkJob
                 * @constructor
                 * @param {isuxportal.proto.resources.IBenchmarkJob=} [properties] Properties to set
                 */
                function BenchmarkJob(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * BenchmarkJob id.
                 * @member {number|Long} id
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * BenchmarkJob teamId.
                 * @member {number|Long} teamId
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * BenchmarkJob targetId.
                 * @member {number|Long} targetId
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.targetId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * BenchmarkJob status.
                 * @member {isuxportal.proto.resources.BenchmarkJob.Status} status
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.status = 0;

                /**
                 * BenchmarkJob result.
                 * @member {isuxportal.proto.resources.IBenchmarkResult|null|undefined} result
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.result = null;

                /**
                 * BenchmarkJob createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.createdAt = null;

                /**
                 * BenchmarkJob updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.updatedAt = null;

                /**
                 * BenchmarkJob startedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} startedAt
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.startedAt = null;

                /**
                 * BenchmarkJob finishedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} finishedAt
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.finishedAt = null;

                /**
                 * BenchmarkJob team.
                 * @member {isuxportal.proto.resources.ITeam|null|undefined} team
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.team = null;

                /**
                 * BenchmarkJob target.
                 * @member {isuxportal.proto.resources.IContestantInstance|null|undefined} target
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.target = null;

                /**
                 * Creates a new BenchmarkJob instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @static
                 * @param {isuxportal.proto.resources.IBenchmarkJob=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.BenchmarkJob} BenchmarkJob instance
                 */
                BenchmarkJob.create = function create(properties) {
                    return new BenchmarkJob(properties);
                };

                /**
                 * Encodes the specified BenchmarkJob message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkJob.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @static
                 * @param {isuxportal.proto.resources.IBenchmarkJob} message BenchmarkJob message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BenchmarkJob.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                    if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.teamId);
                    if (message.targetId != null && Object.hasOwnProperty.call(message, "targetId"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.targetId);
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
                    if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                        $root.isuxportal.proto.resources.BenchmarkResult.encode(message.result, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.startedAt != null && Object.hasOwnProperty.call(message, "startedAt"))
                        $root.google.protobuf.Timestamp.encode(message.startedAt, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.finishedAt != null && Object.hasOwnProperty.call(message, "finishedAt"))
                        $root.google.protobuf.Timestamp.encode(message.finishedAt, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                        $root.isuxportal.proto.resources.Team.encode(message.team, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                    if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                        $root.isuxportal.proto.resources.ContestantInstance.encode(message.target, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified BenchmarkJob message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkJob.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @static
                 * @param {isuxportal.proto.resources.IBenchmarkJob} message BenchmarkJob message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BenchmarkJob.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a BenchmarkJob message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.BenchmarkJob} BenchmarkJob
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BenchmarkJob.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.BenchmarkJob();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int64();
                            break;
                        case 2:
                            message.teamId = reader.int64();
                            break;
                        case 3:
                            message.targetId = reader.int64();
                            break;
                        case 4:
                            message.status = reader.int32();
                            break;
                        case 5:
                            message.result = $root.isuxportal.proto.resources.BenchmarkResult.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.startedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.finishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 16:
                            message.team = $root.isuxportal.proto.resources.Team.decode(reader, reader.uint32());
                            break;
                        case 17:
                            message.target = $root.isuxportal.proto.resources.ContestantInstance.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a BenchmarkJob message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.BenchmarkJob} BenchmarkJob
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BenchmarkJob.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a BenchmarkJob message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BenchmarkJob.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                            return "teamId: integer|Long expected";
                    if (message.targetId != null && message.hasOwnProperty("targetId"))
                        if (!$util.isInteger(message.targetId) && !(message.targetId && $util.isInteger(message.targetId.low) && $util.isInteger(message.targetId.high)))
                            return "targetId: integer|Long expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                        }
                    if (message.result != null && message.hasOwnProperty("result")) {
                        var error = $root.isuxportal.proto.resources.BenchmarkResult.verify(message.result);
                        if (error)
                            return "result." + error;
                    }
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    if (message.startedAt != null && message.hasOwnProperty("startedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.startedAt);
                        if (error)
                            return "startedAt." + error;
                    }
                    if (message.finishedAt != null && message.hasOwnProperty("finishedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.finishedAt);
                        if (error)
                            return "finishedAt." + error;
                    }
                    if (message.team != null && message.hasOwnProperty("team")) {
                        var error = $root.isuxportal.proto.resources.Team.verify(message.team);
                        if (error)
                            return "team." + error;
                    }
                    if (message.target != null && message.hasOwnProperty("target")) {
                        var error = $root.isuxportal.proto.resources.ContestantInstance.verify(message.target);
                        if (error)
                            return "target." + error;
                    }
                    return null;
                };

                /**
                 * Creates a BenchmarkJob message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.BenchmarkJob} BenchmarkJob
                 */
                BenchmarkJob.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.BenchmarkJob)
                        return object;
                    var message = new $root.isuxportal.proto.resources.BenchmarkJob();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.teamId != null)
                        if ($util.Long)
                            (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                        else if (typeof object.teamId === "string")
                            message.teamId = parseInt(object.teamId, 10);
                        else if (typeof object.teamId === "number")
                            message.teamId = object.teamId;
                        else if (typeof object.teamId === "object")
                            message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                    if (object.targetId != null)
                        if ($util.Long)
                            (message.targetId = $util.Long.fromValue(object.targetId)).unsigned = false;
                        else if (typeof object.targetId === "string")
                            message.targetId = parseInt(object.targetId, 10);
                        else if (typeof object.targetId === "number")
                            message.targetId = object.targetId;
                        else if (typeof object.targetId === "object")
                            message.targetId = new $util.LongBits(object.targetId.low >>> 0, object.targetId.high >>> 0).toNumber();
                    switch (object.status) {
                    case "PENDING":
                    case 0:
                        message.status = 0;
                        break;
                    case "RUNNING":
                    case 1:
                        message.status = 1;
                        break;
                    case "ERRORED":
                    case 2:
                        message.status = 2;
                        break;
                    case "CANCELLED":
                    case 3:
                        message.status = 3;
                        break;
                    case "FINISHED":
                    case 4:
                        message.status = 4;
                        break;
                    }
                    if (object.result != null) {
                        if (typeof object.result !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkJob.result: object expected");
                        message.result = $root.isuxportal.proto.resources.BenchmarkResult.fromObject(object.result);
                    }
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkJob.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkJob.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    if (object.startedAt != null) {
                        if (typeof object.startedAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkJob.startedAt: object expected");
                        message.startedAt = $root.google.protobuf.Timestamp.fromObject(object.startedAt);
                    }
                    if (object.finishedAt != null) {
                        if (typeof object.finishedAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkJob.finishedAt: object expected");
                        message.finishedAt = $root.google.protobuf.Timestamp.fromObject(object.finishedAt);
                    }
                    if (object.team != null) {
                        if (typeof object.team !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkJob.team: object expected");
                        message.team = $root.isuxportal.proto.resources.Team.fromObject(object.team);
                    }
                    if (object.target != null) {
                        if (typeof object.target !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkJob.target: object expected");
                        message.target = $root.isuxportal.proto.resources.ContestantInstance.fromObject(object.target);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a BenchmarkJob message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @static
                 * @param {isuxportal.proto.resources.BenchmarkJob} message BenchmarkJob
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BenchmarkJob.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.teamId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.targetId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.targetId = options.longs === String ? "0" : 0;
                        object.status = options.enums === String ? "PENDING" : 0;
                        object.result = null;
                        object.createdAt = null;
                        object.updatedAt = null;
                        object.startedAt = null;
                        object.finishedAt = null;
                        object.team = null;
                        object.target = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (typeof message.teamId === "number")
                            object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                        else
                            object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                    if (message.targetId != null && message.hasOwnProperty("targetId"))
                        if (typeof message.targetId === "number")
                            object.targetId = options.longs === String ? String(message.targetId) : message.targetId;
                        else
                            object.targetId = options.longs === String ? $util.Long.prototype.toString.call(message.targetId) : options.longs === Number ? new $util.LongBits(message.targetId.low >>> 0, message.targetId.high >>> 0).toNumber() : message.targetId;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.isuxportal.proto.resources.BenchmarkJob.Status[message.status] : message.status;
                    if (message.result != null && message.hasOwnProperty("result"))
                        object.result = $root.isuxportal.proto.resources.BenchmarkResult.toObject(message.result, options);
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    if (message.startedAt != null && message.hasOwnProperty("startedAt"))
                        object.startedAt = $root.google.protobuf.Timestamp.toObject(message.startedAt, options);
                    if (message.finishedAt != null && message.hasOwnProperty("finishedAt"))
                        object.finishedAt = $root.google.protobuf.Timestamp.toObject(message.finishedAt, options);
                    if (message.team != null && message.hasOwnProperty("team"))
                        object.team = $root.isuxportal.proto.resources.Team.toObject(message.team, options);
                    if (message.target != null && message.hasOwnProperty("target"))
                        object.target = $root.isuxportal.proto.resources.ContestantInstance.toObject(message.target, options);
                    return object;
                };

                /**
                 * Converts this BenchmarkJob to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BenchmarkJob.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Status enum.
                 * @name isuxportal.proto.resources.BenchmarkJob.Status
                 * @enum {number}
                 * @property {number} PENDING=0 PENDING value
                 * @property {number} RUNNING=1 RUNNING value
                 * @property {number} ERRORED=2 ERRORED value
                 * @property {number} CANCELLED=3 CANCELLED value
                 * @property {number} FINISHED=4 FINISHED value
                 */
                BenchmarkJob.Status = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "PENDING"] = 0;
                    values[valuesById[1] = "RUNNING"] = 1;
                    values[valuesById[2] = "ERRORED"] = 2;
                    values[valuesById[3] = "CANCELLED"] = 3;
                    values[valuesById[4] = "FINISHED"] = 4;
                    return values;
                })();

                return BenchmarkJob;
            })();

            resources.BenchmarkResult = (function() {

                /**
                 * Properties of a BenchmarkResult.
                 * @memberof isuxportal.proto.resources
                 * @interface IBenchmarkResult
                 * @property {boolean|null} [finished] BenchmarkResult finished
                 * @property {boolean|null} [passed] BenchmarkResult passed
                 * @property {number|Long|null} [score] BenchmarkResult score
                 * @property {isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown|null} [scoreBreakdown] BenchmarkResult scoreBreakdown
                 * @property {string|null} [reason] BenchmarkResult reason
                 * @property {string|null} [stdout] BenchmarkResult stdout
                 * @property {string|null} [stderr] BenchmarkResult stderr
                 * @property {isuxportal.proto.resources.BenchmarkResult.ISurvey|null} [survey] BenchmarkResult survey
                 */

                /**
                 * Constructs a new BenchmarkResult.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a BenchmarkResult.
                 * @implements IBenchmarkResult
                 * @constructor
                 * @param {isuxportal.proto.resources.IBenchmarkResult=} [properties] Properties to set
                 */
                function BenchmarkResult(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * BenchmarkResult finished.
                 * @member {boolean} finished
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.finished = false;

                /**
                 * BenchmarkResult passed.
                 * @member {boolean} passed
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.passed = false;

                /**
                 * BenchmarkResult score.
                 * @member {number|Long} score
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * BenchmarkResult scoreBreakdown.
                 * @member {isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown|null|undefined} scoreBreakdown
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.scoreBreakdown = null;

                /**
                 * BenchmarkResult reason.
                 * @member {string} reason
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.reason = "";

                /**
                 * BenchmarkResult stdout.
                 * @member {string} stdout
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.stdout = "";

                /**
                 * BenchmarkResult stderr.
                 * @member {string} stderr
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.stderr = "";

                /**
                 * BenchmarkResult survey.
                 * @member {isuxportal.proto.resources.BenchmarkResult.ISurvey|null|undefined} survey
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.survey = null;

                /**
                 * Creates a new BenchmarkResult instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @static
                 * @param {isuxportal.proto.resources.IBenchmarkResult=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.BenchmarkResult} BenchmarkResult instance
                 */
                BenchmarkResult.create = function create(properties) {
                    return new BenchmarkResult(properties);
                };

                /**
                 * Encodes the specified BenchmarkResult message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @static
                 * @param {isuxportal.proto.resources.IBenchmarkResult} message BenchmarkResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BenchmarkResult.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.finished != null && Object.hasOwnProperty.call(message, "finished"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.finished);
                    if (message.passed != null && Object.hasOwnProperty.call(message, "passed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.passed);
                    if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.score);
                    if (message.scoreBreakdown != null && Object.hasOwnProperty.call(message, "scoreBreakdown"))
                        $root.isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.encode(message.scoreBreakdown, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.reason);
                    if (message.stdout != null && Object.hasOwnProperty.call(message, "stdout"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.stdout);
                    if (message.stderr != null && Object.hasOwnProperty.call(message, "stderr"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.stderr);
                    if (message.survey != null && Object.hasOwnProperty.call(message, "survey"))
                        $root.isuxportal.proto.resources.BenchmarkResult.Survey.encode(message.survey, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified BenchmarkResult message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @static
                 * @param {isuxportal.proto.resources.IBenchmarkResult} message BenchmarkResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BenchmarkResult.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a BenchmarkResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.BenchmarkResult} BenchmarkResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BenchmarkResult.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.BenchmarkResult();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.finished = reader.bool();
                            break;
                        case 2:
                            message.passed = reader.bool();
                            break;
                        case 3:
                            message.score = reader.int64();
                            break;
                        case 4:
                            message.scoreBreakdown = $root.isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.reason = reader.string();
                            break;
                        case 6:
                            message.stdout = reader.string();
                            break;
                        case 7:
                            message.stderr = reader.string();
                            break;
                        case 8:
                            message.survey = $root.isuxportal.proto.resources.BenchmarkResult.Survey.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a BenchmarkResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.BenchmarkResult} BenchmarkResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BenchmarkResult.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a BenchmarkResult message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BenchmarkResult.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.finished != null && message.hasOwnProperty("finished"))
                        if (typeof message.finished !== "boolean")
                            return "finished: boolean expected";
                    if (message.passed != null && message.hasOwnProperty("passed"))
                        if (typeof message.passed !== "boolean")
                            return "passed: boolean expected";
                    if (message.score != null && message.hasOwnProperty("score"))
                        if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                            return "score: integer|Long expected";
                    if (message.scoreBreakdown != null && message.hasOwnProperty("scoreBreakdown")) {
                        var error = $root.isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.verify(message.scoreBreakdown);
                        if (error)
                            return "scoreBreakdown." + error;
                    }
                    if (message.reason != null && message.hasOwnProperty("reason"))
                        if (!$util.isString(message.reason))
                            return "reason: string expected";
                    if (message.stdout != null && message.hasOwnProperty("stdout"))
                        if (!$util.isString(message.stdout))
                            return "stdout: string expected";
                    if (message.stderr != null && message.hasOwnProperty("stderr"))
                        if (!$util.isString(message.stderr))
                            return "stderr: string expected";
                    if (message.survey != null && message.hasOwnProperty("survey")) {
                        var error = $root.isuxportal.proto.resources.BenchmarkResult.Survey.verify(message.survey);
                        if (error)
                            return "survey." + error;
                    }
                    return null;
                };

                /**
                 * Creates a BenchmarkResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.BenchmarkResult} BenchmarkResult
                 */
                BenchmarkResult.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.BenchmarkResult)
                        return object;
                    var message = new $root.isuxportal.proto.resources.BenchmarkResult();
                    if (object.finished != null)
                        message.finished = Boolean(object.finished);
                    if (object.passed != null)
                        message.passed = Boolean(object.passed);
                    if (object.score != null)
                        if ($util.Long)
                            (message.score = $util.Long.fromValue(object.score)).unsigned = false;
                        else if (typeof object.score === "string")
                            message.score = parseInt(object.score, 10);
                        else if (typeof object.score === "number")
                            message.score = object.score;
                        else if (typeof object.score === "object")
                            message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
                    if (object.scoreBreakdown != null) {
                        if (typeof object.scoreBreakdown !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkResult.scoreBreakdown: object expected");
                        message.scoreBreakdown = $root.isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.fromObject(object.scoreBreakdown);
                    }
                    if (object.reason != null)
                        message.reason = String(object.reason);
                    if (object.stdout != null)
                        message.stdout = String(object.stdout);
                    if (object.stderr != null)
                        message.stderr = String(object.stderr);
                    if (object.survey != null) {
                        if (typeof object.survey !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkResult.survey: object expected");
                        message.survey = $root.isuxportal.proto.resources.BenchmarkResult.Survey.fromObject(object.survey);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a BenchmarkResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @static
                 * @param {isuxportal.proto.resources.BenchmarkResult} message BenchmarkResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BenchmarkResult.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.finished = false;
                        object.passed = false;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.score = options.longs === String ? "0" : 0;
                        object.scoreBreakdown = null;
                        object.reason = "";
                        object.stdout = "";
                        object.stderr = "";
                        object.survey = null;
                    }
                    if (message.finished != null && message.hasOwnProperty("finished"))
                        object.finished = message.finished;
                    if (message.passed != null && message.hasOwnProperty("passed"))
                        object.passed = message.passed;
                    if (message.score != null && message.hasOwnProperty("score"))
                        if (typeof message.score === "number")
                            object.score = options.longs === String ? String(message.score) : message.score;
                        else
                            object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
                    if (message.scoreBreakdown != null && message.hasOwnProperty("scoreBreakdown"))
                        object.scoreBreakdown = $root.isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.toObject(message.scoreBreakdown, options);
                    if (message.reason != null && message.hasOwnProperty("reason"))
                        object.reason = message.reason;
                    if (message.stdout != null && message.hasOwnProperty("stdout"))
                        object.stdout = message.stdout;
                    if (message.stderr != null && message.hasOwnProperty("stderr"))
                        object.stderr = message.stderr;
                    if (message.survey != null && message.hasOwnProperty("survey"))
                        object.survey = $root.isuxportal.proto.resources.BenchmarkResult.Survey.toObject(message.survey, options);
                    return object;
                };

                /**
                 * Converts this BenchmarkResult to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BenchmarkResult.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                BenchmarkResult.ScoreBreakdown = (function() {

                    /**
                     * Properties of a ScoreBreakdown.
                     * @memberof isuxportal.proto.resources.BenchmarkResult
                     * @interface IScoreBreakdown
                     * @property {number|Long|null} [base] ScoreBreakdown base
                     * @property {number|Long|null} [deduction] ScoreBreakdown deduction
                     */

                    /**
                     * Constructs a new ScoreBreakdown.
                     * @memberof isuxportal.proto.resources.BenchmarkResult
                     * @classdesc Represents a ScoreBreakdown.
                     * @implements IScoreBreakdown
                     * @constructor
                     * @param {isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown=} [properties] Properties to set
                     */
                    function ScoreBreakdown(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ScoreBreakdown base.
                     * @member {number|Long} base
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @instance
                     */
                    ScoreBreakdown.prototype.base = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * ScoreBreakdown deduction.
                     * @member {number|Long} deduction
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @instance
                     */
                    ScoreBreakdown.prototype.deduction = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new ScoreBreakdown instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown=} [properties] Properties to set
                     * @returns {isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown} ScoreBreakdown instance
                     */
                    ScoreBreakdown.create = function create(properties) {
                        return new ScoreBreakdown(properties);
                    };

                    /**
                     * Encodes the specified ScoreBreakdown message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown} message ScoreBreakdown message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScoreBreakdown.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.base);
                        if (message.deduction != null && Object.hasOwnProperty.call(message, "deduction"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.deduction);
                        return writer;
                    };

                    /**
                     * Encodes the specified ScoreBreakdown message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown} message ScoreBreakdown message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScoreBreakdown.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ScoreBreakdown message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown} ScoreBreakdown
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScoreBreakdown.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.base = reader.int64();
                                break;
                            case 2:
                                message.deduction = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ScoreBreakdown message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown} ScoreBreakdown
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScoreBreakdown.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ScoreBreakdown message.
                     * @function verify
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ScoreBreakdown.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.base != null && message.hasOwnProperty("base"))
                            if (!$util.isInteger(message.base) && !(message.base && $util.isInteger(message.base.low) && $util.isInteger(message.base.high)))
                                return "base: integer|Long expected";
                        if (message.deduction != null && message.hasOwnProperty("deduction"))
                            if (!$util.isInteger(message.deduction) && !(message.deduction && $util.isInteger(message.deduction.low) && $util.isInteger(message.deduction.high)))
                                return "deduction: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a ScoreBreakdown message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown} ScoreBreakdown
                     */
                    ScoreBreakdown.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown)
                            return object;
                        var message = new $root.isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown();
                        if (object.base != null)
                            if ($util.Long)
                                (message.base = $util.Long.fromValue(object.base)).unsigned = false;
                            else if (typeof object.base === "string")
                                message.base = parseInt(object.base, 10);
                            else if (typeof object.base === "number")
                                message.base = object.base;
                            else if (typeof object.base === "object")
                                message.base = new $util.LongBits(object.base.low >>> 0, object.base.high >>> 0).toNumber();
                        if (object.deduction != null)
                            if ($util.Long)
                                (message.deduction = $util.Long.fromValue(object.deduction)).unsigned = false;
                            else if (typeof object.deduction === "string")
                                message.deduction = parseInt(object.deduction, 10);
                            else if (typeof object.deduction === "number")
                                message.deduction = object.deduction;
                            else if (typeof object.deduction === "object")
                                message.deduction = new $util.LongBits(object.deduction.low >>> 0, object.deduction.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a ScoreBreakdown message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown} message ScoreBreakdown
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ScoreBreakdown.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.base = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.base = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.deduction = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.deduction = options.longs === String ? "0" : 0;
                        }
                        if (message.base != null && message.hasOwnProperty("base"))
                            if (typeof message.base === "number")
                                object.base = options.longs === String ? String(message.base) : message.base;
                            else
                                object.base = options.longs === String ? $util.Long.prototype.toString.call(message.base) : options.longs === Number ? new $util.LongBits(message.base.low >>> 0, message.base.high >>> 0).toNumber() : message.base;
                        if (message.deduction != null && message.hasOwnProperty("deduction"))
                            if (typeof message.deduction === "number")
                                object.deduction = options.longs === String ? String(message.deduction) : message.deduction;
                            else
                                object.deduction = options.longs === String ? $util.Long.prototype.toString.call(message.deduction) : options.longs === Number ? new $util.LongBits(message.deduction.low >>> 0, message.deduction.high >>> 0).toNumber() : message.deduction;
                        return object;
                    };

                    /**
                     * Converts this ScoreBreakdown to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ScoreBreakdown.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ScoreBreakdown;
                })();

                BenchmarkResult.Survey = (function() {

                    /**
                     * Properties of a Survey.
                     * @memberof isuxportal.proto.resources.BenchmarkResult
                     * @interface ISurvey
                     * @property {string|null} [language] Survey language
                     */

                    /**
                     * Constructs a new Survey.
                     * @memberof isuxportal.proto.resources.BenchmarkResult
                     * @classdesc Represents a Survey.
                     * @implements ISurvey
                     * @constructor
                     * @param {isuxportal.proto.resources.BenchmarkResult.ISurvey=} [properties] Properties to set
                     */
                    function Survey(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Survey language.
                     * @member {string} language
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Survey
                     * @instance
                     */
                    Survey.prototype.language = "";

                    /**
                     * Creates a new Survey instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Survey
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.ISurvey=} [properties] Properties to set
                     * @returns {isuxportal.proto.resources.BenchmarkResult.Survey} Survey instance
                     */
                    Survey.create = function create(properties) {
                        return new Survey(properties);
                    };

                    /**
                     * Encodes the specified Survey message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.Survey.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Survey
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.ISurvey} message Survey message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Survey.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.language);
                        return writer;
                    };

                    /**
                     * Encodes the specified Survey message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.Survey.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Survey
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.ISurvey} message Survey message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Survey.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Survey message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Survey
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.resources.BenchmarkResult.Survey} Survey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Survey.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.BenchmarkResult.Survey();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.language = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Survey message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Survey
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.resources.BenchmarkResult.Survey} Survey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Survey.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Survey message.
                     * @function verify
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Survey
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Survey.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.language != null && message.hasOwnProperty("language"))
                            if (!$util.isString(message.language))
                                return "language: string expected";
                        return null;
                    };

                    /**
                     * Creates a Survey message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Survey
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.resources.BenchmarkResult.Survey} Survey
                     */
                    Survey.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.resources.BenchmarkResult.Survey)
                            return object;
                        var message = new $root.isuxportal.proto.resources.BenchmarkResult.Survey();
                        if (object.language != null)
                            message.language = String(object.language);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Survey message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Survey
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.Survey} message Survey
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Survey.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.language = "";
                        if (message.language != null && message.hasOwnProperty("language"))
                            object.language = message.language;
                        return object;
                    };

                    /**
                     * Converts this Survey to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Survey
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Survey.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Survey;
                })();

                return BenchmarkResult;
            })();

            resources.ContestantInstance = (function() {

                /**
                 * Properties of a ContestantInstance.
                 * @memberof isuxportal.proto.resources
                 * @interface IContestantInstance
                 * @property {string|null} [cloudId] ContestantInstance cloudId
                 * @property {number|Long|null} [teamId] ContestantInstance teamId
                 * @property {number|Long|null} [number] ContestantInstance number
                 * @property {string|null} [publicIpv4Address] ContestantInstance publicIpv4Address
                 * @property {string|null} [privateIpv4Address] ContestantInstance privateIpv4Address
                 * @property {isuxportal.proto.resources.ContestantInstance.Status|null} [status] ContestantInstance status
                 * @property {isuxportal.proto.resources.ITeam|null} [team] ContestantInstance team
                 */

                /**
                 * Constructs a new ContestantInstance.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a ContestantInstance.
                 * @implements IContestantInstance
                 * @constructor
                 * @param {isuxportal.proto.resources.IContestantInstance=} [properties] Properties to set
                 */
                function ContestantInstance(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ContestantInstance cloudId.
                 * @member {string} cloudId
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 */
                ContestantInstance.prototype.cloudId = "";

                /**
                 * ContestantInstance teamId.
                 * @member {number|Long} teamId
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 */
                ContestantInstance.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * ContestantInstance number.
                 * @member {number|Long} number
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 */
                ContestantInstance.prototype.number = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * ContestantInstance publicIpv4Address.
                 * @member {string} publicIpv4Address
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 */
                ContestantInstance.prototype.publicIpv4Address = "";

                /**
                 * ContestantInstance privateIpv4Address.
                 * @member {string} privateIpv4Address
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 */
                ContestantInstance.prototype.privateIpv4Address = "";

                /**
                 * ContestantInstance status.
                 * @member {isuxportal.proto.resources.ContestantInstance.Status} status
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 */
                ContestantInstance.prototype.status = 0;

                /**
                 * ContestantInstance team.
                 * @member {isuxportal.proto.resources.ITeam|null|undefined} team
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 */
                ContestantInstance.prototype.team = null;

                /**
                 * Creates a new ContestantInstance instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @static
                 * @param {isuxportal.proto.resources.IContestantInstance=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.ContestantInstance} ContestantInstance instance
                 */
                ContestantInstance.create = function create(properties) {
                    return new ContestantInstance(properties);
                };

                /**
                 * Encodes the specified ContestantInstance message. Does not implicitly {@link isuxportal.proto.resources.ContestantInstance.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @static
                 * @param {isuxportal.proto.resources.IContestantInstance} message ContestantInstance message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ContestantInstance.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.cloudId != null && Object.hasOwnProperty.call(message, "cloudId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.cloudId);
                    if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.teamId);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.number);
                    if (message.publicIpv4Address != null && Object.hasOwnProperty.call(message, "publicIpv4Address"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.publicIpv4Address);
                    if (message.privateIpv4Address != null && Object.hasOwnProperty.call(message, "privateIpv4Address"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.privateIpv4Address);
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
                    if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                        $root.isuxportal.proto.resources.Team.encode(message.team, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ContestantInstance message, length delimited. Does not implicitly {@link isuxportal.proto.resources.ContestantInstance.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @static
                 * @param {isuxportal.proto.resources.IContestantInstance} message ContestantInstance message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ContestantInstance.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ContestantInstance message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.ContestantInstance} ContestantInstance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ContestantInstance.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.ContestantInstance();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.cloudId = reader.string();
                            break;
                        case 2:
                            message.teamId = reader.int64();
                            break;
                        case 3:
                            message.number = reader.int64();
                            break;
                        case 4:
                            message.publicIpv4Address = reader.string();
                            break;
                        case 5:
                            message.privateIpv4Address = reader.string();
                            break;
                        case 6:
                            message.status = reader.int32();
                            break;
                        case 16:
                            message.team = $root.isuxportal.proto.resources.Team.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ContestantInstance message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.ContestantInstance} ContestantInstance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ContestantInstance.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ContestantInstance message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ContestantInstance.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.cloudId != null && message.hasOwnProperty("cloudId"))
                        if (!$util.isString(message.cloudId))
                            return "cloudId: string expected";
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                            return "teamId: integer|Long expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number) && !(message.number && $util.isInteger(message.number.low) && $util.isInteger(message.number.high)))
                            return "number: integer|Long expected";
                    if (message.publicIpv4Address != null && message.hasOwnProperty("publicIpv4Address"))
                        if (!$util.isString(message.publicIpv4Address))
                            return "publicIpv4Address: string expected";
                    if (message.privateIpv4Address != null && message.hasOwnProperty("privateIpv4Address"))
                        if (!$util.isString(message.privateIpv4Address))
                            return "privateIpv4Address: string expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        }
                    if (message.team != null && message.hasOwnProperty("team")) {
                        var error = $root.isuxportal.proto.resources.Team.verify(message.team);
                        if (error)
                            return "team." + error;
                    }
                    return null;
                };

                /**
                 * Creates a ContestantInstance message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.ContestantInstance} ContestantInstance
                 */
                ContestantInstance.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.ContestantInstance)
                        return object;
                    var message = new $root.isuxportal.proto.resources.ContestantInstance();
                    if (object.cloudId != null)
                        message.cloudId = String(object.cloudId);
                    if (object.teamId != null)
                        if ($util.Long)
                            (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                        else if (typeof object.teamId === "string")
                            message.teamId = parseInt(object.teamId, 10);
                        else if (typeof object.teamId === "number")
                            message.teamId = object.teamId;
                        else if (typeof object.teamId === "object")
                            message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                    if (object.number != null)
                        if ($util.Long)
                            (message.number = $util.Long.fromValue(object.number)).unsigned = false;
                        else if (typeof object.number === "string")
                            message.number = parseInt(object.number, 10);
                        else if (typeof object.number === "number")
                            message.number = object.number;
                        else if (typeof object.number === "object")
                            message.number = new $util.LongBits(object.number.low >>> 0, object.number.high >>> 0).toNumber();
                    if (object.publicIpv4Address != null)
                        message.publicIpv4Address = String(object.publicIpv4Address);
                    if (object.privateIpv4Address != null)
                        message.privateIpv4Address = String(object.privateIpv4Address);
                    switch (object.status) {
                    case "UNKNOWN":
                    case 0:
                        message.status = 0;
                        break;
                    case "PENDING":
                    case 1:
                        message.status = 1;
                        break;
                    case "MODIFYING":
                    case 2:
                        message.status = 2;
                        break;
                    case "STOPPED":
                    case 3:
                        message.status = 3;
                        break;
                    case "RUNNING":
                    case 4:
                        message.status = 4;
                        break;
                    case "TERMINATED":
                    case 5:
                        message.status = 5;
                        break;
                    }
                    if (object.team != null) {
                        if (typeof object.team !== "object")
                            throw TypeError(".isuxportal.proto.resources.ContestantInstance.team: object expected");
                        message.team = $root.isuxportal.proto.resources.Team.fromObject(object.team);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ContestantInstance message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @static
                 * @param {isuxportal.proto.resources.ContestantInstance} message ContestantInstance
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ContestantInstance.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.cloudId = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.teamId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.number = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.number = options.longs === String ? "0" : 0;
                        object.publicIpv4Address = "";
                        object.privateIpv4Address = "";
                        object.status = options.enums === String ? "UNKNOWN" : 0;
                        object.team = null;
                    }
                    if (message.cloudId != null && message.hasOwnProperty("cloudId"))
                        object.cloudId = message.cloudId;
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (typeof message.teamId === "number")
                            object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                        else
                            object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (typeof message.number === "number")
                            object.number = options.longs === String ? String(message.number) : message.number;
                        else
                            object.number = options.longs === String ? $util.Long.prototype.toString.call(message.number) : options.longs === Number ? new $util.LongBits(message.number.low >>> 0, message.number.high >>> 0).toNumber() : message.number;
                    if (message.publicIpv4Address != null && message.hasOwnProperty("publicIpv4Address"))
                        object.publicIpv4Address = message.publicIpv4Address;
                    if (message.privateIpv4Address != null && message.hasOwnProperty("privateIpv4Address"))
                        object.privateIpv4Address = message.privateIpv4Address;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.isuxportal.proto.resources.ContestantInstance.Status[message.status] : message.status;
                    if (message.team != null && message.hasOwnProperty("team"))
                        object.team = $root.isuxportal.proto.resources.Team.toObject(message.team, options);
                    return object;
                };

                /**
                 * Converts this ContestantInstance to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ContestantInstance.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Status enum.
                 * @name isuxportal.proto.resources.ContestantInstance.Status
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} PENDING=1 PENDING value
                 * @property {number} MODIFYING=2 MODIFYING value
                 * @property {number} STOPPED=3 STOPPED value
                 * @property {number} RUNNING=4 RUNNING value
                 * @property {number} TERMINATED=5 TERMINATED value
                 */
                ContestantInstance.Status = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "PENDING"] = 1;
                    values[valuesById[2] = "MODIFYING"] = 2;
                    values[valuesById[3] = "STOPPED"] = 3;
                    values[valuesById[4] = "RUNNING"] = 4;
                    values[valuesById[5] = "TERMINATED"] = 5;
                    return values;
                })();

                return ContestantInstance;
            })();

            resources.Team = (function() {

                /**
                 * Properties of a Team.
                 * @memberof isuxportal.proto.resources
                 * @interface ITeam
                 * @property {number|Long|null} [id] Team id
                 * @property {string|null} [name] Team name
                 * @property {number|Long|null} [leaderId] Team leaderId
                 * @property {Array.<number|Long>|null} [memberIds] Team memberIds
                 * @property {boolean|null} [finalParticipation] Team finalParticipation
                 * @property {boolean|null} [hidden] Team hidden
                 * @property {boolean|null} [withdrawn] Team withdrawn
                 * @property {isuxportal.proto.resources.Team.ITeamDetail|null} [detail] Team detail
                 * @property {isuxportal.proto.resources.IContestant|null} [leader] Team leader
                 * @property {Array.<isuxportal.proto.resources.IContestant>|null} [members] Team members
                 */

                /**
                 * Constructs a new Team.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a Team.
                 * @implements ITeam
                 * @constructor
                 * @param {isuxportal.proto.resources.ITeam=} [properties] Properties to set
                 */
                function Team(properties) {
                    this.memberIds = [];
                    this.members = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Team id.
                 * @member {number|Long} id
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Team name.
                 * @member {string} name
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.name = "";

                /**
                 * Team leaderId.
                 * @member {number|Long} leaderId
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.leaderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Team memberIds.
                 * @member {Array.<number|Long>} memberIds
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.memberIds = $util.emptyArray;

                /**
                 * Team finalParticipation.
                 * @member {boolean} finalParticipation
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.finalParticipation = false;

                /**
                 * Team hidden.
                 * @member {boolean} hidden
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.hidden = false;

                /**
                 * Team withdrawn.
                 * @member {boolean} withdrawn
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.withdrawn = false;

                /**
                 * Team detail.
                 * @member {isuxportal.proto.resources.Team.ITeamDetail|null|undefined} detail
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.detail = null;

                /**
                 * Team leader.
                 * @member {isuxportal.proto.resources.IContestant|null|undefined} leader
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.leader = null;

                /**
                 * Team members.
                 * @member {Array.<isuxportal.proto.resources.IContestant>} members
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.members = $util.emptyArray;

                /**
                 * Creates a new Team instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.Team
                 * @static
                 * @param {isuxportal.proto.resources.ITeam=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.Team} Team instance
                 */
                Team.create = function create(properties) {
                    return new Team(properties);
                };

                /**
                 * Encodes the specified Team message. Does not implicitly {@link isuxportal.proto.resources.Team.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.Team
                 * @static
                 * @param {isuxportal.proto.resources.ITeam} message Team message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Team.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.leaderId != null && Object.hasOwnProperty.call(message, "leaderId"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.leaderId);
                    if (message.memberIds != null && message.memberIds.length) {
                        writer.uint32(/* id 4, wireType 2 =*/34).fork();
                        for (var i = 0; i < message.memberIds.length; ++i)
                            writer.int64(message.memberIds[i]);
                        writer.ldelim();
                    }
                    if (message.finalParticipation != null && Object.hasOwnProperty.call(message, "finalParticipation"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.finalParticipation);
                    if (message.hidden != null && Object.hasOwnProperty.call(message, "hidden"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.hidden);
                    if (message.withdrawn != null && Object.hasOwnProperty.call(message, "withdrawn"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.withdrawn);
                    if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                        $root.isuxportal.proto.resources.Team.TeamDetail.encode(message.detail, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.leader != null && Object.hasOwnProperty.call(message, "leader"))
                        $root.isuxportal.proto.resources.Contestant.encode(message.leader, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                    if (message.members != null && message.members.length)
                        for (var i = 0; i < message.members.length; ++i)
                            $root.isuxportal.proto.resources.Contestant.encode(message.members[i], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Team message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Team.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.Team
                 * @static
                 * @param {isuxportal.proto.resources.ITeam} message Team message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Team.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Team message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.Team
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.Team} Team
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Team.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Team();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int64();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.leaderId = reader.int64();
                            break;
                        case 4:
                            if (!(message.memberIds && message.memberIds.length))
                                message.memberIds = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.memberIds.push(reader.int64());
                            } else
                                message.memberIds.push(reader.int64());
                            break;
                        case 5:
                            message.finalParticipation = reader.bool();
                            break;
                        case 6:
                            message.hidden = reader.bool();
                            break;
                        case 7:
                            message.withdrawn = reader.bool();
                            break;
                        case 8:
                            message.detail = $root.isuxportal.proto.resources.Team.TeamDetail.decode(reader, reader.uint32());
                            break;
                        case 16:
                            message.leader = $root.isuxportal.proto.resources.Contestant.decode(reader, reader.uint32());
                            break;
                        case 17:
                            if (!(message.members && message.members.length))
                                message.members = [];
                            message.members.push($root.isuxportal.proto.resources.Contestant.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Team message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.Team
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.Team} Team
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Team.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Team message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.Team
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Team.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.leaderId != null && message.hasOwnProperty("leaderId"))
                        if (!$util.isInteger(message.leaderId) && !(message.leaderId && $util.isInteger(message.leaderId.low) && $util.isInteger(message.leaderId.high)))
                            return "leaderId: integer|Long expected";
                    if (message.memberIds != null && message.hasOwnProperty("memberIds")) {
                        if (!Array.isArray(message.memberIds))
                            return "memberIds: array expected";
                        for (var i = 0; i < message.memberIds.length; ++i)
                            if (!$util.isInteger(message.memberIds[i]) && !(message.memberIds[i] && $util.isInteger(message.memberIds[i].low) && $util.isInteger(message.memberIds[i].high)))
                                return "memberIds: integer|Long[] expected";
                    }
                    if (message.finalParticipation != null && message.hasOwnProperty("finalParticipation"))
                        if (typeof message.finalParticipation !== "boolean")
                            return "finalParticipation: boolean expected";
                    if (message.hidden != null && message.hasOwnProperty("hidden"))
                        if (typeof message.hidden !== "boolean")
                            return "hidden: boolean expected";
                    if (message.withdrawn != null && message.hasOwnProperty("withdrawn"))
                        if (typeof message.withdrawn !== "boolean")
                            return "withdrawn: boolean expected";
                    if (message.detail != null && message.hasOwnProperty("detail")) {
                        var error = $root.isuxportal.proto.resources.Team.TeamDetail.verify(message.detail);
                        if (error)
                            return "detail." + error;
                    }
                    if (message.leader != null && message.hasOwnProperty("leader")) {
                        var error = $root.isuxportal.proto.resources.Contestant.verify(message.leader);
                        if (error)
                            return "leader." + error;
                    }
                    if (message.members != null && message.hasOwnProperty("members")) {
                        if (!Array.isArray(message.members))
                            return "members: array expected";
                        for (var i = 0; i < message.members.length; ++i) {
                            var error = $root.isuxportal.proto.resources.Contestant.verify(message.members[i]);
                            if (error)
                                return "members." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Team message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.Team
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.Team} Team
                 */
                Team.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.Team)
                        return object;
                    var message = new $root.isuxportal.proto.resources.Team();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.leaderId != null)
                        if ($util.Long)
                            (message.leaderId = $util.Long.fromValue(object.leaderId)).unsigned = false;
                        else if (typeof object.leaderId === "string")
                            message.leaderId = parseInt(object.leaderId, 10);
                        else if (typeof object.leaderId === "number")
                            message.leaderId = object.leaderId;
                        else if (typeof object.leaderId === "object")
                            message.leaderId = new $util.LongBits(object.leaderId.low >>> 0, object.leaderId.high >>> 0).toNumber();
                    if (object.memberIds) {
                        if (!Array.isArray(object.memberIds))
                            throw TypeError(".isuxportal.proto.resources.Team.memberIds: array expected");
                        message.memberIds = [];
                        for (var i = 0; i < object.memberIds.length; ++i)
                            if ($util.Long)
                                (message.memberIds[i] = $util.Long.fromValue(object.memberIds[i])).unsigned = false;
                            else if (typeof object.memberIds[i] === "string")
                                message.memberIds[i] = parseInt(object.memberIds[i], 10);
                            else if (typeof object.memberIds[i] === "number")
                                message.memberIds[i] = object.memberIds[i];
                            else if (typeof object.memberIds[i] === "object")
                                message.memberIds[i] = new $util.LongBits(object.memberIds[i].low >>> 0, object.memberIds[i].high >>> 0).toNumber();
                    }
                    if (object.finalParticipation != null)
                        message.finalParticipation = Boolean(object.finalParticipation);
                    if (object.hidden != null)
                        message.hidden = Boolean(object.hidden);
                    if (object.withdrawn != null)
                        message.withdrawn = Boolean(object.withdrawn);
                    if (object.detail != null) {
                        if (typeof object.detail !== "object")
                            throw TypeError(".isuxportal.proto.resources.Team.detail: object expected");
                        message.detail = $root.isuxportal.proto.resources.Team.TeamDetail.fromObject(object.detail);
                    }
                    if (object.leader != null) {
                        if (typeof object.leader !== "object")
                            throw TypeError(".isuxportal.proto.resources.Team.leader: object expected");
                        message.leader = $root.isuxportal.proto.resources.Contestant.fromObject(object.leader);
                    }
                    if (object.members) {
                        if (!Array.isArray(object.members))
                            throw TypeError(".isuxportal.proto.resources.Team.members: array expected");
                        message.members = [];
                        for (var i = 0; i < object.members.length; ++i) {
                            if (typeof object.members[i] !== "object")
                                throw TypeError(".isuxportal.proto.resources.Team.members: object expected");
                            message.members[i] = $root.isuxportal.proto.resources.Contestant.fromObject(object.members[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Team message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.Team
                 * @static
                 * @param {isuxportal.proto.resources.Team} message Team
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Team.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.memberIds = [];
                        object.members = [];
                    }
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        object.name = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.leaderId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.leaderId = options.longs === String ? "0" : 0;
                        object.finalParticipation = false;
                        object.hidden = false;
                        object.withdrawn = false;
                        object.detail = null;
                        object.leader = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.leaderId != null && message.hasOwnProperty("leaderId"))
                        if (typeof message.leaderId === "number")
                            object.leaderId = options.longs === String ? String(message.leaderId) : message.leaderId;
                        else
                            object.leaderId = options.longs === String ? $util.Long.prototype.toString.call(message.leaderId) : options.longs === Number ? new $util.LongBits(message.leaderId.low >>> 0, message.leaderId.high >>> 0).toNumber() : message.leaderId;
                    if (message.memberIds && message.memberIds.length) {
                        object.memberIds = [];
                        for (var j = 0; j < message.memberIds.length; ++j)
                            if (typeof message.memberIds[j] === "number")
                                object.memberIds[j] = options.longs === String ? String(message.memberIds[j]) : message.memberIds[j];
                            else
                                object.memberIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.memberIds[j]) : options.longs === Number ? new $util.LongBits(message.memberIds[j].low >>> 0, message.memberIds[j].high >>> 0).toNumber() : message.memberIds[j];
                    }
                    if (message.finalParticipation != null && message.hasOwnProperty("finalParticipation"))
                        object.finalParticipation = message.finalParticipation;
                    if (message.hidden != null && message.hasOwnProperty("hidden"))
                        object.hidden = message.hidden;
                    if (message.withdrawn != null && message.hasOwnProperty("withdrawn"))
                        object.withdrawn = message.withdrawn;
                    if (message.detail != null && message.hasOwnProperty("detail"))
                        object.detail = $root.isuxportal.proto.resources.Team.TeamDetail.toObject(message.detail, options);
                    if (message.leader != null && message.hasOwnProperty("leader"))
                        object.leader = $root.isuxportal.proto.resources.Contestant.toObject(message.leader, options);
                    if (message.members && message.members.length) {
                        object.members = [];
                        for (var j = 0; j < message.members.length; ++j)
                            object.members[j] = $root.isuxportal.proto.resources.Contestant.toObject(message.members[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Team to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Team.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Team.TeamDetail = (function() {

                    /**
                     * Properties of a TeamDetail.
                     * @memberof isuxportal.proto.resources.Team
                     * @interface ITeamDetail
                     * @property {string|null} [emailAddress] TeamDetail emailAddress
                     * @property {number|Long|null} [benchmarkTargetId] TeamDetail benchmarkTargetId
                     * @property {string|null} [inviteToken] TeamDetail inviteToken
                     */

                    /**
                     * Constructs a new TeamDetail.
                     * @memberof isuxportal.proto.resources.Team
                     * @classdesc Represents a TeamDetail.
                     * @implements ITeamDetail
                     * @constructor
                     * @param {isuxportal.proto.resources.Team.ITeamDetail=} [properties] Properties to set
                     */
                    function TeamDetail(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TeamDetail emailAddress.
                     * @member {string} emailAddress
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @instance
                     */
                    TeamDetail.prototype.emailAddress = "";

                    /**
                     * TeamDetail benchmarkTargetId.
                     * @member {number|Long} benchmarkTargetId
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @instance
                     */
                    TeamDetail.prototype.benchmarkTargetId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * TeamDetail inviteToken.
                     * @member {string} inviteToken
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @instance
                     */
                    TeamDetail.prototype.inviteToken = "";

                    /**
                     * Creates a new TeamDetail instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @static
                     * @param {isuxportal.proto.resources.Team.ITeamDetail=} [properties] Properties to set
                     * @returns {isuxportal.proto.resources.Team.TeamDetail} TeamDetail instance
                     */
                    TeamDetail.create = function create(properties) {
                        return new TeamDetail(properties);
                    };

                    /**
                     * Encodes the specified TeamDetail message. Does not implicitly {@link isuxportal.proto.resources.Team.TeamDetail.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @static
                     * @param {isuxportal.proto.resources.Team.ITeamDetail} message TeamDetail message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TeamDetail.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.emailAddress != null && Object.hasOwnProperty.call(message, "emailAddress"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.emailAddress);
                        if (message.benchmarkTargetId != null && Object.hasOwnProperty.call(message, "benchmarkTargetId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.benchmarkTargetId);
                        if (message.inviteToken != null && Object.hasOwnProperty.call(message, "inviteToken"))
                            writer.uint32(/* id 16, wireType 2 =*/130).string(message.inviteToken);
                        return writer;
                    };

                    /**
                     * Encodes the specified TeamDetail message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Team.TeamDetail.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @static
                     * @param {isuxportal.proto.resources.Team.ITeamDetail} message TeamDetail message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TeamDetail.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TeamDetail message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.resources.Team.TeamDetail} TeamDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TeamDetail.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Team.TeamDetail();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.emailAddress = reader.string();
                                break;
                            case 2:
                                message.benchmarkTargetId = reader.int64();
                                break;
                            case 16:
                                message.inviteToken = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TeamDetail message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.resources.Team.TeamDetail} TeamDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TeamDetail.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TeamDetail message.
                     * @function verify
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TeamDetail.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.emailAddress != null && message.hasOwnProperty("emailAddress"))
                            if (!$util.isString(message.emailAddress))
                                return "emailAddress: string expected";
                        if (message.benchmarkTargetId != null && message.hasOwnProperty("benchmarkTargetId"))
                            if (!$util.isInteger(message.benchmarkTargetId) && !(message.benchmarkTargetId && $util.isInteger(message.benchmarkTargetId.low) && $util.isInteger(message.benchmarkTargetId.high)))
                                return "benchmarkTargetId: integer|Long expected";
                        if (message.inviteToken != null && message.hasOwnProperty("inviteToken"))
                            if (!$util.isString(message.inviteToken))
                                return "inviteToken: string expected";
                        return null;
                    };

                    /**
                     * Creates a TeamDetail message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.resources.Team.TeamDetail} TeamDetail
                     */
                    TeamDetail.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.resources.Team.TeamDetail)
                            return object;
                        var message = new $root.isuxportal.proto.resources.Team.TeamDetail();
                        if (object.emailAddress != null)
                            message.emailAddress = String(object.emailAddress);
                        if (object.benchmarkTargetId != null)
                            if ($util.Long)
                                (message.benchmarkTargetId = $util.Long.fromValue(object.benchmarkTargetId)).unsigned = false;
                            else if (typeof object.benchmarkTargetId === "string")
                                message.benchmarkTargetId = parseInt(object.benchmarkTargetId, 10);
                            else if (typeof object.benchmarkTargetId === "number")
                                message.benchmarkTargetId = object.benchmarkTargetId;
                            else if (typeof object.benchmarkTargetId === "object")
                                message.benchmarkTargetId = new $util.LongBits(object.benchmarkTargetId.low >>> 0, object.benchmarkTargetId.high >>> 0).toNumber();
                        if (object.inviteToken != null)
                            message.inviteToken = String(object.inviteToken);
                        return message;
                    };

                    /**
                     * Creates a plain object from a TeamDetail message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @static
                     * @param {isuxportal.proto.resources.Team.TeamDetail} message TeamDetail
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TeamDetail.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.emailAddress = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.benchmarkTargetId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.benchmarkTargetId = options.longs === String ? "0" : 0;
                            object.inviteToken = "";
                        }
                        if (message.emailAddress != null && message.hasOwnProperty("emailAddress"))
                            object.emailAddress = message.emailAddress;
                        if (message.benchmarkTargetId != null && message.hasOwnProperty("benchmarkTargetId"))
                            if (typeof message.benchmarkTargetId === "number")
                                object.benchmarkTargetId = options.longs === String ? String(message.benchmarkTargetId) : message.benchmarkTargetId;
                            else
                                object.benchmarkTargetId = options.longs === String ? $util.Long.prototype.toString.call(message.benchmarkTargetId) : options.longs === Number ? new $util.LongBits(message.benchmarkTargetId.low >>> 0, message.benchmarkTargetId.high >>> 0).toNumber() : message.benchmarkTargetId;
                        if (message.inviteToken != null && message.hasOwnProperty("inviteToken"))
                            object.inviteToken = message.inviteToken;
                        return object;
                    };

                    /**
                     * Converts this TeamDetail to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TeamDetail.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TeamDetail;
                })();

                return Team;
            })();

            resources.Contestant = (function() {

                /**
                 * Properties of a Contestant.
                 * @memberof isuxportal.proto.resources
                 * @interface IContestant
                 * @property {number|Long|null} [id] Contestant id
                 * @property {number|Long|null} [teamId] Contestant teamId
                 * @property {string|null} [name] Contestant name
                 * @property {isuxportal.proto.resources.Contestant.IContestantDetail|null} [contestantDetail] Contestant contestantDetail
                 */

                /**
                 * Constructs a new Contestant.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a Contestant.
                 * @implements IContestant
                 * @constructor
                 * @param {isuxportal.proto.resources.IContestant=} [properties] Properties to set
                 */
                function Contestant(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Contestant id.
                 * @member {number|Long} id
                 * @memberof isuxportal.proto.resources.Contestant
                 * @instance
                 */
                Contestant.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Contestant teamId.
                 * @member {number|Long} teamId
                 * @memberof isuxportal.proto.resources.Contestant
                 * @instance
                 */
                Contestant.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Contestant name.
                 * @member {string} name
                 * @memberof isuxportal.proto.resources.Contestant
                 * @instance
                 */
                Contestant.prototype.name = "";

                /**
                 * Contestant contestantDetail.
                 * @member {isuxportal.proto.resources.Contestant.IContestantDetail|null|undefined} contestantDetail
                 * @memberof isuxportal.proto.resources.Contestant
                 * @instance
                 */
                Contestant.prototype.contestantDetail = null;

                /**
                 * Creates a new Contestant instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.Contestant
                 * @static
                 * @param {isuxportal.proto.resources.IContestant=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.Contestant} Contestant instance
                 */
                Contestant.create = function create(properties) {
                    return new Contestant(properties);
                };

                /**
                 * Encodes the specified Contestant message. Does not implicitly {@link isuxportal.proto.resources.Contestant.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.Contestant
                 * @static
                 * @param {isuxportal.proto.resources.IContestant} message Contestant message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Contestant.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                    if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.teamId);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                    if (message.contestantDetail != null && Object.hasOwnProperty.call(message, "contestantDetail"))
                        $root.isuxportal.proto.resources.Contestant.ContestantDetail.encode(message.contestantDetail, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Contestant message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Contestant.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.Contestant
                 * @static
                 * @param {isuxportal.proto.resources.IContestant} message Contestant message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Contestant.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Contestant message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.Contestant
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.Contestant} Contestant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Contestant.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Contestant();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int64();
                            break;
                        case 2:
                            message.teamId = reader.int64();
                            break;
                        case 3:
                            message.name = reader.string();
                            break;
                        case 7:
                            message.contestantDetail = $root.isuxportal.proto.resources.Contestant.ContestantDetail.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Contestant message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.Contestant
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.Contestant} Contestant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Contestant.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Contestant message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.Contestant
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Contestant.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                            return "teamId: integer|Long expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.contestantDetail != null && message.hasOwnProperty("contestantDetail")) {
                        var error = $root.isuxportal.proto.resources.Contestant.ContestantDetail.verify(message.contestantDetail);
                        if (error)
                            return "contestantDetail." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Contestant message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.Contestant
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.Contestant} Contestant
                 */
                Contestant.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.Contestant)
                        return object;
                    var message = new $root.isuxportal.proto.resources.Contestant();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.teamId != null)
                        if ($util.Long)
                            (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                        else if (typeof object.teamId === "string")
                            message.teamId = parseInt(object.teamId, 10);
                        else if (typeof object.teamId === "number")
                            message.teamId = object.teamId;
                        else if (typeof object.teamId === "object")
                            message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.contestantDetail != null) {
                        if (typeof object.contestantDetail !== "object")
                            throw TypeError(".isuxportal.proto.resources.Contestant.contestantDetail: object expected");
                        message.contestantDetail = $root.isuxportal.proto.resources.Contestant.ContestantDetail.fromObject(object.contestantDetail);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Contestant message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.Contestant
                 * @static
                 * @param {isuxportal.proto.resources.Contestant} message Contestant
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Contestant.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.teamId = options.longs === String ? "0" : 0;
                        object.name = "";
                        object.contestantDetail = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (typeof message.teamId === "number")
                            object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                        else
                            object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.contestantDetail != null && message.hasOwnProperty("contestantDetail"))
                        object.contestantDetail = $root.isuxportal.proto.resources.Contestant.ContestantDetail.toObject(message.contestantDetail, options);
                    return object;
                };

                /**
                 * Converts this Contestant to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.Contestant
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Contestant.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Contestant.ContestantDetail = (function() {

                    /**
                     * Properties of a ContestantDetail.
                     * @memberof isuxportal.proto.resources.Contestant
                     * @interface IContestantDetail
                     * @property {string|null} [githubLogin] ContestantDetail githubLogin
                     * @property {string|null} [discordTag] ContestantDetail discordTag
                     * @property {boolean|null} [isStudent] ContestantDetail isStudent
                     * @property {string|null} [avatarUrl] ContestantDetail avatarUrl
                     */

                    /**
                     * Constructs a new ContestantDetail.
                     * @memberof isuxportal.proto.resources.Contestant
                     * @classdesc Represents a ContestantDetail.
                     * @implements IContestantDetail
                     * @constructor
                     * @param {isuxportal.proto.resources.Contestant.IContestantDetail=} [properties] Properties to set
                     */
                    function ContestantDetail(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ContestantDetail githubLogin.
                     * @member {string} githubLogin
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @instance
                     */
                    ContestantDetail.prototype.githubLogin = "";

                    /**
                     * ContestantDetail discordTag.
                     * @member {string} discordTag
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @instance
                     */
                    ContestantDetail.prototype.discordTag = "";

                    /**
                     * ContestantDetail isStudent.
                     * @member {boolean} isStudent
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @instance
                     */
                    ContestantDetail.prototype.isStudent = false;

                    /**
                     * ContestantDetail avatarUrl.
                     * @member {string} avatarUrl
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @instance
                     */
                    ContestantDetail.prototype.avatarUrl = "";

                    /**
                     * Creates a new ContestantDetail instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @static
                     * @param {isuxportal.proto.resources.Contestant.IContestantDetail=} [properties] Properties to set
                     * @returns {isuxportal.proto.resources.Contestant.ContestantDetail} ContestantDetail instance
                     */
                    ContestantDetail.create = function create(properties) {
                        return new ContestantDetail(properties);
                    };

                    /**
                     * Encodes the specified ContestantDetail message. Does not implicitly {@link isuxportal.proto.resources.Contestant.ContestantDetail.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @static
                     * @param {isuxportal.proto.resources.Contestant.IContestantDetail} message ContestantDetail message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ContestantDetail.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.githubLogin != null && Object.hasOwnProperty.call(message, "githubLogin"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.githubLogin);
                        if (message.discordTag != null && Object.hasOwnProperty.call(message, "discordTag"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.discordTag);
                        if (message.isStudent != null && Object.hasOwnProperty.call(message, "isStudent"))
                            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isStudent);
                        if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatarUrl);
                        return writer;
                    };

                    /**
                     * Encodes the specified ContestantDetail message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Contestant.ContestantDetail.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @static
                     * @param {isuxportal.proto.resources.Contestant.IContestantDetail} message ContestantDetail message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ContestantDetail.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ContestantDetail message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.resources.Contestant.ContestantDetail} ContestantDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ContestantDetail.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Contestant.ContestantDetail();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.githubLogin = reader.string();
                                break;
                            case 2:
                                message.discordTag = reader.string();
                                break;
                            case 3:
                                message.isStudent = reader.bool();
                                break;
                            case 4:
                                message.avatarUrl = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ContestantDetail message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.resources.Contestant.ContestantDetail} ContestantDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ContestantDetail.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ContestantDetail message.
                     * @function verify
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ContestantDetail.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.githubLogin != null && message.hasOwnProperty("githubLogin"))
                            if (!$util.isString(message.githubLogin))
                                return "githubLogin: string expected";
                        if (message.discordTag != null && message.hasOwnProperty("discordTag"))
                            if (!$util.isString(message.discordTag))
                                return "discordTag: string expected";
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            if (typeof message.isStudent !== "boolean")
                                return "isStudent: boolean expected";
                        if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                            if (!$util.isString(message.avatarUrl))
                                return "avatarUrl: string expected";
                        return null;
                    };

                    /**
                     * Creates a ContestantDetail message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.resources.Contestant.ContestantDetail} ContestantDetail
                     */
                    ContestantDetail.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.resources.Contestant.ContestantDetail)
                            return object;
                        var message = new $root.isuxportal.proto.resources.Contestant.ContestantDetail();
                        if (object.githubLogin != null)
                            message.githubLogin = String(object.githubLogin);
                        if (object.discordTag != null)
                            message.discordTag = String(object.discordTag);
                        if (object.isStudent != null)
                            message.isStudent = Boolean(object.isStudent);
                        if (object.avatarUrl != null)
                            message.avatarUrl = String(object.avatarUrl);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ContestantDetail message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @static
                     * @param {isuxportal.proto.resources.Contestant.ContestantDetail} message ContestantDetail
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ContestantDetail.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.githubLogin = "";
                            object.discordTag = "";
                            object.isStudent = false;
                            object.avatarUrl = "";
                        }
                        if (message.githubLogin != null && message.hasOwnProperty("githubLogin"))
                            object.githubLogin = message.githubLogin;
                        if (message.discordTag != null && message.hasOwnProperty("discordTag"))
                            object.discordTag = message.discordTag;
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            object.isStudent = message.isStudent;
                        if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                            object.avatarUrl = message.avatarUrl;
                        return object;
                    };

                    /**
                     * Converts this ContestantDetail to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ContestantDetail.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ContestantDetail;
                })();

                return Contestant;
            })();

            resources.Clarification = (function() {

                /**
                 * Properties of a Clarification.
                 * @memberof isuxportal.proto.resources
                 * @interface IClarification
                 * @property {number|Long|null} [id] Clarification id
                 * @property {number|Long|null} [teamId] Clarification teamId
                 * @property {boolean|null} [answered] Clarification answered
                 * @property {boolean|null} [disclosed] Clarification disclosed
                 * @property {string|null} [question] Clarification question
                 * @property {string|null} [answer] Clarification answer
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Clarification createdAt
                 * @property {google.protobuf.ITimestamp|null} [answeredAt] Clarification answeredAt
                 * @property {isuxportal.proto.resources.ITeam|null} [team] Clarification team
                 */

                /**
                 * Constructs a new Clarification.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a Clarification.
                 * @implements IClarification
                 * @constructor
                 * @param {isuxportal.proto.resources.IClarification=} [properties] Properties to set
                 */
                function Clarification(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Clarification id.
                 * @member {number|Long} id
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Clarification teamId.
                 * @member {number|Long} teamId
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Clarification answered.
                 * @member {boolean} answered
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.answered = false;

                /**
                 * Clarification disclosed.
                 * @member {boolean} disclosed
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.disclosed = false;

                /**
                 * Clarification question.
                 * @member {string} question
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.question = "";

                /**
                 * Clarification answer.
                 * @member {string} answer
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.answer = "";

                /**
                 * Clarification createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.createdAt = null;

                /**
                 * Clarification answeredAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} answeredAt
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.answeredAt = null;

                /**
                 * Clarification team.
                 * @member {isuxportal.proto.resources.ITeam|null|undefined} team
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.team = null;

                /**
                 * Creates a new Clarification instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.Clarification
                 * @static
                 * @param {isuxportal.proto.resources.IClarification=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.Clarification} Clarification instance
                 */
                Clarification.create = function create(properties) {
                    return new Clarification(properties);
                };

                /**
                 * Encodes the specified Clarification message. Does not implicitly {@link isuxportal.proto.resources.Clarification.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.Clarification
                 * @static
                 * @param {isuxportal.proto.resources.IClarification} message Clarification message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Clarification.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                    if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.teamId);
                    if (message.answered != null && Object.hasOwnProperty.call(message, "answered"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.answered);
                    if (message.disclosed != null && Object.hasOwnProperty.call(message, "disclosed"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.disclosed);
                    if (message.question != null && Object.hasOwnProperty.call(message, "question"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.question);
                    if (message.answer != null && Object.hasOwnProperty.call(message, "answer"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.answer);
                    if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.answeredAt != null && Object.hasOwnProperty.call(message, "answeredAt"))
                        $root.google.protobuf.Timestamp.encode(message.answeredAt, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                        $root.isuxportal.proto.resources.Team.encode(message.team, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Clarification message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Clarification.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.Clarification
                 * @static
                 * @param {isuxportal.proto.resources.IClarification} message Clarification message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Clarification.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Clarification message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.Clarification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.Clarification} Clarification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Clarification.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Clarification();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int64();
                            break;
                        case 2:
                            message.teamId = reader.int64();
                            break;
                        case 3:
                            message.answered = reader.bool();
                            break;
                        case 4:
                            message.disclosed = reader.bool();
                            break;
                        case 5:
                            message.question = reader.string();
                            break;
                        case 6:
                            message.answer = reader.string();
                            break;
                        case 7:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.answeredAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 16:
                            message.team = $root.isuxportal.proto.resources.Team.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Clarification message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.Clarification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.Clarification} Clarification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Clarification.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Clarification message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.Clarification
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Clarification.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                            return "teamId: integer|Long expected";
                    if (message.answered != null && message.hasOwnProperty("answered"))
                        if (typeof message.answered !== "boolean")
                            return "answered: boolean expected";
                    if (message.disclosed != null && message.hasOwnProperty("disclosed"))
                        if (typeof message.disclosed !== "boolean")
                            return "disclosed: boolean expected";
                    if (message.question != null && message.hasOwnProperty("question"))
                        if (!$util.isString(message.question))
                            return "question: string expected";
                    if (message.answer != null && message.hasOwnProperty("answer"))
                        if (!$util.isString(message.answer))
                            return "answer: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.answeredAt != null && message.hasOwnProperty("answeredAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.answeredAt);
                        if (error)
                            return "answeredAt." + error;
                    }
                    if (message.team != null && message.hasOwnProperty("team")) {
                        var error = $root.isuxportal.proto.resources.Team.verify(message.team);
                        if (error)
                            return "team." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Clarification message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.Clarification
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.Clarification} Clarification
                 */
                Clarification.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.Clarification)
                        return object;
                    var message = new $root.isuxportal.proto.resources.Clarification();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.teamId != null)
                        if ($util.Long)
                            (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                        else if (typeof object.teamId === "string")
                            message.teamId = parseInt(object.teamId, 10);
                        else if (typeof object.teamId === "number")
                            message.teamId = object.teamId;
                        else if (typeof object.teamId === "object")
                            message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                    if (object.answered != null)
                        message.answered = Boolean(object.answered);
                    if (object.disclosed != null)
                        message.disclosed = Boolean(object.disclosed);
                    if (object.question != null)
                        message.question = String(object.question);
                    if (object.answer != null)
                        message.answer = String(object.answer);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.Clarification.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.answeredAt != null) {
                        if (typeof object.answeredAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.Clarification.answeredAt: object expected");
                        message.answeredAt = $root.google.protobuf.Timestamp.fromObject(object.answeredAt);
                    }
                    if (object.team != null) {
                        if (typeof object.team !== "object")
                            throw TypeError(".isuxportal.proto.resources.Clarification.team: object expected");
                        message.team = $root.isuxportal.proto.resources.Team.fromObject(object.team);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Clarification message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.Clarification
                 * @static
                 * @param {isuxportal.proto.resources.Clarification} message Clarification
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Clarification.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.teamId = options.longs === String ? "0" : 0;
                        object.answered = false;
                        object.disclosed = false;
                        object.question = "";
                        object.answer = "";
                        object.createdAt = null;
                        object.answeredAt = null;
                        object.team = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (typeof message.teamId === "number")
                            object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                        else
                            object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                    if (message.answered != null && message.hasOwnProperty("answered"))
                        object.answered = message.answered;
                    if (message.disclosed != null && message.hasOwnProperty("disclosed"))
                        object.disclosed = message.disclosed;
                    if (message.question != null && message.hasOwnProperty("question"))
                        object.question = message.question;
                    if (message.answer != null && message.hasOwnProperty("answer"))
                        object.answer = message.answer;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.answeredAt != null && message.hasOwnProperty("answeredAt"))
                        object.answeredAt = $root.google.protobuf.Timestamp.toObject(message.answeredAt, options);
                    if (message.team != null && message.hasOwnProperty("team"))
                        object.team = $root.isuxportal.proto.resources.Team.toObject(message.team, options);
                    return object;
                };

                /**
                 * Converts this Clarification to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Clarification.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Clarification;
            })();

            resources.Staff = (function() {

                /**
                 * Properties of a Staff.
                 * @memberof isuxportal.proto.resources
                 * @interface IStaff
                 * @property {number|Long|null} [id] Staff id
                 * @property {string|null} [githubLogin] Staff githubLogin
                 */

                /**
                 * Constructs a new Staff.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a Staff.
                 * @implements IStaff
                 * @constructor
                 * @param {isuxportal.proto.resources.IStaff=} [properties] Properties to set
                 */
                function Staff(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Staff id.
                 * @member {number|Long} id
                 * @memberof isuxportal.proto.resources.Staff
                 * @instance
                 */
                Staff.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Staff githubLogin.
                 * @member {string} githubLogin
                 * @memberof isuxportal.proto.resources.Staff
                 * @instance
                 */
                Staff.prototype.githubLogin = "";

                /**
                 * Creates a new Staff instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.Staff
                 * @static
                 * @param {isuxportal.proto.resources.IStaff=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.Staff} Staff instance
                 */
                Staff.create = function create(properties) {
                    return new Staff(properties);
                };

                /**
                 * Encodes the specified Staff message. Does not implicitly {@link isuxportal.proto.resources.Staff.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.Staff
                 * @static
                 * @param {isuxportal.proto.resources.IStaff} message Staff message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Staff.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                    if (message.githubLogin != null && Object.hasOwnProperty.call(message, "githubLogin"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.githubLogin);
                    return writer;
                };

                /**
                 * Encodes the specified Staff message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Staff.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.Staff
                 * @static
                 * @param {isuxportal.proto.resources.IStaff} message Staff message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Staff.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Staff message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.Staff
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.Staff} Staff
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Staff.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Staff();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int64();
                            break;
                        case 2:
                            message.githubLogin = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Staff message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.Staff
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.Staff} Staff
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Staff.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Staff message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.Staff
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Staff.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.githubLogin != null && message.hasOwnProperty("githubLogin"))
                        if (!$util.isString(message.githubLogin))
                            return "githubLogin: string expected";
                    return null;
                };

                /**
                 * Creates a Staff message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.Staff
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.Staff} Staff
                 */
                Staff.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.Staff)
                        return object;
                    var message = new $root.isuxportal.proto.resources.Staff();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.githubLogin != null)
                        message.githubLogin = String(object.githubLogin);
                    return message;
                };

                /**
                 * Creates a plain object from a Staff message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.Staff
                 * @static
                 * @param {isuxportal.proto.resources.Staff} message Staff
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Staff.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        object.githubLogin = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.githubLogin != null && message.hasOwnProperty("githubLogin"))
                        object.githubLogin = message.githubLogin;
                    return object;
                };

                /**
                 * Converts this Staff to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.Staff
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Staff.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Staff;
            })();

            return resources;
        })();

        proto.common = (function() {

            /**
             * Namespace common.
             * @memberof isuxportal.proto
             * @namespace
             */
            var common = {};

            common.DashboardRequest = (function() {

                /**
                 * Properties of a DashboardRequest.
                 * @memberof isuxportal.proto.common
                 * @interface IDashboardRequest
                 */

                /**
                 * Constructs a new DashboardRequest.
                 * @memberof isuxportal.proto.common
                 * @classdesc Represents a DashboardRequest.
                 * @implements IDashboardRequest
                 * @constructor
                 * @param {isuxportal.proto.common.IDashboardRequest=} [properties] Properties to set
                 */
                function DashboardRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new DashboardRequest instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.common.DashboardRequest
                 * @static
                 * @param {isuxportal.proto.common.IDashboardRequest=} [properties] Properties to set
                 * @returns {isuxportal.proto.common.DashboardRequest} DashboardRequest instance
                 */
                DashboardRequest.create = function create(properties) {
                    return new DashboardRequest(properties);
                };

                /**
                 * Encodes the specified DashboardRequest message. Does not implicitly {@link isuxportal.proto.common.DashboardRequest.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.common.DashboardRequest
                 * @static
                 * @param {isuxportal.proto.common.IDashboardRequest} message DashboardRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DashboardRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified DashboardRequest message, length delimited. Does not implicitly {@link isuxportal.proto.common.DashboardRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.common.DashboardRequest
                 * @static
                 * @param {isuxportal.proto.common.IDashboardRequest} message DashboardRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DashboardRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DashboardRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.common.DashboardRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.common.DashboardRequest} DashboardRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DashboardRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.common.DashboardRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DashboardRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.common.DashboardRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.common.DashboardRequest} DashboardRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DashboardRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DashboardRequest message.
                 * @function verify
                 * @memberof isuxportal.proto.common.DashboardRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DashboardRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a DashboardRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.common.DashboardRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.common.DashboardRequest} DashboardRequest
                 */
                DashboardRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.common.DashboardRequest)
                        return object;
                    return new $root.isuxportal.proto.common.DashboardRequest();
                };

                /**
                 * Creates a plain object from a DashboardRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.common.DashboardRequest
                 * @static
                 * @param {isuxportal.proto.common.DashboardRequest} message DashboardRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DashboardRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this DashboardRequest to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.common.DashboardRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DashboardRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DashboardRequest;
            })();

            common.DashboardResponse = (function() {

                /**
                 * Properties of a DashboardResponse.
                 * @memberof isuxportal.proto.common
                 * @interface IDashboardResponse
                 */

                /**
                 * Constructs a new DashboardResponse.
                 * @memberof isuxportal.proto.common
                 * @classdesc Represents a DashboardResponse.
                 * @implements IDashboardResponse
                 * @constructor
                 * @param {isuxportal.proto.common.IDashboardResponse=} [properties] Properties to set
                 */
                function DashboardResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new DashboardResponse instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.common.DashboardResponse
                 * @static
                 * @param {isuxportal.proto.common.IDashboardResponse=} [properties] Properties to set
                 * @returns {isuxportal.proto.common.DashboardResponse} DashboardResponse instance
                 */
                DashboardResponse.create = function create(properties) {
                    return new DashboardResponse(properties);
                };

                /**
                 * Encodes the specified DashboardResponse message. Does not implicitly {@link isuxportal.proto.common.DashboardResponse.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.common.DashboardResponse
                 * @static
                 * @param {isuxportal.proto.common.IDashboardResponse} message DashboardResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DashboardResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified DashboardResponse message, length delimited. Does not implicitly {@link isuxportal.proto.common.DashboardResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.common.DashboardResponse
                 * @static
                 * @param {isuxportal.proto.common.IDashboardResponse} message DashboardResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DashboardResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DashboardResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.common.DashboardResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.common.DashboardResponse} DashboardResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DashboardResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.common.DashboardResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DashboardResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.common.DashboardResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.common.DashboardResponse} DashboardResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DashboardResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DashboardResponse message.
                 * @function verify
                 * @memberof isuxportal.proto.common.DashboardResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DashboardResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a DashboardResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.common.DashboardResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.common.DashboardResponse} DashboardResponse
                 */
                DashboardResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.common.DashboardResponse)
                        return object;
                    return new $root.isuxportal.proto.common.DashboardResponse();
                };

                /**
                 * Creates a plain object from a DashboardResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.common.DashboardResponse
                 * @static
                 * @param {isuxportal.proto.common.DashboardResponse} message DashboardResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DashboardResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this DashboardResponse to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.common.DashboardResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DashboardResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DashboardResponse;
            })();

            return common;
        })();

        proto.services = (function() {

            /**
             * Namespace services.
             * @memberof isuxportal.proto
             * @namespace
             */
            var services = {};

            services.common = (function() {

                /**
                 * Namespace common.
                 * @memberof isuxportal.proto.services
                 * @namespace
                 */
                var common = {};

                common.GetCurrentSessionRequest = (function() {

                    /**
                     * Properties of a GetCurrentSessionRequest.
                     * @memberof isuxportal.proto.services.common
                     * @interface IGetCurrentSessionRequest
                     */

                    /**
                     * Constructs a new GetCurrentSessionRequest.
                     * @memberof isuxportal.proto.services.common
                     * @classdesc Represents a GetCurrentSessionRequest.
                     * @implements IGetCurrentSessionRequest
                     * @constructor
                     * @param {isuxportal.proto.services.common.IGetCurrentSessionRequest=} [properties] Properties to set
                     */
                    function GetCurrentSessionRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new GetCurrentSessionRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @static
                     * @param {isuxportal.proto.services.common.IGetCurrentSessionRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.common.GetCurrentSessionRequest} GetCurrentSessionRequest instance
                     */
                    GetCurrentSessionRequest.create = function create(properties) {
                        return new GetCurrentSessionRequest(properties);
                    };

                    /**
                     * Encodes the specified GetCurrentSessionRequest message. Does not implicitly {@link isuxportal.proto.services.common.GetCurrentSessionRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @static
                     * @param {isuxportal.proto.services.common.IGetCurrentSessionRequest} message GetCurrentSessionRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetCurrentSessionRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetCurrentSessionRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.common.GetCurrentSessionRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @static
                     * @param {isuxportal.proto.services.common.IGetCurrentSessionRequest} message GetCurrentSessionRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetCurrentSessionRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetCurrentSessionRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.common.GetCurrentSessionRequest} GetCurrentSessionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetCurrentSessionRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.common.GetCurrentSessionRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetCurrentSessionRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.common.GetCurrentSessionRequest} GetCurrentSessionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetCurrentSessionRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetCurrentSessionRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetCurrentSessionRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a GetCurrentSessionRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.common.GetCurrentSessionRequest} GetCurrentSessionRequest
                     */
                    GetCurrentSessionRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.common.GetCurrentSessionRequest)
                            return object;
                        return new $root.isuxportal.proto.services.common.GetCurrentSessionRequest();
                    };

                    /**
                     * Creates a plain object from a GetCurrentSessionRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @static
                     * @param {isuxportal.proto.services.common.GetCurrentSessionRequest} message GetCurrentSessionRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetCurrentSessionRequest.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this GetCurrentSessionRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetCurrentSessionRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetCurrentSessionRequest;
                })();

                common.GetCurrentSessionResponse = (function() {

                    /**
                     * Properties of a GetCurrentSessionResponse.
                     * @memberof isuxportal.proto.services.common
                     * @interface IGetCurrentSessionResponse
                     * @property {isuxportal.proto.resources.ITeam|null} [team] GetCurrentSessionResponse team
                     * @property {isuxportal.proto.resources.IContestant|null} [contestant] GetCurrentSessionResponse contestant
                     * @property {string|null} [discordServerId] GetCurrentSessionResponse discordServerId
                     */

                    /**
                     * Constructs a new GetCurrentSessionResponse.
                     * @memberof isuxportal.proto.services.common
                     * @classdesc Represents a GetCurrentSessionResponse.
                     * @implements IGetCurrentSessionResponse
                     * @constructor
                     * @param {isuxportal.proto.services.common.IGetCurrentSessionResponse=} [properties] Properties to set
                     */
                    function GetCurrentSessionResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetCurrentSessionResponse team.
                     * @member {isuxportal.proto.resources.ITeam|null|undefined} team
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @instance
                     */
                    GetCurrentSessionResponse.prototype.team = null;

                    /**
                     * GetCurrentSessionResponse contestant.
                     * @member {isuxportal.proto.resources.IContestant|null|undefined} contestant
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @instance
                     */
                    GetCurrentSessionResponse.prototype.contestant = null;

                    /**
                     * GetCurrentSessionResponse discordServerId.
                     * @member {string} discordServerId
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @instance
                     */
                    GetCurrentSessionResponse.prototype.discordServerId = "";

                    /**
                     * Creates a new GetCurrentSessionResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @static
                     * @param {isuxportal.proto.services.common.IGetCurrentSessionResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.common.GetCurrentSessionResponse} GetCurrentSessionResponse instance
                     */
                    GetCurrentSessionResponse.create = function create(properties) {
                        return new GetCurrentSessionResponse(properties);
                    };

                    /**
                     * Encodes the specified GetCurrentSessionResponse message. Does not implicitly {@link isuxportal.proto.services.common.GetCurrentSessionResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @static
                     * @param {isuxportal.proto.services.common.IGetCurrentSessionResponse} message GetCurrentSessionResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetCurrentSessionResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                            $root.isuxportal.proto.resources.Team.encode(message.team, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.contestant != null && Object.hasOwnProperty.call(message, "contestant"))
                            $root.isuxportal.proto.resources.Contestant.encode(message.contestant, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.discordServerId != null && Object.hasOwnProperty.call(message, "discordServerId"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.discordServerId);
                        return writer;
                    };

                    /**
                     * Encodes the specified GetCurrentSessionResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.common.GetCurrentSessionResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @static
                     * @param {isuxportal.proto.services.common.IGetCurrentSessionResponse} message GetCurrentSessionResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetCurrentSessionResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetCurrentSessionResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.common.GetCurrentSessionResponse} GetCurrentSessionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetCurrentSessionResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.common.GetCurrentSessionResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.team = $root.isuxportal.proto.resources.Team.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.contestant = $root.isuxportal.proto.resources.Contestant.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.discordServerId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetCurrentSessionResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.common.GetCurrentSessionResponse} GetCurrentSessionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetCurrentSessionResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetCurrentSessionResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetCurrentSessionResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.team != null && message.hasOwnProperty("team")) {
                            var error = $root.isuxportal.proto.resources.Team.verify(message.team);
                            if (error)
                                return "team." + error;
                        }
                        if (message.contestant != null && message.hasOwnProperty("contestant")) {
                            var error = $root.isuxportal.proto.resources.Contestant.verify(message.contestant);
                            if (error)
                                return "contestant." + error;
                        }
                        if (message.discordServerId != null && message.hasOwnProperty("discordServerId"))
                            if (!$util.isString(message.discordServerId))
                                return "discordServerId: string expected";
                        return null;
                    };

                    /**
                     * Creates a GetCurrentSessionResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.common.GetCurrentSessionResponse} GetCurrentSessionResponse
                     */
                    GetCurrentSessionResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.common.GetCurrentSessionResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.common.GetCurrentSessionResponse();
                        if (object.team != null) {
                            if (typeof object.team !== "object")
                                throw TypeError(".isuxportal.proto.services.common.GetCurrentSessionResponse.team: object expected");
                            message.team = $root.isuxportal.proto.resources.Team.fromObject(object.team);
                        }
                        if (object.contestant != null) {
                            if (typeof object.contestant !== "object")
                                throw TypeError(".isuxportal.proto.services.common.GetCurrentSessionResponse.contestant: object expected");
                            message.contestant = $root.isuxportal.proto.resources.Contestant.fromObject(object.contestant);
                        }
                        if (object.discordServerId != null)
                            message.discordServerId = String(object.discordServerId);
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetCurrentSessionResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @static
                     * @param {isuxportal.proto.services.common.GetCurrentSessionResponse} message GetCurrentSessionResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetCurrentSessionResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.team = null;
                            object.contestant = null;
                            object.discordServerId = "";
                        }
                        if (message.team != null && message.hasOwnProperty("team"))
                            object.team = $root.isuxportal.proto.resources.Team.toObject(message.team, options);
                        if (message.contestant != null && message.hasOwnProperty("contestant"))
                            object.contestant = $root.isuxportal.proto.resources.Contestant.toObject(message.contestant, options);
                        if (message.discordServerId != null && message.hasOwnProperty("discordServerId"))
                            object.discordServerId = message.discordServerId;
                        return object;
                    };

                    /**
                     * Converts this GetCurrentSessionResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetCurrentSessionResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetCurrentSessionResponse;
                })();

                return common;
            })();

            services.audience = (function() {

                /**
                 * Namespace audience.
                 * @memberof isuxportal.proto.services
                 * @namespace
                 */
                var audience = {};

                audience.ListTeamsRequest = (function() {

                    /**
                     * Properties of a ListTeamsRequest.
                     * @memberof isuxportal.proto.services.audience
                     * @interface IListTeamsRequest
                     */

                    /**
                     * Constructs a new ListTeamsRequest.
                     * @memberof isuxportal.proto.services.audience
                     * @classdesc Represents a ListTeamsRequest.
                     * @implements IListTeamsRequest
                     * @constructor
                     * @param {isuxportal.proto.services.audience.IListTeamsRequest=} [properties] Properties to set
                     */
                    function ListTeamsRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new ListTeamsRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @static
                     * @param {isuxportal.proto.services.audience.IListTeamsRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.audience.ListTeamsRequest} ListTeamsRequest instance
                     */
                    ListTeamsRequest.create = function create(properties) {
                        return new ListTeamsRequest(properties);
                    };

                    /**
                     * Encodes the specified ListTeamsRequest message. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @static
                     * @param {isuxportal.proto.services.audience.IListTeamsRequest} message ListTeamsRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListTeamsRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified ListTeamsRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @static
                     * @param {isuxportal.proto.services.audience.IListTeamsRequest} message ListTeamsRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListTeamsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListTeamsRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.audience.ListTeamsRequest} ListTeamsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListTeamsRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.audience.ListTeamsRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListTeamsRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.audience.ListTeamsRequest} ListTeamsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListTeamsRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListTeamsRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListTeamsRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a ListTeamsRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.audience.ListTeamsRequest} ListTeamsRequest
                     */
                    ListTeamsRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.audience.ListTeamsRequest)
                            return object;
                        return new $root.isuxportal.proto.services.audience.ListTeamsRequest();
                    };

                    /**
                     * Creates a plain object from a ListTeamsRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @static
                     * @param {isuxportal.proto.services.audience.ListTeamsRequest} message ListTeamsRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListTeamsRequest.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this ListTeamsRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListTeamsRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListTeamsRequest;
                })();

                audience.ListTeamsResponse = (function() {

                    /**
                     * Properties of a ListTeamsResponse.
                     * @memberof isuxportal.proto.services.audience
                     * @interface IListTeamsResponse
                     * @property {Array.<isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem>|null} [teams] ListTeamsResponse teams
                     */

                    /**
                     * Constructs a new ListTeamsResponse.
                     * @memberof isuxportal.proto.services.audience
                     * @classdesc Represents a ListTeamsResponse.
                     * @implements IListTeamsResponse
                     * @constructor
                     * @param {isuxportal.proto.services.audience.IListTeamsResponse=} [properties] Properties to set
                     */
                    function ListTeamsResponse(properties) {
                        this.teams = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListTeamsResponse teams.
                     * @member {Array.<isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem>} teams
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @instance
                     */
                    ListTeamsResponse.prototype.teams = $util.emptyArray;

                    /**
                     * Creates a new ListTeamsResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @static
                     * @param {isuxportal.proto.services.audience.IListTeamsResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.audience.ListTeamsResponse} ListTeamsResponse instance
                     */
                    ListTeamsResponse.create = function create(properties) {
                        return new ListTeamsResponse(properties);
                    };

                    /**
                     * Encodes the specified ListTeamsResponse message. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @static
                     * @param {isuxportal.proto.services.audience.IListTeamsResponse} message ListTeamsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListTeamsResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teams != null && message.teams.length)
                            for (var i = 0; i < message.teams.length; ++i)
                                $root.isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.encode(message.teams[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ListTeamsResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @static
                     * @param {isuxportal.proto.services.audience.IListTeamsResponse} message ListTeamsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListTeamsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListTeamsResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.audience.ListTeamsResponse} ListTeamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListTeamsResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.audience.ListTeamsResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.teams && message.teams.length))
                                    message.teams = [];
                                message.teams.push($root.isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListTeamsResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.audience.ListTeamsResponse} ListTeamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListTeamsResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListTeamsResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListTeamsResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teams != null && message.hasOwnProperty("teams")) {
                            if (!Array.isArray(message.teams))
                                return "teams: array expected";
                            for (var i = 0; i < message.teams.length; ++i) {
                                var error = $root.isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.verify(message.teams[i]);
                                if (error)
                                    return "teams." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a ListTeamsResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.audience.ListTeamsResponse} ListTeamsResponse
                     */
                    ListTeamsResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.audience.ListTeamsResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.audience.ListTeamsResponse();
                        if (object.teams) {
                            if (!Array.isArray(object.teams))
                                throw TypeError(".isuxportal.proto.services.audience.ListTeamsResponse.teams: array expected");
                            message.teams = [];
                            for (var i = 0; i < object.teams.length; ++i) {
                                if (typeof object.teams[i] !== "object")
                                    throw TypeError(".isuxportal.proto.services.audience.ListTeamsResponse.teams: object expected");
                                message.teams[i] = $root.isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.fromObject(object.teams[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ListTeamsResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @static
                     * @param {isuxportal.proto.services.audience.ListTeamsResponse} message ListTeamsResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListTeamsResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.teams = [];
                        if (message.teams && message.teams.length) {
                            object.teams = [];
                            for (var j = 0; j < message.teams.length; ++j)
                                object.teams[j] = $root.isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.toObject(message.teams[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ListTeamsResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListTeamsResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    ListTeamsResponse.TeamListItem = (function() {

                        /**
                         * Properties of a TeamListItem.
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                         * @interface ITeamListItem
                         * @property {number|Long|null} [teamId] TeamListItem teamId
                         * @property {string|null} [name] TeamListItem name
                         * @property {Array.<string>|null} [memberNames] TeamListItem memberNames
                         * @property {boolean|null} [finalParticipation] TeamListItem finalParticipation
                         * @property {boolean|null} [isStudent] TeamListItem isStudent
                         */

                        /**
                         * Constructs a new TeamListItem.
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                         * @classdesc Represents a TeamListItem.
                         * @implements ITeamListItem
                         * @constructor
                         * @param {isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem=} [properties] Properties to set
                         */
                        function TeamListItem(properties) {
                            this.memberNames = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * TeamListItem teamId.
                         * @member {number|Long} teamId
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * TeamListItem name.
                         * @member {string} name
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.name = "";

                        /**
                         * TeamListItem memberNames.
                         * @member {Array.<string>} memberNames
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.memberNames = $util.emptyArray;

                        /**
                         * TeamListItem finalParticipation.
                         * @member {boolean} finalParticipation
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.finalParticipation = false;

                        /**
                         * TeamListItem isStudent.
                         * @member {boolean} isStudent
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.isStudent = false;

                        /**
                         * Creates a new TeamListItem instance using the specified properties.
                         * @function create
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem=} [properties] Properties to set
                         * @returns {isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem} TeamListItem instance
                         */
                        TeamListItem.create = function create(properties) {
                            return new TeamListItem(properties);
                        };

                        /**
                         * Encodes the specified TeamListItem message. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.verify|verify} messages.
                         * @function encode
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem} message TeamListItem message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TeamListItem.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.teamId);
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                            if (message.memberNames != null && message.memberNames.length)
                                for (var i = 0; i < message.memberNames.length; ++i)
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.memberNames[i]);
                            if (message.finalParticipation != null && Object.hasOwnProperty.call(message, "finalParticipation"))
                                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.finalParticipation);
                            if (message.isStudent != null && Object.hasOwnProperty.call(message, "isStudent"))
                                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isStudent);
                            return writer;
                        };

                        /**
                         * Encodes the specified TeamListItem message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem} message TeamListItem message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TeamListItem.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a TeamListItem message from the specified reader or buffer.
                         * @function decode
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem} TeamListItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TeamListItem.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.teamId = reader.int64();
                                    break;
                                case 2:
                                    message.name = reader.string();
                                    break;
                                case 3:
                                    if (!(message.memberNames && message.memberNames.length))
                                        message.memberNames = [];
                                    message.memberNames.push(reader.string());
                                    break;
                                case 4:
                                    message.finalParticipation = reader.bool();
                                    break;
                                case 5:
                                    message.isStudent = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a TeamListItem message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem} TeamListItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TeamListItem.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a TeamListItem message.
                         * @function verify
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        TeamListItem.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.teamId != null && message.hasOwnProperty("teamId"))
                                if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                                    return "teamId: integer|Long expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.memberNames != null && message.hasOwnProperty("memberNames")) {
                                if (!Array.isArray(message.memberNames))
                                    return "memberNames: array expected";
                                for (var i = 0; i < message.memberNames.length; ++i)
                                    if (!$util.isString(message.memberNames[i]))
                                        return "memberNames: string[] expected";
                            }
                            if (message.finalParticipation != null && message.hasOwnProperty("finalParticipation"))
                                if (typeof message.finalParticipation !== "boolean")
                                    return "finalParticipation: boolean expected";
                            if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                                if (typeof message.isStudent !== "boolean")
                                    return "isStudent: boolean expected";
                            return null;
                        };

                        /**
                         * Creates a TeamListItem message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem} TeamListItem
                         */
                        TeamListItem.fromObject = function fromObject(object) {
                            if (object instanceof $root.isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem)
                                return object;
                            var message = new $root.isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem();
                            if (object.teamId != null)
                                if ($util.Long)
                                    (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                                else if (typeof object.teamId === "string")
                                    message.teamId = parseInt(object.teamId, 10);
                                else if (typeof object.teamId === "number")
                                    message.teamId = object.teamId;
                                else if (typeof object.teamId === "object")
                                    message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.memberNames) {
                                if (!Array.isArray(object.memberNames))
                                    throw TypeError(".isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.memberNames: array expected");
                                message.memberNames = [];
                                for (var i = 0; i < object.memberNames.length; ++i)
                                    message.memberNames[i] = String(object.memberNames[i]);
                            }
                            if (object.finalParticipation != null)
                                message.finalParticipation = Boolean(object.finalParticipation);
                            if (object.isStudent != null)
                                message.isStudent = Boolean(object.isStudent);
                            return message;
                        };

                        /**
                         * Creates a plain object from a TeamListItem message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem} message TeamListItem
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        TeamListItem.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.memberNames = [];
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.teamId = options.longs === String ? "0" : 0;
                                object.name = "";
                                object.finalParticipation = false;
                                object.isStudent = false;
                            }
                            if (message.teamId != null && message.hasOwnProperty("teamId"))
                                if (typeof message.teamId === "number")
                                    object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                                else
                                    object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.memberNames && message.memberNames.length) {
                                object.memberNames = [];
                                for (var j = 0; j < message.memberNames.length; ++j)
                                    object.memberNames[j] = message.memberNames[j];
                            }
                            if (message.finalParticipation != null && message.hasOwnProperty("finalParticipation"))
                                object.finalParticipation = message.finalParticipation;
                            if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                                object.isStudent = message.isStudent;
                            return object;
                        };

                        /**
                         * Converts this TeamListItem to JSON.
                         * @function toJSON
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        TeamListItem.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return TeamListItem;
                    })();

                    return ListTeamsResponse;
                })();

                return audience;
            })();

            services.registration = (function() {

                /**
                 * Namespace registration.
                 * @memberof isuxportal.proto.services
                 * @namespace
                 */
                var registration = {};

                registration.CreateTeamRequest = (function() {

                    /**
                     * Properties of a CreateTeamRequest.
                     * @memberof isuxportal.proto.services.registration
                     * @interface ICreateTeamRequest
                     * @property {string|null} [teamName] CreateTeamRequest teamName
                     * @property {string|null} [name] CreateTeamRequest name
                     * @property {string|null} [emailAddress] CreateTeamRequest emailAddress
                     * @property {boolean|null} [isStudent] CreateTeamRequest isStudent
                     */

                    /**
                     * Constructs a new CreateTeamRequest.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents a CreateTeamRequest.
                     * @implements ICreateTeamRequest
                     * @constructor
                     * @param {isuxportal.proto.services.registration.ICreateTeamRequest=} [properties] Properties to set
                     */
                    function CreateTeamRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CreateTeamRequest teamName.
                     * @member {string} teamName
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @instance
                     */
                    CreateTeamRequest.prototype.teamName = "";

                    /**
                     * CreateTeamRequest name.
                     * @member {string} name
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @instance
                     */
                    CreateTeamRequest.prototype.name = "";

                    /**
                     * CreateTeamRequest emailAddress.
                     * @member {string} emailAddress
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @instance
                     */
                    CreateTeamRequest.prototype.emailAddress = "";

                    /**
                     * CreateTeamRequest isStudent.
                     * @member {boolean} isStudent
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @instance
                     */
                    CreateTeamRequest.prototype.isStudent = false;

                    /**
                     * Creates a new CreateTeamRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.ICreateTeamRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.CreateTeamRequest} CreateTeamRequest instance
                     */
                    CreateTeamRequest.create = function create(properties) {
                        return new CreateTeamRequest(properties);
                    };

                    /**
                     * Encodes the specified CreateTeamRequest message. Does not implicitly {@link isuxportal.proto.services.registration.CreateTeamRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.ICreateTeamRequest} message CreateTeamRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateTeamRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamName != null && Object.hasOwnProperty.call(message, "teamName"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.teamName);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.emailAddress != null && Object.hasOwnProperty.call(message, "emailAddress"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.emailAddress);
                        if (message.isStudent != null && Object.hasOwnProperty.call(message, "isStudent"))
                            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isStudent);
                        return writer;
                    };

                    /**
                     * Encodes the specified CreateTeamRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.CreateTeamRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.ICreateTeamRequest} message CreateTeamRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateTeamRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CreateTeamRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.CreateTeamRequest} CreateTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateTeamRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.CreateTeamRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamName = reader.string();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            case 3:
                                message.emailAddress = reader.string();
                                break;
                            case 4:
                                message.isStudent = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CreateTeamRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.CreateTeamRequest} CreateTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateTeamRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CreateTeamRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreateTeamRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamName != null && message.hasOwnProperty("teamName"))
                            if (!$util.isString(message.teamName))
                                return "teamName: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.emailAddress != null && message.hasOwnProperty("emailAddress"))
                            if (!$util.isString(message.emailAddress))
                                return "emailAddress: string expected";
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            if (typeof message.isStudent !== "boolean")
                                return "isStudent: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a CreateTeamRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.CreateTeamRequest} CreateTeamRequest
                     */
                    CreateTeamRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.CreateTeamRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.registration.CreateTeamRequest();
                        if (object.teamName != null)
                            message.teamName = String(object.teamName);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.emailAddress != null)
                            message.emailAddress = String(object.emailAddress);
                        if (object.isStudent != null)
                            message.isStudent = Boolean(object.isStudent);
                        return message;
                    };

                    /**
                     * Creates a plain object from a CreateTeamRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.CreateTeamRequest} message CreateTeamRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreateTeamRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.teamName = "";
                            object.name = "";
                            object.emailAddress = "";
                            object.isStudent = false;
                        }
                        if (message.teamName != null && message.hasOwnProperty("teamName"))
                            object.teamName = message.teamName;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.emailAddress != null && message.hasOwnProperty("emailAddress"))
                            object.emailAddress = message.emailAddress;
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            object.isStudent = message.isStudent;
                        return object;
                    };

                    /**
                     * Converts this CreateTeamRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreateTeamRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CreateTeamRequest;
                })();

                registration.CreateTeamResponse = (function() {

                    /**
                     * Properties of a CreateTeamResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @interface ICreateTeamResponse
                     * @property {number|Long|null} [teamId] CreateTeamResponse teamId
                     */

                    /**
                     * Constructs a new CreateTeamResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents a CreateTeamResponse.
                     * @implements ICreateTeamResponse
                     * @constructor
                     * @param {isuxportal.proto.services.registration.ICreateTeamResponse=} [properties] Properties to set
                     */
                    function CreateTeamResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CreateTeamResponse teamId.
                     * @member {number|Long} teamId
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @instance
                     */
                    CreateTeamResponse.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new CreateTeamResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.ICreateTeamResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.CreateTeamResponse} CreateTeamResponse instance
                     */
                    CreateTeamResponse.create = function create(properties) {
                        return new CreateTeamResponse(properties);
                    };

                    /**
                     * Encodes the specified CreateTeamResponse message. Does not implicitly {@link isuxportal.proto.services.registration.CreateTeamResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.ICreateTeamResponse} message CreateTeamResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateTeamResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.teamId);
                        return writer;
                    };

                    /**
                     * Encodes the specified CreateTeamResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.CreateTeamResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.ICreateTeamResponse} message CreateTeamResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateTeamResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CreateTeamResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.CreateTeamResponse} CreateTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateTeamResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.CreateTeamResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamId = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CreateTeamResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.CreateTeamResponse} CreateTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateTeamResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CreateTeamResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreateTeamResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                                return "teamId: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a CreateTeamResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.CreateTeamResponse} CreateTeamResponse
                     */
                    CreateTeamResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.CreateTeamResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.registration.CreateTeamResponse();
                        if (object.teamId != null)
                            if ($util.Long)
                                (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                            else if (typeof object.teamId === "string")
                                message.teamId = parseInt(object.teamId, 10);
                            else if (typeof object.teamId === "number")
                                message.teamId = object.teamId;
                            else if (typeof object.teamId === "object")
                                message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a CreateTeamResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.CreateTeamResponse} message CreateTeamResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreateTeamResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.teamId = options.longs === String ? "0" : 0;
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (typeof message.teamId === "number")
                                object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                            else
                                object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                        return object;
                    };

                    /**
                     * Converts this CreateTeamResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreateTeamResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CreateTeamResponse;
                })();

                registration.JoinTeamRequest = (function() {

                    /**
                     * Properties of a JoinTeamRequest.
                     * @memberof isuxportal.proto.services.registration
                     * @interface IJoinTeamRequest
                     * @property {number|Long|null} [teamId] JoinTeamRequest teamId
                     * @property {string|null} [inviteToken] JoinTeamRequest inviteToken
                     * @property {string|null} [name] JoinTeamRequest name
                     * @property {boolean|null} [isStudent] JoinTeamRequest isStudent
                     */

                    /**
                     * Constructs a new JoinTeamRequest.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents a JoinTeamRequest.
                     * @implements IJoinTeamRequest
                     * @constructor
                     * @param {isuxportal.proto.services.registration.IJoinTeamRequest=} [properties] Properties to set
                     */
                    function JoinTeamRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * JoinTeamRequest teamId.
                     * @member {number|Long} teamId
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @instance
                     */
                    JoinTeamRequest.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * JoinTeamRequest inviteToken.
                     * @member {string} inviteToken
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @instance
                     */
                    JoinTeamRequest.prototype.inviteToken = "";

                    /**
                     * JoinTeamRequest name.
                     * @member {string} name
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @instance
                     */
                    JoinTeamRequest.prototype.name = "";

                    /**
                     * JoinTeamRequest isStudent.
                     * @member {boolean} isStudent
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @instance
                     */
                    JoinTeamRequest.prototype.isStudent = false;

                    /**
                     * Creates a new JoinTeamRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IJoinTeamRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.JoinTeamRequest} JoinTeamRequest instance
                     */
                    JoinTeamRequest.create = function create(properties) {
                        return new JoinTeamRequest(properties);
                    };

                    /**
                     * Encodes the specified JoinTeamRequest message. Does not implicitly {@link isuxportal.proto.services.registration.JoinTeamRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IJoinTeamRequest} message JoinTeamRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JoinTeamRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.teamId);
                        if (message.inviteToken != null && Object.hasOwnProperty.call(message, "inviteToken"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.inviteToken);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                        if (message.isStudent != null && Object.hasOwnProperty.call(message, "isStudent"))
                            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isStudent);
                        return writer;
                    };

                    /**
                     * Encodes the specified JoinTeamRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.JoinTeamRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IJoinTeamRequest} message JoinTeamRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JoinTeamRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a JoinTeamRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.JoinTeamRequest} JoinTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    JoinTeamRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.JoinTeamRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamId = reader.int64();
                                break;
                            case 2:
                                message.inviteToken = reader.string();
                                break;
                            case 3:
                                message.name = reader.string();
                                break;
                            case 4:
                                message.isStudent = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a JoinTeamRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.JoinTeamRequest} JoinTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    JoinTeamRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a JoinTeamRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    JoinTeamRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                                return "teamId: integer|Long expected";
                        if (message.inviteToken != null && message.hasOwnProperty("inviteToken"))
                            if (!$util.isString(message.inviteToken))
                                return "inviteToken: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            if (typeof message.isStudent !== "boolean")
                                return "isStudent: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a JoinTeamRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.JoinTeamRequest} JoinTeamRequest
                     */
                    JoinTeamRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.JoinTeamRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.registration.JoinTeamRequest();
                        if (object.teamId != null)
                            if ($util.Long)
                                (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                            else if (typeof object.teamId === "string")
                                message.teamId = parseInt(object.teamId, 10);
                            else if (typeof object.teamId === "number")
                                message.teamId = object.teamId;
                            else if (typeof object.teamId === "object")
                                message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                        if (object.inviteToken != null)
                            message.inviteToken = String(object.inviteToken);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.isStudent != null)
                            message.isStudent = Boolean(object.isStudent);
                        return message;
                    };

                    /**
                     * Creates a plain object from a JoinTeamRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.JoinTeamRequest} message JoinTeamRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    JoinTeamRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.teamId = options.longs === String ? "0" : 0;
                            object.inviteToken = "";
                            object.name = "";
                            object.isStudent = false;
                        }
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (typeof message.teamId === "number")
                                object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                            else
                                object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                        if (message.inviteToken != null && message.hasOwnProperty("inviteToken"))
                            object.inviteToken = message.inviteToken;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            object.isStudent = message.isStudent;
                        return object;
                    };

                    /**
                     * Converts this JoinTeamRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    JoinTeamRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return JoinTeamRequest;
                })();

                registration.JoinTeamResponse = (function() {

                    /**
                     * Properties of a JoinTeamResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @interface IJoinTeamResponse
                     */

                    /**
                     * Constructs a new JoinTeamResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents a JoinTeamResponse.
                     * @implements IJoinTeamResponse
                     * @constructor
                     * @param {isuxportal.proto.services.registration.IJoinTeamResponse=} [properties] Properties to set
                     */
                    function JoinTeamResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new JoinTeamResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IJoinTeamResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.JoinTeamResponse} JoinTeamResponse instance
                     */
                    JoinTeamResponse.create = function create(properties) {
                        return new JoinTeamResponse(properties);
                    };

                    /**
                     * Encodes the specified JoinTeamResponse message. Does not implicitly {@link isuxportal.proto.services.registration.JoinTeamResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IJoinTeamResponse} message JoinTeamResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JoinTeamResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified JoinTeamResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.JoinTeamResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IJoinTeamResponse} message JoinTeamResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JoinTeamResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a JoinTeamResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.JoinTeamResponse} JoinTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    JoinTeamResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.JoinTeamResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a JoinTeamResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.JoinTeamResponse} JoinTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    JoinTeamResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a JoinTeamResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    JoinTeamResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a JoinTeamResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.JoinTeamResponse} JoinTeamResponse
                     */
                    JoinTeamResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.JoinTeamResponse)
                            return object;
                        return new $root.isuxportal.proto.services.registration.JoinTeamResponse();
                    };

                    /**
                     * Creates a plain object from a JoinTeamResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.JoinTeamResponse} message JoinTeamResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    JoinTeamResponse.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this JoinTeamResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    JoinTeamResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return JoinTeamResponse;
                })();

                registration.GetRegistrationSessionQuery = (function() {

                    /**
                     * Properties of a GetRegistrationSessionQuery.
                     * @memberof isuxportal.proto.services.registration
                     * @interface IGetRegistrationSessionQuery
                     * @property {number|Long|null} [teamId] GetRegistrationSessionQuery teamId
                     * @property {string|null} [inviteToken] GetRegistrationSessionQuery inviteToken
                     */

                    /**
                     * Constructs a new GetRegistrationSessionQuery.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents a GetRegistrationSessionQuery.
                     * @implements IGetRegistrationSessionQuery
                     * @constructor
                     * @param {isuxportal.proto.services.registration.IGetRegistrationSessionQuery=} [properties] Properties to set
                     */
                    function GetRegistrationSessionQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetRegistrationSessionQuery teamId.
                     * @member {number|Long} teamId
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @instance
                     */
                    GetRegistrationSessionQuery.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * GetRegistrationSessionQuery inviteToken.
                     * @member {string} inviteToken
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @instance
                     */
                    GetRegistrationSessionQuery.prototype.inviteToken = "";

                    /**
                     * Creates a new GetRegistrationSessionQuery instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @static
                     * @param {isuxportal.proto.services.registration.IGetRegistrationSessionQuery=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.GetRegistrationSessionQuery} GetRegistrationSessionQuery instance
                     */
                    GetRegistrationSessionQuery.create = function create(properties) {
                        return new GetRegistrationSessionQuery(properties);
                    };

                    /**
                     * Encodes the specified GetRegistrationSessionQuery message. Does not implicitly {@link isuxportal.proto.services.registration.GetRegistrationSessionQuery.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @static
                     * @param {isuxportal.proto.services.registration.IGetRegistrationSessionQuery} message GetRegistrationSessionQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetRegistrationSessionQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.teamId);
                        if (message.inviteToken != null && Object.hasOwnProperty.call(message, "inviteToken"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.inviteToken);
                        return writer;
                    };

                    /**
                     * Encodes the specified GetRegistrationSessionQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.GetRegistrationSessionQuery.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @static
                     * @param {isuxportal.proto.services.registration.IGetRegistrationSessionQuery} message GetRegistrationSessionQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetRegistrationSessionQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetRegistrationSessionQuery message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.GetRegistrationSessionQuery} GetRegistrationSessionQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetRegistrationSessionQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.GetRegistrationSessionQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamId = reader.int64();
                                break;
                            case 2:
                                message.inviteToken = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetRegistrationSessionQuery message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.GetRegistrationSessionQuery} GetRegistrationSessionQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetRegistrationSessionQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetRegistrationSessionQuery message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetRegistrationSessionQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                                return "teamId: integer|Long expected";
                        if (message.inviteToken != null && message.hasOwnProperty("inviteToken"))
                            if (!$util.isString(message.inviteToken))
                                return "inviteToken: string expected";
                        return null;
                    };

                    /**
                     * Creates a GetRegistrationSessionQuery message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.GetRegistrationSessionQuery} GetRegistrationSessionQuery
                     */
                    GetRegistrationSessionQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.GetRegistrationSessionQuery)
                            return object;
                        var message = new $root.isuxportal.proto.services.registration.GetRegistrationSessionQuery();
                        if (object.teamId != null)
                            if ($util.Long)
                                (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                            else if (typeof object.teamId === "string")
                                message.teamId = parseInt(object.teamId, 10);
                            else if (typeof object.teamId === "number")
                                message.teamId = object.teamId;
                            else if (typeof object.teamId === "object")
                                message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                        if (object.inviteToken != null)
                            message.inviteToken = String(object.inviteToken);
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetRegistrationSessionQuery message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @static
                     * @param {isuxportal.proto.services.registration.GetRegistrationSessionQuery} message GetRegistrationSessionQuery
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetRegistrationSessionQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.teamId = options.longs === String ? "0" : 0;
                            object.inviteToken = "";
                        }
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (typeof message.teamId === "number")
                                object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                            else
                                object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                        if (message.inviteToken != null && message.hasOwnProperty("inviteToken"))
                            object.inviteToken = message.inviteToken;
                        return object;
                    };

                    /**
                     * Converts this GetRegistrationSessionQuery to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetRegistrationSessionQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetRegistrationSessionQuery;
                })();

                registration.GetRegistrationSessionResponse = (function() {

                    /**
                     * Properties of a GetRegistrationSessionResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @interface IGetRegistrationSessionResponse
                     * @property {isuxportal.proto.resources.ITeam|null} [team] GetRegistrationSessionResponse team
                     * @property {isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status|null} [status] GetRegistrationSessionResponse status
                     * @property {string|null} [githubLogin] GetRegistrationSessionResponse githubLogin
                     * @property {string|null} [githubAvatarUrl] GetRegistrationSessionResponse githubAvatarUrl
                     * @property {string|null} [discordTag] GetRegistrationSessionResponse discordTag
                     * @property {string|null} [discordAvatarUrl] GetRegistrationSessionResponse discordAvatarUrl
                     * @property {string|null} [memberInviteUrl] GetRegistrationSessionResponse memberInviteUrl
                     * @property {string|null} [discordServerId] GetRegistrationSessionResponse discordServerId
                     */

                    /**
                     * Constructs a new GetRegistrationSessionResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents a GetRegistrationSessionResponse.
                     * @implements IGetRegistrationSessionResponse
                     * @constructor
                     * @param {isuxportal.proto.services.registration.IGetRegistrationSessionResponse=} [properties] Properties to set
                     */
                    function GetRegistrationSessionResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetRegistrationSessionResponse team.
                     * @member {isuxportal.proto.resources.ITeam|null|undefined} team
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     */
                    GetRegistrationSessionResponse.prototype.team = null;

                    /**
                     * GetRegistrationSessionResponse status.
                     * @member {isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status} status
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     */
                    GetRegistrationSessionResponse.prototype.status = 0;

                    /**
                     * GetRegistrationSessionResponse githubLogin.
                     * @member {string} githubLogin
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     */
                    GetRegistrationSessionResponse.prototype.githubLogin = "";

                    /**
                     * GetRegistrationSessionResponse githubAvatarUrl.
                     * @member {string} githubAvatarUrl
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     */
                    GetRegistrationSessionResponse.prototype.githubAvatarUrl = "";

                    /**
                     * GetRegistrationSessionResponse discordTag.
                     * @member {string} discordTag
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     */
                    GetRegistrationSessionResponse.prototype.discordTag = "";

                    /**
                     * GetRegistrationSessionResponse discordAvatarUrl.
                     * @member {string} discordAvatarUrl
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     */
                    GetRegistrationSessionResponse.prototype.discordAvatarUrl = "";

                    /**
                     * GetRegistrationSessionResponse memberInviteUrl.
                     * @member {string} memberInviteUrl
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     */
                    GetRegistrationSessionResponse.prototype.memberInviteUrl = "";

                    /**
                     * GetRegistrationSessionResponse discordServerId.
                     * @member {string} discordServerId
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     */
                    GetRegistrationSessionResponse.prototype.discordServerId = "";

                    /**
                     * Creates a new GetRegistrationSessionResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IGetRegistrationSessionResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.GetRegistrationSessionResponse} GetRegistrationSessionResponse instance
                     */
                    GetRegistrationSessionResponse.create = function create(properties) {
                        return new GetRegistrationSessionResponse(properties);
                    };

                    /**
                     * Encodes the specified GetRegistrationSessionResponse message. Does not implicitly {@link isuxportal.proto.services.registration.GetRegistrationSessionResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IGetRegistrationSessionResponse} message GetRegistrationSessionResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetRegistrationSessionResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                            $root.isuxportal.proto.resources.Team.encode(message.team, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                        if (message.githubLogin != null && Object.hasOwnProperty.call(message, "githubLogin"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.githubLogin);
                        if (message.githubAvatarUrl != null && Object.hasOwnProperty.call(message, "githubAvatarUrl"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.githubAvatarUrl);
                        if (message.discordTag != null && Object.hasOwnProperty.call(message, "discordTag"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.discordTag);
                        if (message.discordAvatarUrl != null && Object.hasOwnProperty.call(message, "discordAvatarUrl"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.discordAvatarUrl);
                        if (message.memberInviteUrl != null && Object.hasOwnProperty.call(message, "memberInviteUrl"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.memberInviteUrl);
                        if (message.discordServerId != null && Object.hasOwnProperty.call(message, "discordServerId"))
                            writer.uint32(/* id 8, wireType 2 =*/66).string(message.discordServerId);
                        return writer;
                    };

                    /**
                     * Encodes the specified GetRegistrationSessionResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.GetRegistrationSessionResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IGetRegistrationSessionResponse} message GetRegistrationSessionResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetRegistrationSessionResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetRegistrationSessionResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.GetRegistrationSessionResponse} GetRegistrationSessionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetRegistrationSessionResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.GetRegistrationSessionResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.team = $root.isuxportal.proto.resources.Team.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.status = reader.int32();
                                break;
                            case 3:
                                message.githubLogin = reader.string();
                                break;
                            case 4:
                                message.githubAvatarUrl = reader.string();
                                break;
                            case 5:
                                message.discordTag = reader.string();
                                break;
                            case 6:
                                message.discordAvatarUrl = reader.string();
                                break;
                            case 7:
                                message.memberInviteUrl = reader.string();
                                break;
                            case 8:
                                message.discordServerId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetRegistrationSessionResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.GetRegistrationSessionResponse} GetRegistrationSessionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetRegistrationSessionResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetRegistrationSessionResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetRegistrationSessionResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.team != null && message.hasOwnProperty("team")) {
                            var error = $root.isuxportal.proto.resources.Team.verify(message.team);
                            if (error)
                                return "team." + error;
                        }
                        if (message.status != null && message.hasOwnProperty("status"))
                            switch (message.status) {
                            default:
                                return "status: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            }
                        if (message.githubLogin != null && message.hasOwnProperty("githubLogin"))
                            if (!$util.isString(message.githubLogin))
                                return "githubLogin: string expected";
                        if (message.githubAvatarUrl != null && message.hasOwnProperty("githubAvatarUrl"))
                            if (!$util.isString(message.githubAvatarUrl))
                                return "githubAvatarUrl: string expected";
                        if (message.discordTag != null && message.hasOwnProperty("discordTag"))
                            if (!$util.isString(message.discordTag))
                                return "discordTag: string expected";
                        if (message.discordAvatarUrl != null && message.hasOwnProperty("discordAvatarUrl"))
                            if (!$util.isString(message.discordAvatarUrl))
                                return "discordAvatarUrl: string expected";
                        if (message.memberInviteUrl != null && message.hasOwnProperty("memberInviteUrl"))
                            if (!$util.isString(message.memberInviteUrl))
                                return "memberInviteUrl: string expected";
                        if (message.discordServerId != null && message.hasOwnProperty("discordServerId"))
                            if (!$util.isString(message.discordServerId))
                                return "discordServerId: string expected";
                        return null;
                    };

                    /**
                     * Creates a GetRegistrationSessionResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.GetRegistrationSessionResponse} GetRegistrationSessionResponse
                     */
                    GetRegistrationSessionResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.GetRegistrationSessionResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.registration.GetRegistrationSessionResponse();
                        if (object.team != null) {
                            if (typeof object.team !== "object")
                                throw TypeError(".isuxportal.proto.services.registration.GetRegistrationSessionResponse.team: object expected");
                            message.team = $root.isuxportal.proto.resources.Team.fromObject(object.team);
                        }
                        switch (object.status) {
                        case "CLOSED":
                        case 0:
                            message.status = 0;
                            break;
                        case "NOT_JOINABLE":
                        case 1:
                            message.status = 1;
                            break;
                        case "NOT_LOGGED_IN":
                        case 2:
                            message.status = 2;
                            break;
                        case "CREATABLE":
                        case 3:
                            message.status = 3;
                            break;
                        case "JOINABLE":
                        case 4:
                            message.status = 4;
                            break;
                        case "JOINED":
                        case 5:
                            message.status = 5;
                            break;
                        }
                        if (object.githubLogin != null)
                            message.githubLogin = String(object.githubLogin);
                        if (object.githubAvatarUrl != null)
                            message.githubAvatarUrl = String(object.githubAvatarUrl);
                        if (object.discordTag != null)
                            message.discordTag = String(object.discordTag);
                        if (object.discordAvatarUrl != null)
                            message.discordAvatarUrl = String(object.discordAvatarUrl);
                        if (object.memberInviteUrl != null)
                            message.memberInviteUrl = String(object.memberInviteUrl);
                        if (object.discordServerId != null)
                            message.discordServerId = String(object.discordServerId);
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetRegistrationSessionResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.GetRegistrationSessionResponse} message GetRegistrationSessionResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetRegistrationSessionResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.team = null;
                            object.status = options.enums === String ? "CLOSED" : 0;
                            object.githubLogin = "";
                            object.githubAvatarUrl = "";
                            object.discordTag = "";
                            object.discordAvatarUrl = "";
                            object.memberInviteUrl = "";
                            object.discordServerId = "";
                        }
                        if (message.team != null && message.hasOwnProperty("team"))
                            object.team = $root.isuxportal.proto.resources.Team.toObject(message.team, options);
                        if (message.status != null && message.hasOwnProperty("status"))
                            object.status = options.enums === String ? $root.isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status[message.status] : message.status;
                        if (message.githubLogin != null && message.hasOwnProperty("githubLogin"))
                            object.githubLogin = message.githubLogin;
                        if (message.githubAvatarUrl != null && message.hasOwnProperty("githubAvatarUrl"))
                            object.githubAvatarUrl = message.githubAvatarUrl;
                        if (message.discordTag != null && message.hasOwnProperty("discordTag"))
                            object.discordTag = message.discordTag;
                        if (message.discordAvatarUrl != null && message.hasOwnProperty("discordAvatarUrl"))
                            object.discordAvatarUrl = message.discordAvatarUrl;
                        if (message.memberInviteUrl != null && message.hasOwnProperty("memberInviteUrl"))
                            object.memberInviteUrl = message.memberInviteUrl;
                        if (message.discordServerId != null && message.hasOwnProperty("discordServerId"))
                            object.discordServerId = message.discordServerId;
                        return object;
                    };

                    /**
                     * Converts this GetRegistrationSessionResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetRegistrationSessionResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Status enum.
                     * @name isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status
                     * @enum {number}
                     * @property {number} CLOSED=0 CLOSED value
                     * @property {number} NOT_JOINABLE=1 NOT_JOINABLE value
                     * @property {number} NOT_LOGGED_IN=2 NOT_LOGGED_IN value
                     * @property {number} CREATABLE=3 CREATABLE value
                     * @property {number} JOINABLE=4 JOINABLE value
                     * @property {number} JOINED=5 JOINED value
                     */
                    GetRegistrationSessionResponse.Status = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "CLOSED"] = 0;
                        values[valuesById[1] = "NOT_JOINABLE"] = 1;
                        values[valuesById[2] = "NOT_LOGGED_IN"] = 2;
                        values[valuesById[3] = "CREATABLE"] = 3;
                        values[valuesById[4] = "JOINABLE"] = 4;
                        values[valuesById[5] = "JOINED"] = 5;
                        return values;
                    })();

                    return GetRegistrationSessionResponse;
                })();

                registration.UpdateRegistrationRequest = (function() {

                    /**
                     * Properties of an UpdateRegistrationRequest.
                     * @memberof isuxportal.proto.services.registration
                     * @interface IUpdateRegistrationRequest
                     * @property {string|null} [teamName] UpdateRegistrationRequest teamName
                     * @property {string|null} [name] UpdateRegistrationRequest name
                     * @property {string|null} [emailAddress] UpdateRegistrationRequest emailAddress
                     * @property {boolean|null} [isStudent] UpdateRegistrationRequest isStudent
                     */

                    /**
                     * Constructs a new UpdateRegistrationRequest.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents an UpdateRegistrationRequest.
                     * @implements IUpdateRegistrationRequest
                     * @constructor
                     * @param {isuxportal.proto.services.registration.IUpdateRegistrationRequest=} [properties] Properties to set
                     */
                    function UpdateRegistrationRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateRegistrationRequest teamName.
                     * @member {string} teamName
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @instance
                     */
                    UpdateRegistrationRequest.prototype.teamName = "";

                    /**
                     * UpdateRegistrationRequest name.
                     * @member {string} name
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @instance
                     */
                    UpdateRegistrationRequest.prototype.name = "";

                    /**
                     * UpdateRegistrationRequest emailAddress.
                     * @member {string} emailAddress
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @instance
                     */
                    UpdateRegistrationRequest.prototype.emailAddress = "";

                    /**
                     * UpdateRegistrationRequest isStudent.
                     * @member {boolean} isStudent
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @instance
                     */
                    UpdateRegistrationRequest.prototype.isStudent = false;

                    /**
                     * Creates a new UpdateRegistrationRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IUpdateRegistrationRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.UpdateRegistrationRequest} UpdateRegistrationRequest instance
                     */
                    UpdateRegistrationRequest.create = function create(properties) {
                        return new UpdateRegistrationRequest(properties);
                    };

                    /**
                     * Encodes the specified UpdateRegistrationRequest message. Does not implicitly {@link isuxportal.proto.services.registration.UpdateRegistrationRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IUpdateRegistrationRequest} message UpdateRegistrationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateRegistrationRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamName != null && Object.hasOwnProperty.call(message, "teamName"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.teamName);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.emailAddress != null && Object.hasOwnProperty.call(message, "emailAddress"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.emailAddress);
                        if (message.isStudent != null && Object.hasOwnProperty.call(message, "isStudent"))
                            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isStudent);
                        return writer;
                    };

                    /**
                     * Encodes the specified UpdateRegistrationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.UpdateRegistrationRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IUpdateRegistrationRequest} message UpdateRegistrationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateRegistrationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpdateRegistrationRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.UpdateRegistrationRequest} UpdateRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateRegistrationRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.UpdateRegistrationRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamName = reader.string();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            case 3:
                                message.emailAddress = reader.string();
                                break;
                            case 4:
                                message.isStudent = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UpdateRegistrationRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.UpdateRegistrationRequest} UpdateRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateRegistrationRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpdateRegistrationRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdateRegistrationRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamName != null && message.hasOwnProperty("teamName"))
                            if (!$util.isString(message.teamName))
                                return "teamName: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.emailAddress != null && message.hasOwnProperty("emailAddress"))
                            if (!$util.isString(message.emailAddress))
                                return "emailAddress: string expected";
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            if (typeof message.isStudent !== "boolean")
                                return "isStudent: boolean expected";
                        return null;
                    };

                    /**
                     * Creates an UpdateRegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.UpdateRegistrationRequest} UpdateRegistrationRequest
                     */
                    UpdateRegistrationRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.UpdateRegistrationRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.registration.UpdateRegistrationRequest();
                        if (object.teamName != null)
                            message.teamName = String(object.teamName);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.emailAddress != null)
                            message.emailAddress = String(object.emailAddress);
                        if (object.isStudent != null)
                            message.isStudent = Boolean(object.isStudent);
                        return message;
                    };

                    /**
                     * Creates a plain object from an UpdateRegistrationRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.UpdateRegistrationRequest} message UpdateRegistrationRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdateRegistrationRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.teamName = "";
                            object.name = "";
                            object.emailAddress = "";
                            object.isStudent = false;
                        }
                        if (message.teamName != null && message.hasOwnProperty("teamName"))
                            object.teamName = message.teamName;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.emailAddress != null && message.hasOwnProperty("emailAddress"))
                            object.emailAddress = message.emailAddress;
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            object.isStudent = message.isStudent;
                        return object;
                    };

                    /**
                     * Converts this UpdateRegistrationRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdateRegistrationRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpdateRegistrationRequest;
                })();

                registration.UpdateRegistrationResponse = (function() {

                    /**
                     * Properties of an UpdateRegistrationResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @interface IUpdateRegistrationResponse
                     */

                    /**
                     * Constructs a new UpdateRegistrationResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents an UpdateRegistrationResponse.
                     * @implements IUpdateRegistrationResponse
                     * @constructor
                     * @param {isuxportal.proto.services.registration.IUpdateRegistrationResponse=} [properties] Properties to set
                     */
                    function UpdateRegistrationResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new UpdateRegistrationResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IUpdateRegistrationResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.UpdateRegistrationResponse} UpdateRegistrationResponse instance
                     */
                    UpdateRegistrationResponse.create = function create(properties) {
                        return new UpdateRegistrationResponse(properties);
                    };

                    /**
                     * Encodes the specified UpdateRegistrationResponse message. Does not implicitly {@link isuxportal.proto.services.registration.UpdateRegistrationResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IUpdateRegistrationResponse} message UpdateRegistrationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateRegistrationResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified UpdateRegistrationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.UpdateRegistrationResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IUpdateRegistrationResponse} message UpdateRegistrationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateRegistrationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpdateRegistrationResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.UpdateRegistrationResponse} UpdateRegistrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateRegistrationResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.UpdateRegistrationResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UpdateRegistrationResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.UpdateRegistrationResponse} UpdateRegistrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateRegistrationResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpdateRegistrationResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdateRegistrationResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates an UpdateRegistrationResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.UpdateRegistrationResponse} UpdateRegistrationResponse
                     */
                    UpdateRegistrationResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.UpdateRegistrationResponse)
                            return object;
                        return new $root.isuxportal.proto.services.registration.UpdateRegistrationResponse();
                    };

                    /**
                     * Creates a plain object from an UpdateRegistrationResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.UpdateRegistrationResponse} message UpdateRegistrationResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdateRegistrationResponse.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this UpdateRegistrationResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdateRegistrationResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpdateRegistrationResponse;
                })();

                registration.DeleteRegistrationRequest = (function() {

                    /**
                     * Properties of a DeleteRegistrationRequest.
                     * @memberof isuxportal.proto.services.registration
                     * @interface IDeleteRegistrationRequest
                     */

                    /**
                     * Constructs a new DeleteRegistrationRequest.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents a DeleteRegistrationRequest.
                     * @implements IDeleteRegistrationRequest
                     * @constructor
                     * @param {isuxportal.proto.services.registration.IDeleteRegistrationRequest=} [properties] Properties to set
                     */
                    function DeleteRegistrationRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new DeleteRegistrationRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IDeleteRegistrationRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.DeleteRegistrationRequest} DeleteRegistrationRequest instance
                     */
                    DeleteRegistrationRequest.create = function create(properties) {
                        return new DeleteRegistrationRequest(properties);
                    };

                    /**
                     * Encodes the specified DeleteRegistrationRequest message. Does not implicitly {@link isuxportal.proto.services.registration.DeleteRegistrationRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IDeleteRegistrationRequest} message DeleteRegistrationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteRegistrationRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteRegistrationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.DeleteRegistrationRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IDeleteRegistrationRequest} message DeleteRegistrationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteRegistrationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteRegistrationRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.DeleteRegistrationRequest} DeleteRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteRegistrationRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.DeleteRegistrationRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteRegistrationRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.DeleteRegistrationRequest} DeleteRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteRegistrationRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteRegistrationRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteRegistrationRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a DeleteRegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.DeleteRegistrationRequest} DeleteRegistrationRequest
                     */
                    DeleteRegistrationRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.DeleteRegistrationRequest)
                            return object;
                        return new $root.isuxportal.proto.services.registration.DeleteRegistrationRequest();
                    };

                    /**
                     * Creates a plain object from a DeleteRegistrationRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.DeleteRegistrationRequest} message DeleteRegistrationRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteRegistrationRequest.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this DeleteRegistrationRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteRegistrationRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteRegistrationRequest;
                })();

                registration.DeleteRegistrationResponse = (function() {

                    /**
                     * Properties of a DeleteRegistrationResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @interface IDeleteRegistrationResponse
                     */

                    /**
                     * Constructs a new DeleteRegistrationResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents a DeleteRegistrationResponse.
                     * @implements IDeleteRegistrationResponse
                     * @constructor
                     * @param {isuxportal.proto.services.registration.IDeleteRegistrationResponse=} [properties] Properties to set
                     */
                    function DeleteRegistrationResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new DeleteRegistrationResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IDeleteRegistrationResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.DeleteRegistrationResponse} DeleteRegistrationResponse instance
                     */
                    DeleteRegistrationResponse.create = function create(properties) {
                        return new DeleteRegistrationResponse(properties);
                    };

                    /**
                     * Encodes the specified DeleteRegistrationResponse message. Does not implicitly {@link isuxportal.proto.services.registration.DeleteRegistrationResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IDeleteRegistrationResponse} message DeleteRegistrationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteRegistrationResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteRegistrationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.DeleteRegistrationResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IDeleteRegistrationResponse} message DeleteRegistrationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteRegistrationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteRegistrationResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.DeleteRegistrationResponse} DeleteRegistrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteRegistrationResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.DeleteRegistrationResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteRegistrationResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.DeleteRegistrationResponse} DeleteRegistrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteRegistrationResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteRegistrationResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteRegistrationResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a DeleteRegistrationResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.DeleteRegistrationResponse} DeleteRegistrationResponse
                     */
                    DeleteRegistrationResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.DeleteRegistrationResponse)
                            return object;
                        return new $root.isuxportal.proto.services.registration.DeleteRegistrationResponse();
                    };

                    /**
                     * Creates a plain object from a DeleteRegistrationResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.DeleteRegistrationResponse} message DeleteRegistrationResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteRegistrationResponse.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this DeleteRegistrationResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteRegistrationResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteRegistrationResponse;
                })();

                return registration;
            })();

            return services;
        })();

        return proto;
    })();

    return isuxportal;
})();

module.exports = $root;
