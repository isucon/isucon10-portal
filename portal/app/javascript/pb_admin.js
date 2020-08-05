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
                 * @property {google.protobuf.ITimestamp|null} [createdAt] BenchmarkJob createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] BenchmarkJob updatedAt
                 * @property {google.protobuf.ITimestamp|null} [startedAt] BenchmarkJob startedAt
                 * @property {google.protobuf.ITimestamp|null} [finishedAt] BenchmarkJob finishedAt
                 * @property {number|Long|null} [score] BenchmarkJob score
                 * @property {string|null} [instanceName] BenchmarkJob instanceName
                 * @property {isuxportal.proto.resources.ITeam|null} [team] BenchmarkJob team
                 * @property {isuxportal.proto.resources.IContestantInstance|null} [target] BenchmarkJob target
                 * @property {isuxportal.proto.resources.IBenchmarkResult|null} [result] BenchmarkJob result
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
                 * BenchmarkJob score.
                 * @member {number|Long} score
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * BenchmarkJob instanceName.
                 * @member {string} instanceName
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.instanceName = "";

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
                 * BenchmarkJob result.
                 * @member {isuxportal.proto.resources.IBenchmarkResult|null|undefined} result
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.result = null;

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
                    if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.startedAt != null && Object.hasOwnProperty.call(message, "startedAt"))
                        $root.google.protobuf.Timestamp.encode(message.startedAt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.finishedAt != null && Object.hasOwnProperty.call(message, "finishedAt"))
                        $root.google.protobuf.Timestamp.encode(message.finishedAt, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int64(message.score);
                    if (message.instanceName != null && Object.hasOwnProperty.call(message, "instanceName"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.instanceName);
                    if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                        $root.isuxportal.proto.resources.Team.encode(message.team, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                    if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                        $root.isuxportal.proto.resources.ContestantInstance.encode(message.target, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                    if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                        $root.isuxportal.proto.resources.BenchmarkResult.encode(message.result, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
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
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.startedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.finishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.score = reader.int64();
                            break;
                        case 10:
                            message.instanceName = reader.string();
                            break;
                        case 16:
                            message.team = $root.isuxportal.proto.resources.Team.decode(reader, reader.uint32());
                            break;
                        case 17:
                            message.target = $root.isuxportal.proto.resources.ContestantInstance.decode(reader, reader.uint32());
                            break;
                        case 18:
                            message.result = $root.isuxportal.proto.resources.BenchmarkResult.decode(reader, reader.uint32());
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
                    if (message.score != null && message.hasOwnProperty("score"))
                        if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                            return "score: integer|Long expected";
                    if (message.instanceName != null && message.hasOwnProperty("instanceName"))
                        if (!$util.isString(message.instanceName))
                            return "instanceName: string expected";
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
                    if (message.result != null && message.hasOwnProperty("result")) {
                        var error = $root.isuxportal.proto.resources.BenchmarkResult.verify(message.result);
                        if (error)
                            return "result." + error;
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
                    if (object.score != null)
                        if ($util.Long)
                            (message.score = $util.Long.fromValue(object.score)).unsigned = false;
                        else if (typeof object.score === "string")
                            message.score = parseInt(object.score, 10);
                        else if (typeof object.score === "number")
                            message.score = object.score;
                        else if (typeof object.score === "object")
                            message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
                    if (object.instanceName != null)
                        message.instanceName = String(object.instanceName);
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
                    if (object.result != null) {
                        if (typeof object.result !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkJob.result: object expected");
                        message.result = $root.isuxportal.proto.resources.BenchmarkResult.fromObject(object.result);
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
                        object.createdAt = null;
                        object.updatedAt = null;
                        object.startedAt = null;
                        object.finishedAt = null;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.score = options.longs === String ? "0" : 0;
                        object.instanceName = "";
                        object.team = null;
                        object.target = null;
                        object.result = null;
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
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    if (message.startedAt != null && message.hasOwnProperty("startedAt"))
                        object.startedAt = $root.google.protobuf.Timestamp.toObject(message.startedAt, options);
                    if (message.finishedAt != null && message.hasOwnProperty("finishedAt"))
                        object.finishedAt = $root.google.protobuf.Timestamp.toObject(message.finishedAt, options);
                    if (message.score != null && message.hasOwnProperty("score"))
                        if (typeof message.score === "number")
                            object.score = options.longs === String ? String(message.score) : message.score;
                        else
                            object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
                    if (message.instanceName != null && message.hasOwnProperty("instanceName"))
                        object.instanceName = message.instanceName;
                    if (message.team != null && message.hasOwnProperty("team"))
                        object.team = $root.isuxportal.proto.resources.Team.toObject(message.team, options);
                    if (message.target != null && message.hasOwnProperty("target"))
                        object.target = $root.isuxportal.proto.resources.ContestantInstance.toObject(message.target, options);
                    if (message.result != null && message.hasOwnProperty("result"))
                        object.result = $root.isuxportal.proto.resources.BenchmarkResult.toObject(message.result, options);
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
                 * @property {isuxportal.proto.resources.BenchmarkResult.IExecution|null} [execution] BenchmarkResult execution
                 * @property {google.protobuf.ITimestamp|null} [markedAt] BenchmarkResult markedAt
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
                 * BenchmarkResult execution.
                 * @member {isuxportal.proto.resources.BenchmarkResult.IExecution|null|undefined} execution
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.execution = null;

                /**
                 * BenchmarkResult markedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} markedAt
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.markedAt = null;

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
                    if (message.execution != null && Object.hasOwnProperty.call(message, "execution"))
                        $root.isuxportal.proto.resources.BenchmarkResult.Execution.encode(message.execution, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.markedAt != null && Object.hasOwnProperty.call(message, "markedAt"))
                        $root.google.protobuf.Timestamp.encode(message.markedAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
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
                            message.execution = $root.isuxportal.proto.resources.BenchmarkResult.Execution.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.markedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
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
                    if (message.execution != null && message.hasOwnProperty("execution")) {
                        var error = $root.isuxportal.proto.resources.BenchmarkResult.Execution.verify(message.execution);
                        if (error)
                            return "execution." + error;
                    }
                    if (message.markedAt != null && message.hasOwnProperty("markedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.markedAt);
                        if (error)
                            return "markedAt." + error;
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
                    if (object.execution != null) {
                        if (typeof object.execution !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkResult.execution: object expected");
                        message.execution = $root.isuxportal.proto.resources.BenchmarkResult.Execution.fromObject(object.execution);
                    }
                    if (object.markedAt != null) {
                        if (typeof object.markedAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkResult.markedAt: object expected");
                        message.markedAt = $root.google.protobuf.Timestamp.fromObject(object.markedAt);
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
                        object.execution = null;
                        object.markedAt = null;
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
                    if (message.execution != null && message.hasOwnProperty("execution"))
                        object.execution = $root.isuxportal.proto.resources.BenchmarkResult.Execution.toObject(message.execution, options);
                    if (message.markedAt != null && message.hasOwnProperty("markedAt"))
                        object.markedAt = $root.google.protobuf.Timestamp.toObject(message.markedAt, options);
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
                     * @property {number|Long|null} [raw] ScoreBreakdown raw
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
                     * ScoreBreakdown raw.
                     * @member {number|Long} raw
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @instance
                     */
                    ScoreBreakdown.prototype.raw = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
                        if (message.raw != null && Object.hasOwnProperty.call(message, "raw"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.raw);
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
                                message.raw = reader.int64();
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
                        if (message.raw != null && message.hasOwnProperty("raw"))
                            if (!$util.isInteger(message.raw) && !(message.raw && $util.isInteger(message.raw.low) && $util.isInteger(message.raw.high)))
                                return "raw: integer|Long expected";
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
                        if (object.raw != null)
                            if ($util.Long)
                                (message.raw = $util.Long.fromValue(object.raw)).unsigned = false;
                            else if (typeof object.raw === "string")
                                message.raw = parseInt(object.raw, 10);
                            else if (typeof object.raw === "number")
                                message.raw = object.raw;
                            else if (typeof object.raw === "object")
                                message.raw = new $util.LongBits(object.raw.low >>> 0, object.raw.high >>> 0).toNumber();
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
                                object.raw = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.raw = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.deduction = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.deduction = options.longs === String ? "0" : 0;
                        }
                        if (message.raw != null && message.hasOwnProperty("raw"))
                            if (typeof message.raw === "number")
                                object.raw = options.longs === String ? String(message.raw) : message.raw;
                            else
                                object.raw = options.longs === String ? $util.Long.prototype.toString.call(message.raw) : options.longs === Number ? new $util.LongBits(message.raw.low >>> 0, message.raw.high >>> 0).toNumber() : message.raw;
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

                BenchmarkResult.Execution = (function() {

                    /**
                     * Properties of an Execution.
                     * @memberof isuxportal.proto.resources.BenchmarkResult
                     * @interface IExecution
                     * @property {string|null} [reason] Execution reason
                     * @property {string|null} [stdout] Execution stdout
                     * @property {string|null} [stderr] Execution stderr
                     * @property {number|Long|null} [exitStatus] Execution exitStatus
                     * @property {number|Long|null} [exitSignal] Execution exitSignal
                     * @property {boolean|null} [signaled] Execution signaled
                     */

                    /**
                     * Constructs a new Execution.
                     * @memberof isuxportal.proto.resources.BenchmarkResult
                     * @classdesc Represents an Execution.
                     * @implements IExecution
                     * @constructor
                     * @param {isuxportal.proto.resources.BenchmarkResult.IExecution=} [properties] Properties to set
                     */
                    function Execution(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Execution reason.
                     * @member {string} reason
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @instance
                     */
                    Execution.prototype.reason = "";

                    /**
                     * Execution stdout.
                     * @member {string} stdout
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @instance
                     */
                    Execution.prototype.stdout = "";

                    /**
                     * Execution stderr.
                     * @member {string} stderr
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @instance
                     */
                    Execution.prototype.stderr = "";

                    /**
                     * Execution exitStatus.
                     * @member {number|Long} exitStatus
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @instance
                     */
                    Execution.prototype.exitStatus = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Execution exitSignal.
                     * @member {number|Long} exitSignal
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @instance
                     */
                    Execution.prototype.exitSignal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Execution signaled.
                     * @member {boolean} signaled
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @instance
                     */
                    Execution.prototype.signaled = false;

                    /**
                     * Creates a new Execution instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.IExecution=} [properties] Properties to set
                     * @returns {isuxportal.proto.resources.BenchmarkResult.Execution} Execution instance
                     */
                    Execution.create = function create(properties) {
                        return new Execution(properties);
                    };

                    /**
                     * Encodes the specified Execution message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.Execution.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.IExecution} message Execution message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Execution.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
                        if (message.stdout != null && Object.hasOwnProperty.call(message, "stdout"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.stdout);
                        if (message.stderr != null && Object.hasOwnProperty.call(message, "stderr"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.stderr);
                        if (message.exitStatus != null && Object.hasOwnProperty.call(message, "exitStatus"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.exitStatus);
                        if (message.exitSignal != null && Object.hasOwnProperty.call(message, "exitSignal"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.exitSignal);
                        if (message.signaled != null && Object.hasOwnProperty.call(message, "signaled"))
                            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.signaled);
                        return writer;
                    };

                    /**
                     * Encodes the specified Execution message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.Execution.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.IExecution} message Execution message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Execution.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Execution message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.resources.BenchmarkResult.Execution} Execution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Execution.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.BenchmarkResult.Execution();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.reason = reader.string();
                                break;
                            case 2:
                                message.stdout = reader.string();
                                break;
                            case 3:
                                message.stderr = reader.string();
                                break;
                            case 4:
                                message.exitStatus = reader.int64();
                                break;
                            case 5:
                                message.exitSignal = reader.int64();
                                break;
                            case 6:
                                message.signaled = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Execution message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.resources.BenchmarkResult.Execution} Execution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Execution.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Execution message.
                     * @function verify
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Execution.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            if (!$util.isString(message.reason))
                                return "reason: string expected";
                        if (message.stdout != null && message.hasOwnProperty("stdout"))
                            if (!$util.isString(message.stdout))
                                return "stdout: string expected";
                        if (message.stderr != null && message.hasOwnProperty("stderr"))
                            if (!$util.isString(message.stderr))
                                return "stderr: string expected";
                        if (message.exitStatus != null && message.hasOwnProperty("exitStatus"))
                            if (!$util.isInteger(message.exitStatus) && !(message.exitStatus && $util.isInteger(message.exitStatus.low) && $util.isInteger(message.exitStatus.high)))
                                return "exitStatus: integer|Long expected";
                        if (message.exitSignal != null && message.hasOwnProperty("exitSignal"))
                            if (!$util.isInteger(message.exitSignal) && !(message.exitSignal && $util.isInteger(message.exitSignal.low) && $util.isInteger(message.exitSignal.high)))
                                return "exitSignal: integer|Long expected";
                        if (message.signaled != null && message.hasOwnProperty("signaled"))
                            if (typeof message.signaled !== "boolean")
                                return "signaled: boolean expected";
                        return null;
                    };

                    /**
                     * Creates an Execution message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.resources.BenchmarkResult.Execution} Execution
                     */
                    Execution.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.resources.BenchmarkResult.Execution)
                            return object;
                        var message = new $root.isuxportal.proto.resources.BenchmarkResult.Execution();
                        if (object.reason != null)
                            message.reason = String(object.reason);
                        if (object.stdout != null)
                            message.stdout = String(object.stdout);
                        if (object.stderr != null)
                            message.stderr = String(object.stderr);
                        if (object.exitStatus != null)
                            if ($util.Long)
                                (message.exitStatus = $util.Long.fromValue(object.exitStatus)).unsigned = false;
                            else if (typeof object.exitStatus === "string")
                                message.exitStatus = parseInt(object.exitStatus, 10);
                            else if (typeof object.exitStatus === "number")
                                message.exitStatus = object.exitStatus;
                            else if (typeof object.exitStatus === "object")
                                message.exitStatus = new $util.LongBits(object.exitStatus.low >>> 0, object.exitStatus.high >>> 0).toNumber();
                        if (object.exitSignal != null)
                            if ($util.Long)
                                (message.exitSignal = $util.Long.fromValue(object.exitSignal)).unsigned = false;
                            else if (typeof object.exitSignal === "string")
                                message.exitSignal = parseInt(object.exitSignal, 10);
                            else if (typeof object.exitSignal === "number")
                                message.exitSignal = object.exitSignal;
                            else if (typeof object.exitSignal === "object")
                                message.exitSignal = new $util.LongBits(object.exitSignal.low >>> 0, object.exitSignal.high >>> 0).toNumber();
                        if (object.signaled != null)
                            message.signaled = Boolean(object.signaled);
                        return message;
                    };

                    /**
                     * Creates a plain object from an Execution message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.Execution} message Execution
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Execution.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.reason = "";
                            object.stdout = "";
                            object.stderr = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.exitStatus = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.exitStatus = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.exitSignal = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.exitSignal = options.longs === String ? "0" : 0;
                            object.signaled = false;
                        }
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            object.reason = message.reason;
                        if (message.stdout != null && message.hasOwnProperty("stdout"))
                            object.stdout = message.stdout;
                        if (message.stderr != null && message.hasOwnProperty("stderr"))
                            object.stderr = message.stderr;
                        if (message.exitStatus != null && message.hasOwnProperty("exitStatus"))
                            if (typeof message.exitStatus === "number")
                                object.exitStatus = options.longs === String ? String(message.exitStatus) : message.exitStatus;
                            else
                                object.exitStatus = options.longs === String ? $util.Long.prototype.toString.call(message.exitStatus) : options.longs === Number ? new $util.LongBits(message.exitStatus.low >>> 0, message.exitStatus.high >>> 0).toNumber() : message.exitStatus;
                        if (message.exitSignal != null && message.hasOwnProperty("exitSignal"))
                            if (typeof message.exitSignal === "number")
                                object.exitSignal = options.longs === String ? String(message.exitSignal) : message.exitSignal;
                            else
                                object.exitSignal = options.longs === String ? $util.Long.prototype.toString.call(message.exitSignal) : options.longs === Number ? new $util.LongBits(message.exitSignal.low >>> 0, message.exitSignal.high >>> 0).toNumber() : message.exitSignal;
                        if (message.signaled != null && message.hasOwnProperty("signaled"))
                            object.signaled = message.signaled;
                        return object;
                    };

                    /**
                     * Converts this Execution to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Execution.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Execution;
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
                 * @property {boolean|null} [disqualified] Team disqualified
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
                 * Team disqualified.
                 * @member {boolean} disqualified
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.disqualified = false;

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
                    if (message.disqualified != null && Object.hasOwnProperty.call(message, "disqualified"))
                        writer.uint32(/* id 9, wireType 0 =*/72).bool(message.disqualified);
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
                        case 9:
                            message.disqualified = reader.bool();
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
                    if (message.disqualified != null && message.hasOwnProperty("disqualified"))
                        if (typeof message.disqualified !== "boolean")
                            return "disqualified: boolean expected";
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
                    if (object.disqualified != null)
                        message.disqualified = Boolean(object.disqualified);
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
                        object.disqualified = false;
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
                    if (message.disqualified != null && message.hasOwnProperty("disqualified"))
                        object.disqualified = message.disqualified;
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
                            object.inviteToken = "";
                        }
                        if (message.emailAddress != null && message.hasOwnProperty("emailAddress"))
                            object.emailAddress = message.emailAddress;
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
                     * @property {string|null} [githubId] ContestantDetail githubId
                     * @property {string|null} [discordId] ContestantDetail discordId
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
                     * ContestantDetail githubId.
                     * @member {string} githubId
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @instance
                     */
                    ContestantDetail.prototype.githubId = "";

                    /**
                     * ContestantDetail discordId.
                     * @member {string} discordId
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @instance
                     */
                    ContestantDetail.prototype.discordId = "";

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
                        if (message.githubId != null && Object.hasOwnProperty.call(message, "githubId"))
                            writer.uint32(/* id 16, wireType 2 =*/130).string(message.githubId);
                        if (message.discordId != null && Object.hasOwnProperty.call(message, "discordId"))
                            writer.uint32(/* id 17, wireType 2 =*/138).string(message.discordId);
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
                            case 16:
                                message.githubId = reader.string();
                                break;
                            case 17:
                                message.discordId = reader.string();
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
                        if (message.githubId != null && message.hasOwnProperty("githubId"))
                            if (!$util.isString(message.githubId))
                                return "githubId: string expected";
                        if (message.discordId != null && message.hasOwnProperty("discordId"))
                            if (!$util.isString(message.discordId))
                                return "discordId: string expected";
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
                        if (object.githubId != null)
                            message.githubId = String(object.githubId);
                        if (object.discordId != null)
                            message.discordId = String(object.discordId);
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
                            object.githubId = "";
                            object.discordId = "";
                        }
                        if (message.githubLogin != null && message.hasOwnProperty("githubLogin"))
                            object.githubLogin = message.githubLogin;
                        if (message.discordTag != null && message.hasOwnProperty("discordTag"))
                            object.discordTag = message.discordTag;
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            object.isStudent = message.isStudent;
                        if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                            object.avatarUrl = message.avatarUrl;
                        if (message.githubId != null && message.hasOwnProperty("githubId"))
                            object.githubId = message.githubId;
                        if (message.discordId != null && message.hasOwnProperty("discordId"))
                            object.discordId = message.discordId;
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
                 * @property {string|null} [originalQuestion] Clarification originalQuestion
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
                 * Clarification originalQuestion.
                 * @member {string} originalQuestion
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.originalQuestion = "";

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
                    if (message.originalQuestion != null && Object.hasOwnProperty.call(message, "originalQuestion"))
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.originalQuestion);
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
                        case 9:
                            message.originalQuestion = reader.string();
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
                    if (message.originalQuestion != null && message.hasOwnProperty("originalQuestion"))
                        if (!$util.isString(message.originalQuestion))
                            return "originalQuestion: string expected";
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
                    if (object.originalQuestion != null)
                        message.originalQuestion = String(object.originalQuestion);
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
                        object.originalQuestion = "";
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
                    if (message.originalQuestion != null && message.hasOwnProperty("originalQuestion"))
                        object.originalQuestion = message.originalQuestion;
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

            resources.Leaderboard = (function() {

                /**
                 * Properties of a Leaderboard.
                 * @memberof isuxportal.proto.resources
                 * @interface ILeaderboard
                 * @property {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>|null} [teams] Leaderboard teams
                 * @property {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>|null} [generalTeams] Leaderboard generalTeams
                 * @property {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>|null} [studentTeams] Leaderboard studentTeams
                 * @property {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>|null} [progresses] Leaderboard progresses
                 * @property {boolean|null} [frozen] Leaderboard frozen
                 * @property {google.protobuf.ITimestamp|null} [contestStartsAt] Leaderboard contestStartsAt
                 * @property {google.protobuf.ITimestamp|null} [contestFreezesAt] Leaderboard contestFreezesAt
                 * @property {google.protobuf.ITimestamp|null} [contestEndsAt] Leaderboard contestEndsAt
                 */

                /**
                 * Constructs a new Leaderboard.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a Leaderboard.
                 * @implements ILeaderboard
                 * @constructor
                 * @param {isuxportal.proto.resources.ILeaderboard=} [properties] Properties to set
                 */
                function Leaderboard(properties) {
                    this.teams = [];
                    this.generalTeams = [];
                    this.studentTeams = [];
                    this.progresses = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Leaderboard teams.
                 * @member {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>} teams
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 */
                Leaderboard.prototype.teams = $util.emptyArray;

                /**
                 * Leaderboard generalTeams.
                 * @member {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>} generalTeams
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 */
                Leaderboard.prototype.generalTeams = $util.emptyArray;

                /**
                 * Leaderboard studentTeams.
                 * @member {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>} studentTeams
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 */
                Leaderboard.prototype.studentTeams = $util.emptyArray;

                /**
                 * Leaderboard progresses.
                 * @member {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>} progresses
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 */
                Leaderboard.prototype.progresses = $util.emptyArray;

                /**
                 * Leaderboard frozen.
                 * @member {boolean} frozen
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 */
                Leaderboard.prototype.frozen = false;

                /**
                 * Leaderboard contestStartsAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} contestStartsAt
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 */
                Leaderboard.prototype.contestStartsAt = null;

                /**
                 * Leaderboard contestFreezesAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} contestFreezesAt
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 */
                Leaderboard.prototype.contestFreezesAt = null;

                /**
                 * Leaderboard contestEndsAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} contestEndsAt
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 */
                Leaderboard.prototype.contestEndsAt = null;

                /**
                 * Creates a new Leaderboard instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @static
                 * @param {isuxportal.proto.resources.ILeaderboard=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.Leaderboard} Leaderboard instance
                 */
                Leaderboard.create = function create(properties) {
                    return new Leaderboard(properties);
                };

                /**
                 * Encodes the specified Leaderboard message. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @static
                 * @param {isuxportal.proto.resources.ILeaderboard} message Leaderboard message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Leaderboard.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.teams != null && message.teams.length)
                        for (var i = 0; i < message.teams.length; ++i)
                            $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.encode(message.teams[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.generalTeams != null && message.generalTeams.length)
                        for (var i = 0; i < message.generalTeams.length; ++i)
                            $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.encode(message.generalTeams[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.studentTeams != null && message.studentTeams.length)
                        for (var i = 0; i < message.studentTeams.length; ++i)
                            $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.encode(message.studentTeams[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.progresses != null && message.progresses.length)
                        for (var i = 0; i < message.progresses.length; ++i)
                            $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.encode(message.progresses[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.frozen != null && Object.hasOwnProperty.call(message, "frozen"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.frozen);
                    if (message.contestStartsAt != null && Object.hasOwnProperty.call(message, "contestStartsAt"))
                        $root.google.protobuf.Timestamp.encode(message.contestStartsAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.contestFreezesAt != null && Object.hasOwnProperty.call(message, "contestFreezesAt"))
                        $root.google.protobuf.Timestamp.encode(message.contestFreezesAt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.contestEndsAt != null && Object.hasOwnProperty.call(message, "contestEndsAt"))
                        $root.google.protobuf.Timestamp.encode(message.contestEndsAt, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Leaderboard message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @static
                 * @param {isuxportal.proto.resources.ILeaderboard} message Leaderboard message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Leaderboard.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Leaderboard message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.Leaderboard} Leaderboard
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Leaderboard.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Leaderboard();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.teams && message.teams.length))
                                message.teams = [];
                            message.teams.push($root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            if (!(message.generalTeams && message.generalTeams.length))
                                message.generalTeams = [];
                            message.generalTeams.push($root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            if (!(message.studentTeams && message.studentTeams.length))
                                message.studentTeams = [];
                            message.studentTeams.push($root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.progresses && message.progresses.length))
                                message.progresses = [];
                            message.progresses.push($root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            message.frozen = reader.bool();
                            break;
                        case 6:
                            message.contestStartsAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.contestFreezesAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.contestEndsAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Leaderboard message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.Leaderboard} Leaderboard
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Leaderboard.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Leaderboard message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Leaderboard.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.teams != null && message.hasOwnProperty("teams")) {
                        if (!Array.isArray(message.teams))
                            return "teams: array expected";
                        for (var i = 0; i < message.teams.length; ++i) {
                            var error = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.verify(message.teams[i]);
                            if (error)
                                return "teams." + error;
                        }
                    }
                    if (message.generalTeams != null && message.hasOwnProperty("generalTeams")) {
                        if (!Array.isArray(message.generalTeams))
                            return "generalTeams: array expected";
                        for (var i = 0; i < message.generalTeams.length; ++i) {
                            var error = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.verify(message.generalTeams[i]);
                            if (error)
                                return "generalTeams." + error;
                        }
                    }
                    if (message.studentTeams != null && message.hasOwnProperty("studentTeams")) {
                        if (!Array.isArray(message.studentTeams))
                            return "studentTeams: array expected";
                        for (var i = 0; i < message.studentTeams.length; ++i) {
                            var error = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.verify(message.studentTeams[i]);
                            if (error)
                                return "studentTeams." + error;
                        }
                    }
                    if (message.progresses != null && message.hasOwnProperty("progresses")) {
                        if (!Array.isArray(message.progresses))
                            return "progresses: array expected";
                        for (var i = 0; i < message.progresses.length; ++i) {
                            var error = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.verify(message.progresses[i]);
                            if (error)
                                return "progresses." + error;
                        }
                    }
                    if (message.frozen != null && message.hasOwnProperty("frozen"))
                        if (typeof message.frozen !== "boolean")
                            return "frozen: boolean expected";
                    if (message.contestStartsAt != null && message.hasOwnProperty("contestStartsAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.contestStartsAt);
                        if (error)
                            return "contestStartsAt." + error;
                    }
                    if (message.contestFreezesAt != null && message.hasOwnProperty("contestFreezesAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.contestFreezesAt);
                        if (error)
                            return "contestFreezesAt." + error;
                    }
                    if (message.contestEndsAt != null && message.hasOwnProperty("contestEndsAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.contestEndsAt);
                        if (error)
                            return "contestEndsAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Leaderboard message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.Leaderboard} Leaderboard
                 */
                Leaderboard.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.Leaderboard)
                        return object;
                    var message = new $root.isuxportal.proto.resources.Leaderboard();
                    if (object.teams) {
                        if (!Array.isArray(object.teams))
                            throw TypeError(".isuxportal.proto.resources.Leaderboard.teams: array expected");
                        message.teams = [];
                        for (var i = 0; i < object.teams.length; ++i) {
                            if (typeof object.teams[i] !== "object")
                                throw TypeError(".isuxportal.proto.resources.Leaderboard.teams: object expected");
                            message.teams[i] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.fromObject(object.teams[i]);
                        }
                    }
                    if (object.generalTeams) {
                        if (!Array.isArray(object.generalTeams))
                            throw TypeError(".isuxportal.proto.resources.Leaderboard.generalTeams: array expected");
                        message.generalTeams = [];
                        for (var i = 0; i < object.generalTeams.length; ++i) {
                            if (typeof object.generalTeams[i] !== "object")
                                throw TypeError(".isuxportal.proto.resources.Leaderboard.generalTeams: object expected");
                            message.generalTeams[i] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.fromObject(object.generalTeams[i]);
                        }
                    }
                    if (object.studentTeams) {
                        if (!Array.isArray(object.studentTeams))
                            throw TypeError(".isuxportal.proto.resources.Leaderboard.studentTeams: array expected");
                        message.studentTeams = [];
                        for (var i = 0; i < object.studentTeams.length; ++i) {
                            if (typeof object.studentTeams[i] !== "object")
                                throw TypeError(".isuxportal.proto.resources.Leaderboard.studentTeams: object expected");
                            message.studentTeams[i] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.fromObject(object.studentTeams[i]);
                        }
                    }
                    if (object.progresses) {
                        if (!Array.isArray(object.progresses))
                            throw TypeError(".isuxportal.proto.resources.Leaderboard.progresses: array expected");
                        message.progresses = [];
                        for (var i = 0; i < object.progresses.length; ++i) {
                            if (typeof object.progresses[i] !== "object")
                                throw TypeError(".isuxportal.proto.resources.Leaderboard.progresses: object expected");
                            message.progresses[i] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.fromObject(object.progresses[i]);
                        }
                    }
                    if (object.frozen != null)
                        message.frozen = Boolean(object.frozen);
                    if (object.contestStartsAt != null) {
                        if (typeof object.contestStartsAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.Leaderboard.contestStartsAt: object expected");
                        message.contestStartsAt = $root.google.protobuf.Timestamp.fromObject(object.contestStartsAt);
                    }
                    if (object.contestFreezesAt != null) {
                        if (typeof object.contestFreezesAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.Leaderboard.contestFreezesAt: object expected");
                        message.contestFreezesAt = $root.google.protobuf.Timestamp.fromObject(object.contestFreezesAt);
                    }
                    if (object.contestEndsAt != null) {
                        if (typeof object.contestEndsAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.Leaderboard.contestEndsAt: object expected");
                        message.contestEndsAt = $root.google.protobuf.Timestamp.fromObject(object.contestEndsAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Leaderboard message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @static
                 * @param {isuxportal.proto.resources.Leaderboard} message Leaderboard
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Leaderboard.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.teams = [];
                        object.generalTeams = [];
                        object.studentTeams = [];
                        object.progresses = [];
                    }
                    if (options.defaults) {
                        object.frozen = false;
                        object.contestStartsAt = null;
                        object.contestFreezesAt = null;
                        object.contestEndsAt = null;
                    }
                    if (message.teams && message.teams.length) {
                        object.teams = [];
                        for (var j = 0; j < message.teams.length; ++j)
                            object.teams[j] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.toObject(message.teams[j], options);
                    }
                    if (message.generalTeams && message.generalTeams.length) {
                        object.generalTeams = [];
                        for (var j = 0; j < message.generalTeams.length; ++j)
                            object.generalTeams[j] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.toObject(message.generalTeams[j], options);
                    }
                    if (message.studentTeams && message.studentTeams.length) {
                        object.studentTeams = [];
                        for (var j = 0; j < message.studentTeams.length; ++j)
                            object.studentTeams[j] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.toObject(message.studentTeams[j], options);
                    }
                    if (message.progresses && message.progresses.length) {
                        object.progresses = [];
                        for (var j = 0; j < message.progresses.length; ++j)
                            object.progresses[j] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.toObject(message.progresses[j], options);
                    }
                    if (message.frozen != null && message.hasOwnProperty("frozen"))
                        object.frozen = message.frozen;
                    if (message.contestStartsAt != null && message.hasOwnProperty("contestStartsAt"))
                        object.contestStartsAt = $root.google.protobuf.Timestamp.toObject(message.contestStartsAt, options);
                    if (message.contestFreezesAt != null && message.hasOwnProperty("contestFreezesAt"))
                        object.contestFreezesAt = $root.google.protobuf.Timestamp.toObject(message.contestFreezesAt, options);
                    if (message.contestEndsAt != null && message.hasOwnProperty("contestEndsAt"))
                        object.contestEndsAt = $root.google.protobuf.Timestamp.toObject(message.contestEndsAt, options);
                    return object;
                };

                /**
                 * Converts this Leaderboard to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Leaderboard.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Leaderboard.LeaderboardItem = (function() {

                    /**
                     * Properties of a LeaderboardItem.
                     * @memberof isuxportal.proto.resources.Leaderboard
                     * @interface ILeaderboardItem
                     * @property {Array.<isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore>|null} [scores] LeaderboardItem scores
                     * @property {isuxportal.proto.resources.ITeam|null} [team] LeaderboardItem team
                     */

                    /**
                     * Constructs a new LeaderboardItem.
                     * @memberof isuxportal.proto.resources.Leaderboard
                     * @classdesc Represents a LeaderboardItem.
                     * @implements ILeaderboardItem
                     * @constructor
                     * @param {isuxportal.proto.resources.Leaderboard.ILeaderboardItem=} [properties] Properties to set
                     */
                    function LeaderboardItem(properties) {
                        this.scores = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * LeaderboardItem scores.
                     * @member {Array.<isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore>} scores
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @instance
                     */
                    LeaderboardItem.prototype.scores = $util.emptyArray;

                    /**
                     * LeaderboardItem team.
                     * @member {isuxportal.proto.resources.ITeam|null|undefined} team
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @instance
                     */
                    LeaderboardItem.prototype.team = null;

                    /**
                     * Creates a new LeaderboardItem instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @static
                     * @param {isuxportal.proto.resources.Leaderboard.ILeaderboardItem=} [properties] Properties to set
                     * @returns {isuxportal.proto.resources.Leaderboard.LeaderboardItem} LeaderboardItem instance
                     */
                    LeaderboardItem.create = function create(properties) {
                        return new LeaderboardItem(properties);
                    };

                    /**
                     * Encodes the specified LeaderboardItem message. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.LeaderboardItem.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @static
                     * @param {isuxportal.proto.resources.Leaderboard.ILeaderboardItem} message LeaderboardItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LeaderboardItem.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.scores != null && message.scores.length)
                            for (var i = 0; i < message.scores.length; ++i)
                                $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.encode(message.scores[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                            $root.isuxportal.proto.resources.Team.encode(message.team, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified LeaderboardItem message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.LeaderboardItem.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @static
                     * @param {isuxportal.proto.resources.Leaderboard.ILeaderboardItem} message LeaderboardItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LeaderboardItem.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a LeaderboardItem message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.resources.Leaderboard.LeaderboardItem} LeaderboardItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LeaderboardItem.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.scores && message.scores.length))
                                    message.scores = [];
                                message.scores.push($root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.decode(reader, reader.uint32()));
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
                     * Decodes a LeaderboardItem message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.resources.Leaderboard.LeaderboardItem} LeaderboardItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LeaderboardItem.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a LeaderboardItem message.
                     * @function verify
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    LeaderboardItem.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.scores != null && message.hasOwnProperty("scores")) {
                            if (!Array.isArray(message.scores))
                                return "scores: array expected";
                            for (var i = 0; i < message.scores.length; ++i) {
                                var error = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.verify(message.scores[i]);
                                if (error)
                                    return "scores." + error;
                            }
                        }
                        if (message.team != null && message.hasOwnProperty("team")) {
                            var error = $root.isuxportal.proto.resources.Team.verify(message.team);
                            if (error)
                                return "team." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a LeaderboardItem message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.resources.Leaderboard.LeaderboardItem} LeaderboardItem
                     */
                    LeaderboardItem.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem)
                            return object;
                        var message = new $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem();
                        if (object.scores) {
                            if (!Array.isArray(object.scores))
                                throw TypeError(".isuxportal.proto.resources.Leaderboard.LeaderboardItem.scores: array expected");
                            message.scores = [];
                            for (var i = 0; i < object.scores.length; ++i) {
                                if (typeof object.scores[i] !== "object")
                                    throw TypeError(".isuxportal.proto.resources.Leaderboard.LeaderboardItem.scores: object expected");
                                message.scores[i] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.fromObject(object.scores[i]);
                            }
                        }
                        if (object.team != null) {
                            if (typeof object.team !== "object")
                                throw TypeError(".isuxportal.proto.resources.Leaderboard.LeaderboardItem.team: object expected");
                            message.team = $root.isuxportal.proto.resources.Team.fromObject(object.team);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a LeaderboardItem message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @static
                     * @param {isuxportal.proto.resources.Leaderboard.LeaderboardItem} message LeaderboardItem
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    LeaderboardItem.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.scores = [];
                        if (options.defaults)
                            object.team = null;
                        if (message.scores && message.scores.length) {
                            object.scores = [];
                            for (var j = 0; j < message.scores.length; ++j)
                                object.scores[j] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.toObject(message.scores[j], options);
                        }
                        if (message.team != null && message.hasOwnProperty("team"))
                            object.team = $root.isuxportal.proto.resources.Team.toObject(message.team, options);
                        return object;
                    };

                    /**
                     * Converts this LeaderboardItem to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    LeaderboardItem.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    LeaderboardItem.LeaderboardScore = (function() {

                        /**
                         * Properties of a LeaderboardScore.
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                         * @interface ILeaderboardScore
                         * @property {number|Long|null} [score] LeaderboardScore score
                         * @property {google.protobuf.ITimestamp|null} [startedAt] LeaderboardScore startedAt
                         * @property {google.protobuf.ITimestamp|null} [updatedAt] LeaderboardScore updatedAt
                         */

                        /**
                         * Constructs a new LeaderboardScore.
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                         * @classdesc Represents a LeaderboardScore.
                         * @implements ILeaderboardScore
                         * @constructor
                         * @param {isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore=} [properties] Properties to set
                         */
                        function LeaderboardScore(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * LeaderboardScore score.
                         * @member {number|Long} score
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @instance
                         */
                        LeaderboardScore.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * LeaderboardScore startedAt.
                         * @member {google.protobuf.ITimestamp|null|undefined} startedAt
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @instance
                         */
                        LeaderboardScore.prototype.startedAt = null;

                        /**
                         * LeaderboardScore updatedAt.
                         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @instance
                         */
                        LeaderboardScore.prototype.updatedAt = null;

                        /**
                         * Creates a new LeaderboardScore instance using the specified properties.
                         * @function create
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @static
                         * @param {isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore=} [properties] Properties to set
                         * @returns {isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore} LeaderboardScore instance
                         */
                        LeaderboardScore.create = function create(properties) {
                            return new LeaderboardScore(properties);
                        };

                        /**
                         * Encodes the specified LeaderboardScore message. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.verify|verify} messages.
                         * @function encode
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @static
                         * @param {isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore} message LeaderboardScore message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        LeaderboardScore.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.score);
                            if (message.startedAt != null && Object.hasOwnProperty.call(message, "startedAt"))
                                $root.google.protobuf.Timestamp.encode(message.startedAt, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                                $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified LeaderboardScore message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @static
                         * @param {isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore} message LeaderboardScore message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        LeaderboardScore.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a LeaderboardScore message from the specified reader or buffer.
                         * @function decode
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore} LeaderboardScore
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        LeaderboardScore.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.score = reader.int64();
                                    break;
                                case 2:
                                    message.startedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                    break;
                                case 3:
                                    message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a LeaderboardScore message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore} LeaderboardScore
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        LeaderboardScore.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a LeaderboardScore message.
                         * @function verify
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        LeaderboardScore.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.score != null && message.hasOwnProperty("score"))
                                if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                                    return "score: integer|Long expected";
                            if (message.startedAt != null && message.hasOwnProperty("startedAt")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.startedAt);
                                if (error)
                                    return "startedAt." + error;
                            }
                            if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                                if (error)
                                    return "updatedAt." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a LeaderboardScore message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore} LeaderboardScore
                         */
                        LeaderboardScore.fromObject = function fromObject(object) {
                            if (object instanceof $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore)
                                return object;
                            var message = new $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore();
                            if (object.score != null)
                                if ($util.Long)
                                    (message.score = $util.Long.fromValue(object.score)).unsigned = false;
                                else if (typeof object.score === "string")
                                    message.score = parseInt(object.score, 10);
                                else if (typeof object.score === "number")
                                    message.score = object.score;
                                else if (typeof object.score === "object")
                                    message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
                            if (object.startedAt != null) {
                                if (typeof object.startedAt !== "object")
                                    throw TypeError(".isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.startedAt: object expected");
                                message.startedAt = $root.google.protobuf.Timestamp.fromObject(object.startedAt);
                            }
                            if (object.updatedAt != null) {
                                if (typeof object.updatedAt !== "object")
                                    throw TypeError(".isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.updatedAt: object expected");
                                message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a LeaderboardScore message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @static
                         * @param {isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore} message LeaderboardScore
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        LeaderboardScore.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.score = options.longs === String ? "0" : 0;
                                object.startedAt = null;
                                object.updatedAt = null;
                            }
                            if (message.score != null && message.hasOwnProperty("score"))
                                if (typeof message.score === "number")
                                    object.score = options.longs === String ? String(message.score) : message.score;
                                else
                                    object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
                            if (message.startedAt != null && message.hasOwnProperty("startedAt"))
                                object.startedAt = $root.google.protobuf.Timestamp.toObject(message.startedAt, options);
                            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                                object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                            return object;
                        };

                        /**
                         * Converts this LeaderboardScore to JSON.
                         * @function toJSON
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        LeaderboardScore.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return LeaderboardScore;
                    })();

                    return LeaderboardItem;
                })();

                return Leaderboard;
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

            services.admin = (function() {

                /**
                 * Namespace admin.
                 * @memberof isuxportal.proto.services
                 * @namespace
                 */
                var admin = {};

                admin.ListBenchmarkJobsRequest = (function() {

                    /**
                     * Properties of a ListBenchmarkJobsRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IListBenchmarkJobsRequest
                     * @property {number|Long|null} [teamId] ListBenchmarkJobsRequest teamId
                     * @property {boolean|null} [incompleteOnly] ListBenchmarkJobsRequest incompleteOnly
                     */

                    /**
                     * Constructs a new ListBenchmarkJobsRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a ListBenchmarkJobsRequest.
                     * @implements IListBenchmarkJobsRequest
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IListBenchmarkJobsRequest=} [properties] Properties to set
                     */
                    function ListBenchmarkJobsRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListBenchmarkJobsRequest teamId.
                     * @member {number|Long} teamId
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsRequest
                     * @instance
                     */
                    ListBenchmarkJobsRequest.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * ListBenchmarkJobsRequest incompleteOnly.
                     * @member {boolean} incompleteOnly
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsRequest
                     * @instance
                     */
                    ListBenchmarkJobsRequest.prototype.incompleteOnly = false;

                    /**
                     * Creates a new ListBenchmarkJobsRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IListBenchmarkJobsRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.ListBenchmarkJobsRequest} ListBenchmarkJobsRequest instance
                     */
                    ListBenchmarkJobsRequest.create = function create(properties) {
                        return new ListBenchmarkJobsRequest(properties);
                    };

                    /**
                     * Encodes the specified ListBenchmarkJobsRequest message. Does not implicitly {@link isuxportal.proto.services.admin.ListBenchmarkJobsRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IListBenchmarkJobsRequest} message ListBenchmarkJobsRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListBenchmarkJobsRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.teamId);
                        if (message.incompleteOnly != null && Object.hasOwnProperty.call(message, "incompleteOnly"))
                            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.incompleteOnly);
                        return writer;
                    };

                    /**
                     * Encodes the specified ListBenchmarkJobsRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListBenchmarkJobsRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IListBenchmarkJobsRequest} message ListBenchmarkJobsRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListBenchmarkJobsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListBenchmarkJobsRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.ListBenchmarkJobsRequest} ListBenchmarkJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListBenchmarkJobsRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.ListBenchmarkJobsRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamId = reader.int64();
                                break;
                            case 2:
                                message.incompleteOnly = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListBenchmarkJobsRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.ListBenchmarkJobsRequest} ListBenchmarkJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListBenchmarkJobsRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListBenchmarkJobsRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListBenchmarkJobsRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                                return "teamId: integer|Long expected";
                        if (message.incompleteOnly != null && message.hasOwnProperty("incompleteOnly"))
                            if (typeof message.incompleteOnly !== "boolean")
                                return "incompleteOnly: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a ListBenchmarkJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.ListBenchmarkJobsRequest} ListBenchmarkJobsRequest
                     */
                    ListBenchmarkJobsRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.ListBenchmarkJobsRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.ListBenchmarkJobsRequest();
                        if (object.teamId != null)
                            if ($util.Long)
                                (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                            else if (typeof object.teamId === "string")
                                message.teamId = parseInt(object.teamId, 10);
                            else if (typeof object.teamId === "number")
                                message.teamId = object.teamId;
                            else if (typeof object.teamId === "object")
                                message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                        if (object.incompleteOnly != null)
                            message.incompleteOnly = Boolean(object.incompleteOnly);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ListBenchmarkJobsRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.ListBenchmarkJobsRequest} message ListBenchmarkJobsRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListBenchmarkJobsRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.teamId = options.longs === String ? "0" : 0;
                            object.incompleteOnly = false;
                        }
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (typeof message.teamId === "number")
                                object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                            else
                                object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                        if (message.incompleteOnly != null && message.hasOwnProperty("incompleteOnly"))
                            object.incompleteOnly = message.incompleteOnly;
                        return object;
                    };

                    /**
                     * Converts this ListBenchmarkJobsRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListBenchmarkJobsRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListBenchmarkJobsRequest;
                })();

                admin.ListBenchmarkJobsResponse = (function() {

                    /**
                     * Properties of a ListBenchmarkJobsResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IListBenchmarkJobsResponse
                     * @property {Array.<isuxportal.proto.resources.IBenchmarkJob>|null} [jobs] ListBenchmarkJobsResponse jobs
                     */

                    /**
                     * Constructs a new ListBenchmarkJobsResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a ListBenchmarkJobsResponse.
                     * @implements IListBenchmarkJobsResponse
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IListBenchmarkJobsResponse=} [properties] Properties to set
                     */
                    function ListBenchmarkJobsResponse(properties) {
                        this.jobs = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListBenchmarkJobsResponse jobs.
                     * @member {Array.<isuxportal.proto.resources.IBenchmarkJob>} jobs
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsResponse
                     * @instance
                     */
                    ListBenchmarkJobsResponse.prototype.jobs = $util.emptyArray;

                    /**
                     * Creates a new ListBenchmarkJobsResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IListBenchmarkJobsResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.ListBenchmarkJobsResponse} ListBenchmarkJobsResponse instance
                     */
                    ListBenchmarkJobsResponse.create = function create(properties) {
                        return new ListBenchmarkJobsResponse(properties);
                    };

                    /**
                     * Encodes the specified ListBenchmarkJobsResponse message. Does not implicitly {@link isuxportal.proto.services.admin.ListBenchmarkJobsResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IListBenchmarkJobsResponse} message ListBenchmarkJobsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListBenchmarkJobsResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.jobs != null && message.jobs.length)
                            for (var i = 0; i < message.jobs.length; ++i)
                                $root.isuxportal.proto.resources.BenchmarkJob.encode(message.jobs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ListBenchmarkJobsResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListBenchmarkJobsResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IListBenchmarkJobsResponse} message ListBenchmarkJobsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListBenchmarkJobsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListBenchmarkJobsResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.ListBenchmarkJobsResponse} ListBenchmarkJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListBenchmarkJobsResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.ListBenchmarkJobsResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.jobs && message.jobs.length))
                                    message.jobs = [];
                                message.jobs.push($root.isuxportal.proto.resources.BenchmarkJob.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListBenchmarkJobsResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.ListBenchmarkJobsResponse} ListBenchmarkJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListBenchmarkJobsResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListBenchmarkJobsResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListBenchmarkJobsResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.jobs != null && message.hasOwnProperty("jobs")) {
                            if (!Array.isArray(message.jobs))
                                return "jobs: array expected";
                            for (var i = 0; i < message.jobs.length; ++i) {
                                var error = $root.isuxportal.proto.resources.BenchmarkJob.verify(message.jobs[i]);
                                if (error)
                                    return "jobs." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a ListBenchmarkJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.ListBenchmarkJobsResponse} ListBenchmarkJobsResponse
                     */
                    ListBenchmarkJobsResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.ListBenchmarkJobsResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.ListBenchmarkJobsResponse();
                        if (object.jobs) {
                            if (!Array.isArray(object.jobs))
                                throw TypeError(".isuxportal.proto.services.admin.ListBenchmarkJobsResponse.jobs: array expected");
                            message.jobs = [];
                            for (var i = 0; i < object.jobs.length; ++i) {
                                if (typeof object.jobs[i] !== "object")
                                    throw TypeError(".isuxportal.proto.services.admin.ListBenchmarkJobsResponse.jobs: object expected");
                                message.jobs[i] = $root.isuxportal.proto.resources.BenchmarkJob.fromObject(object.jobs[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ListBenchmarkJobsResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.ListBenchmarkJobsResponse} message ListBenchmarkJobsResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListBenchmarkJobsResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.jobs = [];
                        if (message.jobs && message.jobs.length) {
                            object.jobs = [];
                            for (var j = 0; j < message.jobs.length; ++j)
                                object.jobs[j] = $root.isuxportal.proto.resources.BenchmarkJob.toObject(message.jobs[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ListBenchmarkJobsResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.ListBenchmarkJobsResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListBenchmarkJobsResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListBenchmarkJobsResponse;
                })();

                admin.EnqueueBenchmarkJobRequest = (function() {

                    /**
                     * Properties of an EnqueueBenchmarkJobRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IEnqueueBenchmarkJobRequest
                     * @property {number|Long|null} [teamId] EnqueueBenchmarkJobRequest teamId
                     * @property {number|Long|null} [targetId] EnqueueBenchmarkJobRequest targetId
                     */

                    /**
                     * Constructs a new EnqueueBenchmarkJobRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents an EnqueueBenchmarkJobRequest.
                     * @implements IEnqueueBenchmarkJobRequest
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IEnqueueBenchmarkJobRequest=} [properties] Properties to set
                     */
                    function EnqueueBenchmarkJobRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * EnqueueBenchmarkJobRequest teamId.
                     * @member {number|Long} teamId
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest
                     * @instance
                     */
                    EnqueueBenchmarkJobRequest.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * EnqueueBenchmarkJobRequest targetId.
                     * @member {number|Long} targetId
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest
                     * @instance
                     */
                    EnqueueBenchmarkJobRequest.prototype.targetId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new EnqueueBenchmarkJobRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IEnqueueBenchmarkJobRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest} EnqueueBenchmarkJobRequest instance
                     */
                    EnqueueBenchmarkJobRequest.create = function create(properties) {
                        return new EnqueueBenchmarkJobRequest(properties);
                    };

                    /**
                     * Encodes the specified EnqueueBenchmarkJobRequest message. Does not implicitly {@link isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IEnqueueBenchmarkJobRequest} message EnqueueBenchmarkJobRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnqueueBenchmarkJobRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.teamId);
                        if (message.targetId != null && Object.hasOwnProperty.call(message, "targetId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.targetId);
                        return writer;
                    };

                    /**
                     * Encodes the specified EnqueueBenchmarkJobRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IEnqueueBenchmarkJobRequest} message EnqueueBenchmarkJobRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnqueueBenchmarkJobRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an EnqueueBenchmarkJobRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest} EnqueueBenchmarkJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnqueueBenchmarkJobRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamId = reader.int64();
                                break;
                            case 2:
                                message.targetId = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an EnqueueBenchmarkJobRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest} EnqueueBenchmarkJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnqueueBenchmarkJobRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an EnqueueBenchmarkJobRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EnqueueBenchmarkJobRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                                return "teamId: integer|Long expected";
                        if (message.targetId != null && message.hasOwnProperty("targetId"))
                            if (!$util.isInteger(message.targetId) && !(message.targetId && $util.isInteger(message.targetId.low) && $util.isInteger(message.targetId.high)))
                                return "targetId: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates an EnqueueBenchmarkJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest} EnqueueBenchmarkJobRequest
                     */
                    EnqueueBenchmarkJobRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest();
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
                        return message;
                    };

                    /**
                     * Creates a plain object from an EnqueueBenchmarkJobRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest} message EnqueueBenchmarkJobRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EnqueueBenchmarkJobRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
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
                        }
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
                        return object;
                    };

                    /**
                     * Converts this EnqueueBenchmarkJobRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EnqueueBenchmarkJobRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return EnqueueBenchmarkJobRequest;
                })();

                admin.EnqueueBenchmarkJobResponse = (function() {

                    /**
                     * Properties of an EnqueueBenchmarkJobResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IEnqueueBenchmarkJobResponse
                     * @property {isuxportal.proto.resources.IBenchmarkJob|null} [job] EnqueueBenchmarkJobResponse job
                     */

                    /**
                     * Constructs a new EnqueueBenchmarkJobResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents an EnqueueBenchmarkJobResponse.
                     * @implements IEnqueueBenchmarkJobResponse
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IEnqueueBenchmarkJobResponse=} [properties] Properties to set
                     */
                    function EnqueueBenchmarkJobResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * EnqueueBenchmarkJobResponse job.
                     * @member {isuxportal.proto.resources.IBenchmarkJob|null|undefined} job
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse
                     * @instance
                     */
                    EnqueueBenchmarkJobResponse.prototype.job = null;

                    /**
                     * Creates a new EnqueueBenchmarkJobResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IEnqueueBenchmarkJobResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse} EnqueueBenchmarkJobResponse instance
                     */
                    EnqueueBenchmarkJobResponse.create = function create(properties) {
                        return new EnqueueBenchmarkJobResponse(properties);
                    };

                    /**
                     * Encodes the specified EnqueueBenchmarkJobResponse message. Does not implicitly {@link isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IEnqueueBenchmarkJobResponse} message EnqueueBenchmarkJobResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnqueueBenchmarkJobResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.job != null && Object.hasOwnProperty.call(message, "job"))
                            $root.isuxportal.proto.resources.BenchmarkJob.encode(message.job, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified EnqueueBenchmarkJobResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IEnqueueBenchmarkJobResponse} message EnqueueBenchmarkJobResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnqueueBenchmarkJobResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an EnqueueBenchmarkJobResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse} EnqueueBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnqueueBenchmarkJobResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.job = $root.isuxportal.proto.resources.BenchmarkJob.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an EnqueueBenchmarkJobResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse} EnqueueBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnqueueBenchmarkJobResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an EnqueueBenchmarkJobResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EnqueueBenchmarkJobResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.job != null && message.hasOwnProperty("job")) {
                            var error = $root.isuxportal.proto.resources.BenchmarkJob.verify(message.job);
                            if (error)
                                return "job." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates an EnqueueBenchmarkJobResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse} EnqueueBenchmarkJobResponse
                     */
                    EnqueueBenchmarkJobResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse();
                        if (object.job != null) {
                            if (typeof object.job !== "object")
                                throw TypeError(".isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse.job: object expected");
                            message.job = $root.isuxportal.proto.resources.BenchmarkJob.fromObject(object.job);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an EnqueueBenchmarkJobResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse} message EnqueueBenchmarkJobResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EnqueueBenchmarkJobResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.job = null;
                        if (message.job != null && message.hasOwnProperty("job"))
                            object.job = $root.isuxportal.proto.resources.BenchmarkJob.toObject(message.job, options);
                        return object;
                    };

                    /**
                     * Converts this EnqueueBenchmarkJobResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EnqueueBenchmarkJobResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return EnqueueBenchmarkJobResponse;
                })();

                admin.CancelBenchmarkJobRequest = (function() {

                    /**
                     * Properties of a CancelBenchmarkJobRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @interface ICancelBenchmarkJobRequest
                     * @property {number|Long|null} [id] CancelBenchmarkJobRequest id
                     */

                    /**
                     * Constructs a new CancelBenchmarkJobRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a CancelBenchmarkJobRequest.
                     * @implements ICancelBenchmarkJobRequest
                     * @constructor
                     * @param {isuxportal.proto.services.admin.ICancelBenchmarkJobRequest=} [properties] Properties to set
                     */
                    function CancelBenchmarkJobRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CancelBenchmarkJobRequest id.
                     * @member {number|Long} id
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobRequest
                     * @instance
                     */
                    CancelBenchmarkJobRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new CancelBenchmarkJobRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.ICancelBenchmarkJobRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.CancelBenchmarkJobRequest} CancelBenchmarkJobRequest instance
                     */
                    CancelBenchmarkJobRequest.create = function create(properties) {
                        return new CancelBenchmarkJobRequest(properties);
                    };

                    /**
                     * Encodes the specified CancelBenchmarkJobRequest message. Does not implicitly {@link isuxportal.proto.services.admin.CancelBenchmarkJobRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.ICancelBenchmarkJobRequest} message CancelBenchmarkJobRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CancelBenchmarkJobRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                        return writer;
                    };

                    /**
                     * Encodes the specified CancelBenchmarkJobRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.CancelBenchmarkJobRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.ICancelBenchmarkJobRequest} message CancelBenchmarkJobRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CancelBenchmarkJobRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CancelBenchmarkJobRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.CancelBenchmarkJobRequest} CancelBenchmarkJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CancelBenchmarkJobRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.CancelBenchmarkJobRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CancelBenchmarkJobRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.CancelBenchmarkJobRequest} CancelBenchmarkJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CancelBenchmarkJobRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CancelBenchmarkJobRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CancelBenchmarkJobRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a CancelBenchmarkJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.CancelBenchmarkJobRequest} CancelBenchmarkJobRequest
                     */
                    CancelBenchmarkJobRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.CancelBenchmarkJobRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.CancelBenchmarkJobRequest();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a CancelBenchmarkJobRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.CancelBenchmarkJobRequest} message CancelBenchmarkJobRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CancelBenchmarkJobRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                        return object;
                    };

                    /**
                     * Converts this CancelBenchmarkJobRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CancelBenchmarkJobRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CancelBenchmarkJobRequest;
                })();

                admin.CancelBenchmarkJobResponse = (function() {

                    /**
                     * Properties of a CancelBenchmarkJobResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @interface ICancelBenchmarkJobResponse
                     * @property {isuxportal.proto.resources.IBenchmarkJob|null} [job] CancelBenchmarkJobResponse job
                     */

                    /**
                     * Constructs a new CancelBenchmarkJobResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a CancelBenchmarkJobResponse.
                     * @implements ICancelBenchmarkJobResponse
                     * @constructor
                     * @param {isuxportal.proto.services.admin.ICancelBenchmarkJobResponse=} [properties] Properties to set
                     */
                    function CancelBenchmarkJobResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CancelBenchmarkJobResponse job.
                     * @member {isuxportal.proto.resources.IBenchmarkJob|null|undefined} job
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobResponse
                     * @instance
                     */
                    CancelBenchmarkJobResponse.prototype.job = null;

                    /**
                     * Creates a new CancelBenchmarkJobResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.ICancelBenchmarkJobResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.CancelBenchmarkJobResponse} CancelBenchmarkJobResponse instance
                     */
                    CancelBenchmarkJobResponse.create = function create(properties) {
                        return new CancelBenchmarkJobResponse(properties);
                    };

                    /**
                     * Encodes the specified CancelBenchmarkJobResponse message. Does not implicitly {@link isuxportal.proto.services.admin.CancelBenchmarkJobResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.ICancelBenchmarkJobResponse} message CancelBenchmarkJobResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CancelBenchmarkJobResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.job != null && Object.hasOwnProperty.call(message, "job"))
                            $root.isuxportal.proto.resources.BenchmarkJob.encode(message.job, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified CancelBenchmarkJobResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.CancelBenchmarkJobResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.ICancelBenchmarkJobResponse} message CancelBenchmarkJobResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CancelBenchmarkJobResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CancelBenchmarkJobResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.CancelBenchmarkJobResponse} CancelBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CancelBenchmarkJobResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.CancelBenchmarkJobResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.job = $root.isuxportal.proto.resources.BenchmarkJob.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CancelBenchmarkJobResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.CancelBenchmarkJobResponse} CancelBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CancelBenchmarkJobResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CancelBenchmarkJobResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CancelBenchmarkJobResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.job != null && message.hasOwnProperty("job")) {
                            var error = $root.isuxportal.proto.resources.BenchmarkJob.verify(message.job);
                            if (error)
                                return "job." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a CancelBenchmarkJobResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.CancelBenchmarkJobResponse} CancelBenchmarkJobResponse
                     */
                    CancelBenchmarkJobResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.CancelBenchmarkJobResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.CancelBenchmarkJobResponse();
                        if (object.job != null) {
                            if (typeof object.job !== "object")
                                throw TypeError(".isuxportal.proto.services.admin.CancelBenchmarkJobResponse.job: object expected");
                            message.job = $root.isuxportal.proto.resources.BenchmarkJob.fromObject(object.job);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a CancelBenchmarkJobResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.CancelBenchmarkJobResponse} message CancelBenchmarkJobResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CancelBenchmarkJobResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.job = null;
                        if (message.job != null && message.hasOwnProperty("job"))
                            object.job = $root.isuxportal.proto.resources.BenchmarkJob.toObject(message.job, options);
                        return object;
                    };

                    /**
                     * Converts this CancelBenchmarkJobResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.CancelBenchmarkJobResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CancelBenchmarkJobResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CancelBenchmarkJobResponse;
                })();

                admin.GetBenchmarkJobQuery = (function() {

                    /**
                     * Properties of a GetBenchmarkJobQuery.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IGetBenchmarkJobQuery
                     * @property {number|Long|null} [id] GetBenchmarkJobQuery id
                     */

                    /**
                     * Constructs a new GetBenchmarkJobQuery.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a GetBenchmarkJobQuery.
                     * @implements IGetBenchmarkJobQuery
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IGetBenchmarkJobQuery=} [properties] Properties to set
                     */
                    function GetBenchmarkJobQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetBenchmarkJobQuery id.
                     * @member {number|Long} id
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobQuery
                     * @instance
                     */
                    GetBenchmarkJobQuery.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new GetBenchmarkJobQuery instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobQuery
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetBenchmarkJobQuery=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.GetBenchmarkJobQuery} GetBenchmarkJobQuery instance
                     */
                    GetBenchmarkJobQuery.create = function create(properties) {
                        return new GetBenchmarkJobQuery(properties);
                    };

                    /**
                     * Encodes the specified GetBenchmarkJobQuery message. Does not implicitly {@link isuxportal.proto.services.admin.GetBenchmarkJobQuery.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobQuery
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetBenchmarkJobQuery} message GetBenchmarkJobQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetBenchmarkJobQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                        return writer;
                    };

                    /**
                     * Encodes the specified GetBenchmarkJobQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.GetBenchmarkJobQuery.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobQuery
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetBenchmarkJobQuery} message GetBenchmarkJobQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetBenchmarkJobQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetBenchmarkJobQuery message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.GetBenchmarkJobQuery} GetBenchmarkJobQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetBenchmarkJobQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.GetBenchmarkJobQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetBenchmarkJobQuery message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.GetBenchmarkJobQuery} GetBenchmarkJobQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetBenchmarkJobQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetBenchmarkJobQuery message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobQuery
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetBenchmarkJobQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a GetBenchmarkJobQuery message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobQuery
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.GetBenchmarkJobQuery} GetBenchmarkJobQuery
                     */
                    GetBenchmarkJobQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.GetBenchmarkJobQuery)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.GetBenchmarkJobQuery();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetBenchmarkJobQuery message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobQuery
                     * @static
                     * @param {isuxportal.proto.services.admin.GetBenchmarkJobQuery} message GetBenchmarkJobQuery
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetBenchmarkJobQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                        return object;
                    };

                    /**
                     * Converts this GetBenchmarkJobQuery to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobQuery
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetBenchmarkJobQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetBenchmarkJobQuery;
                })();

                admin.GetBenchmarkJobResponse = (function() {

                    /**
                     * Properties of a GetBenchmarkJobResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IGetBenchmarkJobResponse
                     * @property {isuxportal.proto.resources.IBenchmarkJob|null} [job] GetBenchmarkJobResponse job
                     */

                    /**
                     * Constructs a new GetBenchmarkJobResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a GetBenchmarkJobResponse.
                     * @implements IGetBenchmarkJobResponse
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IGetBenchmarkJobResponse=} [properties] Properties to set
                     */
                    function GetBenchmarkJobResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetBenchmarkJobResponse job.
                     * @member {isuxportal.proto.resources.IBenchmarkJob|null|undefined} job
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobResponse
                     * @instance
                     */
                    GetBenchmarkJobResponse.prototype.job = null;

                    /**
                     * Creates a new GetBenchmarkJobResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetBenchmarkJobResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.GetBenchmarkJobResponse} GetBenchmarkJobResponse instance
                     */
                    GetBenchmarkJobResponse.create = function create(properties) {
                        return new GetBenchmarkJobResponse(properties);
                    };

                    /**
                     * Encodes the specified GetBenchmarkJobResponse message. Does not implicitly {@link isuxportal.proto.services.admin.GetBenchmarkJobResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetBenchmarkJobResponse} message GetBenchmarkJobResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetBenchmarkJobResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.job != null && Object.hasOwnProperty.call(message, "job"))
                            $root.isuxportal.proto.resources.BenchmarkJob.encode(message.job, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetBenchmarkJobResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.GetBenchmarkJobResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetBenchmarkJobResponse} message GetBenchmarkJobResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetBenchmarkJobResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetBenchmarkJobResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.GetBenchmarkJobResponse} GetBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetBenchmarkJobResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.GetBenchmarkJobResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.job = $root.isuxportal.proto.resources.BenchmarkJob.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetBenchmarkJobResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.GetBenchmarkJobResponse} GetBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetBenchmarkJobResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetBenchmarkJobResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetBenchmarkJobResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.job != null && message.hasOwnProperty("job")) {
                            var error = $root.isuxportal.proto.resources.BenchmarkJob.verify(message.job);
                            if (error)
                                return "job." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a GetBenchmarkJobResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.GetBenchmarkJobResponse} GetBenchmarkJobResponse
                     */
                    GetBenchmarkJobResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.GetBenchmarkJobResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.GetBenchmarkJobResponse();
                        if (object.job != null) {
                            if (typeof object.job !== "object")
                                throw TypeError(".isuxportal.proto.services.admin.GetBenchmarkJobResponse.job: object expected");
                            message.job = $root.isuxportal.proto.resources.BenchmarkJob.fromObject(object.job);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetBenchmarkJobResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.GetBenchmarkJobResponse} message GetBenchmarkJobResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetBenchmarkJobResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.job = null;
                        if (message.job != null && message.hasOwnProperty("job"))
                            object.job = $root.isuxportal.proto.resources.BenchmarkJob.toObject(message.job, options);
                        return object;
                    };

                    /**
                     * Converts this GetBenchmarkJobResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.GetBenchmarkJobResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetBenchmarkJobResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetBenchmarkJobResponse;
                })();

                admin.ListClarificationsRequest = (function() {

                    /**
                     * Properties of a ListClarificationsRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IListClarificationsRequest
                     * @property {number|Long|null} [teamId] ListClarificationsRequest teamId
                     */

                    /**
                     * Constructs a new ListClarificationsRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a ListClarificationsRequest.
                     * @implements IListClarificationsRequest
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IListClarificationsRequest=} [properties] Properties to set
                     */
                    function ListClarificationsRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListClarificationsRequest teamId.
                     * @member {number|Long} teamId
                     * @memberof isuxportal.proto.services.admin.ListClarificationsRequest
                     * @instance
                     */
                    ListClarificationsRequest.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new ListClarificationsRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.ListClarificationsRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IListClarificationsRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.ListClarificationsRequest} ListClarificationsRequest instance
                     */
                    ListClarificationsRequest.create = function create(properties) {
                        return new ListClarificationsRequest(properties);
                    };

                    /**
                     * Encodes the specified ListClarificationsRequest message. Does not implicitly {@link isuxportal.proto.services.admin.ListClarificationsRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.ListClarificationsRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IListClarificationsRequest} message ListClarificationsRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListClarificationsRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.teamId);
                        return writer;
                    };

                    /**
                     * Encodes the specified ListClarificationsRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListClarificationsRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.ListClarificationsRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IListClarificationsRequest} message ListClarificationsRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListClarificationsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListClarificationsRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.ListClarificationsRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.ListClarificationsRequest} ListClarificationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListClarificationsRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.ListClarificationsRequest();
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
                     * Decodes a ListClarificationsRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.ListClarificationsRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.ListClarificationsRequest} ListClarificationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListClarificationsRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListClarificationsRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.ListClarificationsRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListClarificationsRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                                return "teamId: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a ListClarificationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.ListClarificationsRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.ListClarificationsRequest} ListClarificationsRequest
                     */
                    ListClarificationsRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.ListClarificationsRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.ListClarificationsRequest();
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
                     * Creates a plain object from a ListClarificationsRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.ListClarificationsRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.ListClarificationsRequest} message ListClarificationsRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListClarificationsRequest.toObject = function toObject(message, options) {
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
                     * Converts this ListClarificationsRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.ListClarificationsRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListClarificationsRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListClarificationsRequest;
                })();

                admin.ListClarificationsResponse = (function() {

                    /**
                     * Properties of a ListClarificationsResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IListClarificationsResponse
                     * @property {Array.<isuxportal.proto.resources.IClarification>|null} [clarifications] ListClarificationsResponse clarifications
                     */

                    /**
                     * Constructs a new ListClarificationsResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a ListClarificationsResponse.
                     * @implements IListClarificationsResponse
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IListClarificationsResponse=} [properties] Properties to set
                     */
                    function ListClarificationsResponse(properties) {
                        this.clarifications = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListClarificationsResponse clarifications.
                     * @member {Array.<isuxportal.proto.resources.IClarification>} clarifications
                     * @memberof isuxportal.proto.services.admin.ListClarificationsResponse
                     * @instance
                     */
                    ListClarificationsResponse.prototype.clarifications = $util.emptyArray;

                    /**
                     * Creates a new ListClarificationsResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.ListClarificationsResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IListClarificationsResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.ListClarificationsResponse} ListClarificationsResponse instance
                     */
                    ListClarificationsResponse.create = function create(properties) {
                        return new ListClarificationsResponse(properties);
                    };

                    /**
                     * Encodes the specified ListClarificationsResponse message. Does not implicitly {@link isuxportal.proto.services.admin.ListClarificationsResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.ListClarificationsResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IListClarificationsResponse} message ListClarificationsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListClarificationsResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.clarifications != null && message.clarifications.length)
                            for (var i = 0; i < message.clarifications.length; ++i)
                                $root.isuxportal.proto.resources.Clarification.encode(message.clarifications[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ListClarificationsResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListClarificationsResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.ListClarificationsResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IListClarificationsResponse} message ListClarificationsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListClarificationsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListClarificationsResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.ListClarificationsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.ListClarificationsResponse} ListClarificationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListClarificationsResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.ListClarificationsResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.clarifications && message.clarifications.length))
                                    message.clarifications = [];
                                message.clarifications.push($root.isuxportal.proto.resources.Clarification.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListClarificationsResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.ListClarificationsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.ListClarificationsResponse} ListClarificationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListClarificationsResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListClarificationsResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.ListClarificationsResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListClarificationsResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.clarifications != null && message.hasOwnProperty("clarifications")) {
                            if (!Array.isArray(message.clarifications))
                                return "clarifications: array expected";
                            for (var i = 0; i < message.clarifications.length; ++i) {
                                var error = $root.isuxportal.proto.resources.Clarification.verify(message.clarifications[i]);
                                if (error)
                                    return "clarifications." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a ListClarificationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.ListClarificationsResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.ListClarificationsResponse} ListClarificationsResponse
                     */
                    ListClarificationsResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.ListClarificationsResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.ListClarificationsResponse();
                        if (object.clarifications) {
                            if (!Array.isArray(object.clarifications))
                                throw TypeError(".isuxportal.proto.services.admin.ListClarificationsResponse.clarifications: array expected");
                            message.clarifications = [];
                            for (var i = 0; i < object.clarifications.length; ++i) {
                                if (typeof object.clarifications[i] !== "object")
                                    throw TypeError(".isuxportal.proto.services.admin.ListClarificationsResponse.clarifications: object expected");
                                message.clarifications[i] = $root.isuxportal.proto.resources.Clarification.fromObject(object.clarifications[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ListClarificationsResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.ListClarificationsResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.ListClarificationsResponse} message ListClarificationsResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListClarificationsResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.clarifications = [];
                        if (message.clarifications && message.clarifications.length) {
                            object.clarifications = [];
                            for (var j = 0; j < message.clarifications.length; ++j)
                                object.clarifications[j] = $root.isuxportal.proto.resources.Clarification.toObject(message.clarifications[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ListClarificationsResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.ListClarificationsResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListClarificationsResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListClarificationsResponse;
                })();

                admin.GetClarificationRequest = (function() {

                    /**
                     * Properties of a GetClarificationRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IGetClarificationRequest
                     * @property {number|Long|null} [id] GetClarificationRequest id
                     */

                    /**
                     * Constructs a new GetClarificationRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a GetClarificationRequest.
                     * @implements IGetClarificationRequest
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IGetClarificationRequest=} [properties] Properties to set
                     */
                    function GetClarificationRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetClarificationRequest id.
                     * @member {number|Long} id
                     * @memberof isuxportal.proto.services.admin.GetClarificationRequest
                     * @instance
                     */
                    GetClarificationRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new GetClarificationRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.GetClarificationRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetClarificationRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.GetClarificationRequest} GetClarificationRequest instance
                     */
                    GetClarificationRequest.create = function create(properties) {
                        return new GetClarificationRequest(properties);
                    };

                    /**
                     * Encodes the specified GetClarificationRequest message. Does not implicitly {@link isuxportal.proto.services.admin.GetClarificationRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.GetClarificationRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetClarificationRequest} message GetClarificationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetClarificationRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                        return writer;
                    };

                    /**
                     * Encodes the specified GetClarificationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.GetClarificationRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.GetClarificationRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetClarificationRequest} message GetClarificationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetClarificationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetClarificationRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.GetClarificationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.GetClarificationRequest} GetClarificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetClarificationRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.GetClarificationRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetClarificationRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.GetClarificationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.GetClarificationRequest} GetClarificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetClarificationRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetClarificationRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.GetClarificationRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetClarificationRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a GetClarificationRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.GetClarificationRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.GetClarificationRequest} GetClarificationRequest
                     */
                    GetClarificationRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.GetClarificationRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.GetClarificationRequest();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetClarificationRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.GetClarificationRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.GetClarificationRequest} message GetClarificationRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetClarificationRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                        return object;
                    };

                    /**
                     * Converts this GetClarificationRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.GetClarificationRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetClarificationRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetClarificationRequest;
                })();

                admin.GetClarificationResponse = (function() {

                    /**
                     * Properties of a GetClarificationResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IGetClarificationResponse
                     * @property {isuxportal.proto.resources.IClarification|null} [clarification] GetClarificationResponse clarification
                     */

                    /**
                     * Constructs a new GetClarificationResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a GetClarificationResponse.
                     * @implements IGetClarificationResponse
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IGetClarificationResponse=} [properties] Properties to set
                     */
                    function GetClarificationResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetClarificationResponse clarification.
                     * @member {isuxportal.proto.resources.IClarification|null|undefined} clarification
                     * @memberof isuxportal.proto.services.admin.GetClarificationResponse
                     * @instance
                     */
                    GetClarificationResponse.prototype.clarification = null;

                    /**
                     * Creates a new GetClarificationResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.GetClarificationResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetClarificationResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.GetClarificationResponse} GetClarificationResponse instance
                     */
                    GetClarificationResponse.create = function create(properties) {
                        return new GetClarificationResponse(properties);
                    };

                    /**
                     * Encodes the specified GetClarificationResponse message. Does not implicitly {@link isuxportal.proto.services.admin.GetClarificationResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.GetClarificationResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetClarificationResponse} message GetClarificationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetClarificationResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.clarification != null && Object.hasOwnProperty.call(message, "clarification"))
                            $root.isuxportal.proto.resources.Clarification.encode(message.clarification, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetClarificationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.GetClarificationResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.GetClarificationResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetClarificationResponse} message GetClarificationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetClarificationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetClarificationResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.GetClarificationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.GetClarificationResponse} GetClarificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetClarificationResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.GetClarificationResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.clarification = $root.isuxportal.proto.resources.Clarification.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetClarificationResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.GetClarificationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.GetClarificationResponse} GetClarificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetClarificationResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetClarificationResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.GetClarificationResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetClarificationResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.clarification != null && message.hasOwnProperty("clarification")) {
                            var error = $root.isuxportal.proto.resources.Clarification.verify(message.clarification);
                            if (error)
                                return "clarification." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a GetClarificationResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.GetClarificationResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.GetClarificationResponse} GetClarificationResponse
                     */
                    GetClarificationResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.GetClarificationResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.GetClarificationResponse();
                        if (object.clarification != null) {
                            if (typeof object.clarification !== "object")
                                throw TypeError(".isuxportal.proto.services.admin.GetClarificationResponse.clarification: object expected");
                            message.clarification = $root.isuxportal.proto.resources.Clarification.fromObject(object.clarification);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetClarificationResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.GetClarificationResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.GetClarificationResponse} message GetClarificationResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetClarificationResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.clarification = null;
                        if (message.clarification != null && message.hasOwnProperty("clarification"))
                            object.clarification = $root.isuxportal.proto.resources.Clarification.toObject(message.clarification, options);
                        return object;
                    };

                    /**
                     * Converts this GetClarificationResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.GetClarificationResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetClarificationResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetClarificationResponse;
                })();

                admin.RespondClarificationRequest = (function() {

                    /**
                     * Properties of a RespondClarificationRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IRespondClarificationRequest
                     * @property {number|Long|null} [id] RespondClarificationRequest id
                     * @property {boolean|null} [disclose] RespondClarificationRequest disclose
                     * @property {string|null} [answer] RespondClarificationRequest answer
                     * @property {string|null} [question] RespondClarificationRequest question
                     */

                    /**
                     * Constructs a new RespondClarificationRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a RespondClarificationRequest.
                     * @implements IRespondClarificationRequest
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IRespondClarificationRequest=} [properties] Properties to set
                     */
                    function RespondClarificationRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * RespondClarificationRequest id.
                     * @member {number|Long} id
                     * @memberof isuxportal.proto.services.admin.RespondClarificationRequest
                     * @instance
                     */
                    RespondClarificationRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * RespondClarificationRequest disclose.
                     * @member {boolean} disclose
                     * @memberof isuxportal.proto.services.admin.RespondClarificationRequest
                     * @instance
                     */
                    RespondClarificationRequest.prototype.disclose = false;

                    /**
                     * RespondClarificationRequest answer.
                     * @member {string} answer
                     * @memberof isuxportal.proto.services.admin.RespondClarificationRequest
                     * @instance
                     */
                    RespondClarificationRequest.prototype.answer = "";

                    /**
                     * RespondClarificationRequest question.
                     * @member {string} question
                     * @memberof isuxportal.proto.services.admin.RespondClarificationRequest
                     * @instance
                     */
                    RespondClarificationRequest.prototype.question = "";

                    /**
                     * Creates a new RespondClarificationRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.RespondClarificationRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IRespondClarificationRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.RespondClarificationRequest} RespondClarificationRequest instance
                     */
                    RespondClarificationRequest.create = function create(properties) {
                        return new RespondClarificationRequest(properties);
                    };

                    /**
                     * Encodes the specified RespondClarificationRequest message. Does not implicitly {@link isuxportal.proto.services.admin.RespondClarificationRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.RespondClarificationRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IRespondClarificationRequest} message RespondClarificationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RespondClarificationRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                        if (message.disclose != null && Object.hasOwnProperty.call(message, "disclose"))
                            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.disclose);
                        if (message.answer != null && Object.hasOwnProperty.call(message, "answer"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.answer);
                        if (message.question != null && Object.hasOwnProperty.call(message, "question"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.question);
                        return writer;
                    };

                    /**
                     * Encodes the specified RespondClarificationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.RespondClarificationRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.RespondClarificationRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IRespondClarificationRequest} message RespondClarificationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RespondClarificationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RespondClarificationRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.RespondClarificationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.RespondClarificationRequest} RespondClarificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RespondClarificationRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.RespondClarificationRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.int64();
                                break;
                            case 2:
                                message.disclose = reader.bool();
                                break;
                            case 3:
                                message.answer = reader.string();
                                break;
                            case 4:
                                message.question = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RespondClarificationRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.RespondClarificationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.RespondClarificationRequest} RespondClarificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RespondClarificationRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RespondClarificationRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.RespondClarificationRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RespondClarificationRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        if (message.disclose != null && message.hasOwnProperty("disclose"))
                            if (typeof message.disclose !== "boolean")
                                return "disclose: boolean expected";
                        if (message.answer != null && message.hasOwnProperty("answer"))
                            if (!$util.isString(message.answer))
                                return "answer: string expected";
                        if (message.question != null && message.hasOwnProperty("question"))
                            if (!$util.isString(message.question))
                                return "question: string expected";
                        return null;
                    };

                    /**
                     * Creates a RespondClarificationRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.RespondClarificationRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.RespondClarificationRequest} RespondClarificationRequest
                     */
                    RespondClarificationRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.RespondClarificationRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.RespondClarificationRequest();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                        if (object.disclose != null)
                            message.disclose = Boolean(object.disclose);
                        if (object.answer != null)
                            message.answer = String(object.answer);
                        if (object.question != null)
                            message.question = String(object.question);
                        return message;
                    };

                    /**
                     * Creates a plain object from a RespondClarificationRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.RespondClarificationRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.RespondClarificationRequest} message RespondClarificationRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RespondClarificationRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                            object.disclose = false;
                            object.answer = "";
                            object.question = "";
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                        if (message.disclose != null && message.hasOwnProperty("disclose"))
                            object.disclose = message.disclose;
                        if (message.answer != null && message.hasOwnProperty("answer"))
                            object.answer = message.answer;
                        if (message.question != null && message.hasOwnProperty("question"))
                            object.question = message.question;
                        return object;
                    };

                    /**
                     * Converts this RespondClarificationRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.RespondClarificationRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RespondClarificationRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return RespondClarificationRequest;
                })();

                admin.RespondClarificationResponse = (function() {

                    /**
                     * Properties of a RespondClarificationResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IRespondClarificationResponse
                     * @property {isuxportal.proto.resources.IClarification|null} [clarification] RespondClarificationResponse clarification
                     */

                    /**
                     * Constructs a new RespondClarificationResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a RespondClarificationResponse.
                     * @implements IRespondClarificationResponse
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IRespondClarificationResponse=} [properties] Properties to set
                     */
                    function RespondClarificationResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * RespondClarificationResponse clarification.
                     * @member {isuxportal.proto.resources.IClarification|null|undefined} clarification
                     * @memberof isuxportal.proto.services.admin.RespondClarificationResponse
                     * @instance
                     */
                    RespondClarificationResponse.prototype.clarification = null;

                    /**
                     * Creates a new RespondClarificationResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.RespondClarificationResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IRespondClarificationResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.RespondClarificationResponse} RespondClarificationResponse instance
                     */
                    RespondClarificationResponse.create = function create(properties) {
                        return new RespondClarificationResponse(properties);
                    };

                    /**
                     * Encodes the specified RespondClarificationResponse message. Does not implicitly {@link isuxportal.proto.services.admin.RespondClarificationResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.RespondClarificationResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IRespondClarificationResponse} message RespondClarificationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RespondClarificationResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.clarification != null && Object.hasOwnProperty.call(message, "clarification"))
                            $root.isuxportal.proto.resources.Clarification.encode(message.clarification, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified RespondClarificationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.RespondClarificationResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.RespondClarificationResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IRespondClarificationResponse} message RespondClarificationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RespondClarificationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RespondClarificationResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.RespondClarificationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.RespondClarificationResponse} RespondClarificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RespondClarificationResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.RespondClarificationResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.clarification = $root.isuxportal.proto.resources.Clarification.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RespondClarificationResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.RespondClarificationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.RespondClarificationResponse} RespondClarificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RespondClarificationResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RespondClarificationResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.RespondClarificationResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RespondClarificationResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.clarification != null && message.hasOwnProperty("clarification")) {
                            var error = $root.isuxportal.proto.resources.Clarification.verify(message.clarification);
                            if (error)
                                return "clarification." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a RespondClarificationResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.RespondClarificationResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.RespondClarificationResponse} RespondClarificationResponse
                     */
                    RespondClarificationResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.RespondClarificationResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.RespondClarificationResponse();
                        if (object.clarification != null) {
                            if (typeof object.clarification !== "object")
                                throw TypeError(".isuxportal.proto.services.admin.RespondClarificationResponse.clarification: object expected");
                            message.clarification = $root.isuxportal.proto.resources.Clarification.fromObject(object.clarification);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a RespondClarificationResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.RespondClarificationResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.RespondClarificationResponse} message RespondClarificationResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RespondClarificationResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.clarification = null;
                        if (message.clarification != null && message.hasOwnProperty("clarification"))
                            object.clarification = $root.isuxportal.proto.resources.Clarification.toObject(message.clarification, options);
                        return object;
                    };

                    /**
                     * Converts this RespondClarificationResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.RespondClarificationResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RespondClarificationResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return RespondClarificationResponse;
                })();

                admin.CreateClarificationRequest = (function() {

                    /**
                     * Properties of a CreateClarificationRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @interface ICreateClarificationRequest
                     * @property {number|Long|null} [id] CreateClarificationRequest id
                     * @property {string|null} [answer] CreateClarificationRequest answer
                     * @property {string|null} [question] CreateClarificationRequest question
                     */

                    /**
                     * Constructs a new CreateClarificationRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a CreateClarificationRequest.
                     * @implements ICreateClarificationRequest
                     * @constructor
                     * @param {isuxportal.proto.services.admin.ICreateClarificationRequest=} [properties] Properties to set
                     */
                    function CreateClarificationRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CreateClarificationRequest id.
                     * @member {number|Long} id
                     * @memberof isuxportal.proto.services.admin.CreateClarificationRequest
                     * @instance
                     */
                    CreateClarificationRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * CreateClarificationRequest answer.
                     * @member {string} answer
                     * @memberof isuxportal.proto.services.admin.CreateClarificationRequest
                     * @instance
                     */
                    CreateClarificationRequest.prototype.answer = "";

                    /**
                     * CreateClarificationRequest question.
                     * @member {string} question
                     * @memberof isuxportal.proto.services.admin.CreateClarificationRequest
                     * @instance
                     */
                    CreateClarificationRequest.prototype.question = "";

                    /**
                     * Creates a new CreateClarificationRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.CreateClarificationRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.ICreateClarificationRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.CreateClarificationRequest} CreateClarificationRequest instance
                     */
                    CreateClarificationRequest.create = function create(properties) {
                        return new CreateClarificationRequest(properties);
                    };

                    /**
                     * Encodes the specified CreateClarificationRequest message. Does not implicitly {@link isuxportal.proto.services.admin.CreateClarificationRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.CreateClarificationRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.ICreateClarificationRequest} message CreateClarificationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateClarificationRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                        if (message.answer != null && Object.hasOwnProperty.call(message, "answer"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.answer);
                        if (message.question != null && Object.hasOwnProperty.call(message, "question"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.question);
                        return writer;
                    };

                    /**
                     * Encodes the specified CreateClarificationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.CreateClarificationRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.CreateClarificationRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.ICreateClarificationRequest} message CreateClarificationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateClarificationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CreateClarificationRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.CreateClarificationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.CreateClarificationRequest} CreateClarificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateClarificationRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.CreateClarificationRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.int64();
                                break;
                            case 2:
                                message.answer = reader.string();
                                break;
                            case 3:
                                message.question = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CreateClarificationRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.CreateClarificationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.CreateClarificationRequest} CreateClarificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateClarificationRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CreateClarificationRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.CreateClarificationRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreateClarificationRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        if (message.answer != null && message.hasOwnProperty("answer"))
                            if (!$util.isString(message.answer))
                                return "answer: string expected";
                        if (message.question != null && message.hasOwnProperty("question"))
                            if (!$util.isString(message.question))
                                return "question: string expected";
                        return null;
                    };

                    /**
                     * Creates a CreateClarificationRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.CreateClarificationRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.CreateClarificationRequest} CreateClarificationRequest
                     */
                    CreateClarificationRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.CreateClarificationRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.CreateClarificationRequest();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                        if (object.answer != null)
                            message.answer = String(object.answer);
                        if (object.question != null)
                            message.question = String(object.question);
                        return message;
                    };

                    /**
                     * Creates a plain object from a CreateClarificationRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.CreateClarificationRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.CreateClarificationRequest} message CreateClarificationRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreateClarificationRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                            object.answer = "";
                            object.question = "";
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                        if (message.answer != null && message.hasOwnProperty("answer"))
                            object.answer = message.answer;
                        if (message.question != null && message.hasOwnProperty("question"))
                            object.question = message.question;
                        return object;
                    };

                    /**
                     * Converts this CreateClarificationRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.CreateClarificationRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreateClarificationRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CreateClarificationRequest;
                })();

                admin.CreateClarificationResponse = (function() {

                    /**
                     * Properties of a CreateClarificationResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @interface ICreateClarificationResponse
                     * @property {isuxportal.proto.resources.IClarification|null} [clarification] CreateClarificationResponse clarification
                     */

                    /**
                     * Constructs a new CreateClarificationResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a CreateClarificationResponse.
                     * @implements ICreateClarificationResponse
                     * @constructor
                     * @param {isuxportal.proto.services.admin.ICreateClarificationResponse=} [properties] Properties to set
                     */
                    function CreateClarificationResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CreateClarificationResponse clarification.
                     * @member {isuxportal.proto.resources.IClarification|null|undefined} clarification
                     * @memberof isuxportal.proto.services.admin.CreateClarificationResponse
                     * @instance
                     */
                    CreateClarificationResponse.prototype.clarification = null;

                    /**
                     * Creates a new CreateClarificationResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.CreateClarificationResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.ICreateClarificationResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.CreateClarificationResponse} CreateClarificationResponse instance
                     */
                    CreateClarificationResponse.create = function create(properties) {
                        return new CreateClarificationResponse(properties);
                    };

                    /**
                     * Encodes the specified CreateClarificationResponse message. Does not implicitly {@link isuxportal.proto.services.admin.CreateClarificationResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.CreateClarificationResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.ICreateClarificationResponse} message CreateClarificationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateClarificationResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.clarification != null && Object.hasOwnProperty.call(message, "clarification"))
                            $root.isuxportal.proto.resources.Clarification.encode(message.clarification, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified CreateClarificationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.CreateClarificationResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.CreateClarificationResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.ICreateClarificationResponse} message CreateClarificationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateClarificationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CreateClarificationResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.CreateClarificationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.CreateClarificationResponse} CreateClarificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateClarificationResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.CreateClarificationResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.clarification = $root.isuxportal.proto.resources.Clarification.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CreateClarificationResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.CreateClarificationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.CreateClarificationResponse} CreateClarificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateClarificationResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CreateClarificationResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.CreateClarificationResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreateClarificationResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.clarification != null && message.hasOwnProperty("clarification")) {
                            var error = $root.isuxportal.proto.resources.Clarification.verify(message.clarification);
                            if (error)
                                return "clarification." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a CreateClarificationResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.CreateClarificationResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.CreateClarificationResponse} CreateClarificationResponse
                     */
                    CreateClarificationResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.CreateClarificationResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.CreateClarificationResponse();
                        if (object.clarification != null) {
                            if (typeof object.clarification !== "object")
                                throw TypeError(".isuxportal.proto.services.admin.CreateClarificationResponse.clarification: object expected");
                            message.clarification = $root.isuxportal.proto.resources.Clarification.fromObject(object.clarification);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a CreateClarificationResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.CreateClarificationResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.CreateClarificationResponse} message CreateClarificationResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreateClarificationResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.clarification = null;
                        if (message.clarification != null && message.hasOwnProperty("clarification"))
                            object.clarification = $root.isuxportal.proto.resources.Clarification.toObject(message.clarification, options);
                        return object;
                    };

                    /**
                     * Converts this CreateClarificationResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.CreateClarificationResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreateClarificationResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CreateClarificationResponse;
                })();

                admin.ListContestantInstancesRequest = (function() {

                    /**
                     * Properties of a ListContestantInstancesRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IListContestantInstancesRequest
                     * @property {number|Long|null} [teamId] ListContestantInstancesRequest teamId
                     */

                    /**
                     * Constructs a new ListContestantInstancesRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a ListContestantInstancesRequest.
                     * @implements IListContestantInstancesRequest
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IListContestantInstancesRequest=} [properties] Properties to set
                     */
                    function ListContestantInstancesRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListContestantInstancesRequest teamId.
                     * @member {number|Long} teamId
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesRequest
                     * @instance
                     */
                    ListContestantInstancesRequest.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new ListContestantInstancesRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IListContestantInstancesRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.ListContestantInstancesRequest} ListContestantInstancesRequest instance
                     */
                    ListContestantInstancesRequest.create = function create(properties) {
                        return new ListContestantInstancesRequest(properties);
                    };

                    /**
                     * Encodes the specified ListContestantInstancesRequest message. Does not implicitly {@link isuxportal.proto.services.admin.ListContestantInstancesRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IListContestantInstancesRequest} message ListContestantInstancesRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListContestantInstancesRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.teamId);
                        return writer;
                    };

                    /**
                     * Encodes the specified ListContestantInstancesRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListContestantInstancesRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IListContestantInstancesRequest} message ListContestantInstancesRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListContestantInstancesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListContestantInstancesRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.ListContestantInstancesRequest} ListContestantInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListContestantInstancesRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.ListContestantInstancesRequest();
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
                     * Decodes a ListContestantInstancesRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.ListContestantInstancesRequest} ListContestantInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListContestantInstancesRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListContestantInstancesRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListContestantInstancesRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                                return "teamId: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a ListContestantInstancesRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.ListContestantInstancesRequest} ListContestantInstancesRequest
                     */
                    ListContestantInstancesRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.ListContestantInstancesRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.ListContestantInstancesRequest();
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
                     * Creates a plain object from a ListContestantInstancesRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.ListContestantInstancesRequest} message ListContestantInstancesRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListContestantInstancesRequest.toObject = function toObject(message, options) {
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
                     * Converts this ListContestantInstancesRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListContestantInstancesRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListContestantInstancesRequest;
                })();

                admin.ListContestantInstancesResponse = (function() {

                    /**
                     * Properties of a ListContestantInstancesResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IListContestantInstancesResponse
                     * @property {Array.<isuxportal.proto.resources.IContestantInstance>|null} [contestantInstances] ListContestantInstancesResponse contestantInstances
                     */

                    /**
                     * Constructs a new ListContestantInstancesResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a ListContestantInstancesResponse.
                     * @implements IListContestantInstancesResponse
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IListContestantInstancesResponse=} [properties] Properties to set
                     */
                    function ListContestantInstancesResponse(properties) {
                        this.contestantInstances = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListContestantInstancesResponse contestantInstances.
                     * @member {Array.<isuxportal.proto.resources.IContestantInstance>} contestantInstances
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesResponse
                     * @instance
                     */
                    ListContestantInstancesResponse.prototype.contestantInstances = $util.emptyArray;

                    /**
                     * Creates a new ListContestantInstancesResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IListContestantInstancesResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.ListContestantInstancesResponse} ListContestantInstancesResponse instance
                     */
                    ListContestantInstancesResponse.create = function create(properties) {
                        return new ListContestantInstancesResponse(properties);
                    };

                    /**
                     * Encodes the specified ListContestantInstancesResponse message. Does not implicitly {@link isuxportal.proto.services.admin.ListContestantInstancesResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IListContestantInstancesResponse} message ListContestantInstancesResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListContestantInstancesResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.contestantInstances != null && message.contestantInstances.length)
                            for (var i = 0; i < message.contestantInstances.length; ++i)
                                $root.isuxportal.proto.resources.ContestantInstance.encode(message.contestantInstances[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ListContestantInstancesResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListContestantInstancesResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IListContestantInstancesResponse} message ListContestantInstancesResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListContestantInstancesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListContestantInstancesResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.ListContestantInstancesResponse} ListContestantInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListContestantInstancesResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.ListContestantInstancesResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.contestantInstances && message.contestantInstances.length))
                                    message.contestantInstances = [];
                                message.contestantInstances.push($root.isuxportal.proto.resources.ContestantInstance.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListContestantInstancesResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.ListContestantInstancesResponse} ListContestantInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListContestantInstancesResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListContestantInstancesResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListContestantInstancesResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.contestantInstances != null && message.hasOwnProperty("contestantInstances")) {
                            if (!Array.isArray(message.contestantInstances))
                                return "contestantInstances: array expected";
                            for (var i = 0; i < message.contestantInstances.length; ++i) {
                                var error = $root.isuxportal.proto.resources.ContestantInstance.verify(message.contestantInstances[i]);
                                if (error)
                                    return "contestantInstances." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a ListContestantInstancesResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.ListContestantInstancesResponse} ListContestantInstancesResponse
                     */
                    ListContestantInstancesResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.ListContestantInstancesResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.ListContestantInstancesResponse();
                        if (object.contestantInstances) {
                            if (!Array.isArray(object.contestantInstances))
                                throw TypeError(".isuxportal.proto.services.admin.ListContestantInstancesResponse.contestantInstances: array expected");
                            message.contestantInstances = [];
                            for (var i = 0; i < object.contestantInstances.length; ++i) {
                                if (typeof object.contestantInstances[i] !== "object")
                                    throw TypeError(".isuxportal.proto.services.admin.ListContestantInstancesResponse.contestantInstances: object expected");
                                message.contestantInstances[i] = $root.isuxportal.proto.resources.ContestantInstance.fromObject(object.contestantInstances[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ListContestantInstancesResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.ListContestantInstancesResponse} message ListContestantInstancesResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListContestantInstancesResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.contestantInstances = [];
                        if (message.contestantInstances && message.contestantInstances.length) {
                            object.contestantInstances = [];
                            for (var j = 0; j < message.contestantInstances.length; ++j)
                                object.contestantInstances[j] = $root.isuxportal.proto.resources.ContestantInstance.toObject(message.contestantInstances[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ListContestantInstancesResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.ListContestantInstancesResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListContestantInstancesResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListContestantInstancesResponse;
                })();

                admin.DashboardRequest = (function() {

                    /**
                     * Properties of a DashboardRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IDashboardRequest
                     */

                    /**
                     * Constructs a new DashboardRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a DashboardRequest.
                     * @implements IDashboardRequest
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IDashboardRequest=} [properties] Properties to set
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
                     * @memberof isuxportal.proto.services.admin.DashboardRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IDashboardRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.DashboardRequest} DashboardRequest instance
                     */
                    DashboardRequest.create = function create(properties) {
                        return new DashboardRequest(properties);
                    };

                    /**
                     * Encodes the specified DashboardRequest message. Does not implicitly {@link isuxportal.proto.services.admin.DashboardRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.DashboardRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IDashboardRequest} message DashboardRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DashboardRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified DashboardRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.DashboardRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.DashboardRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IDashboardRequest} message DashboardRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DashboardRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DashboardRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.DashboardRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.DashboardRequest} DashboardRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DashboardRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.DashboardRequest();
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
                     * @memberof isuxportal.proto.services.admin.DashboardRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.DashboardRequest} DashboardRequest
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
                     * @memberof isuxportal.proto.services.admin.DashboardRequest
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
                     * @memberof isuxportal.proto.services.admin.DashboardRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.DashboardRequest} DashboardRequest
                     */
                    DashboardRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.DashboardRequest)
                            return object;
                        return new $root.isuxportal.proto.services.admin.DashboardRequest();
                    };

                    /**
                     * Creates a plain object from a DashboardRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.DashboardRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.DashboardRequest} message DashboardRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DashboardRequest.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this DashboardRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.DashboardRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DashboardRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DashboardRequest;
                })();

                admin.DashboardResponse = (function() {

                    /**
                     * Properties of a DashboardResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IDashboardResponse
                     * @property {isuxportal.proto.resources.ILeaderboard|null} [leaderboard] DashboardResponse leaderboard
                     */

                    /**
                     * Constructs a new DashboardResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a DashboardResponse.
                     * @implements IDashboardResponse
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IDashboardResponse=} [properties] Properties to set
                     */
                    function DashboardResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DashboardResponse leaderboard.
                     * @member {isuxportal.proto.resources.ILeaderboard|null|undefined} leaderboard
                     * @memberof isuxportal.proto.services.admin.DashboardResponse
                     * @instance
                     */
                    DashboardResponse.prototype.leaderboard = null;

                    /**
                     * Creates a new DashboardResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.DashboardResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IDashboardResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.DashboardResponse} DashboardResponse instance
                     */
                    DashboardResponse.create = function create(properties) {
                        return new DashboardResponse(properties);
                    };

                    /**
                     * Encodes the specified DashboardResponse message. Does not implicitly {@link isuxportal.proto.services.admin.DashboardResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.DashboardResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IDashboardResponse} message DashboardResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DashboardResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.leaderboard != null && Object.hasOwnProperty.call(message, "leaderboard"))
                            $root.isuxportal.proto.resources.Leaderboard.encode(message.leaderboard, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified DashboardResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.DashboardResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.DashboardResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IDashboardResponse} message DashboardResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DashboardResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DashboardResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.DashboardResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.DashboardResponse} DashboardResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DashboardResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.DashboardResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.leaderboard = $root.isuxportal.proto.resources.Leaderboard.decode(reader, reader.uint32());
                                break;
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
                     * @memberof isuxportal.proto.services.admin.DashboardResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.DashboardResponse} DashboardResponse
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
                     * @memberof isuxportal.proto.services.admin.DashboardResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DashboardResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.leaderboard != null && message.hasOwnProperty("leaderboard")) {
                            var error = $root.isuxportal.proto.resources.Leaderboard.verify(message.leaderboard);
                            if (error)
                                return "leaderboard." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a DashboardResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.DashboardResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.DashboardResponse} DashboardResponse
                     */
                    DashboardResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.DashboardResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.DashboardResponse();
                        if (object.leaderboard != null) {
                            if (typeof object.leaderboard !== "object")
                                throw TypeError(".isuxportal.proto.services.admin.DashboardResponse.leaderboard: object expected");
                            message.leaderboard = $root.isuxportal.proto.resources.Leaderboard.fromObject(object.leaderboard);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a DashboardResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.DashboardResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.DashboardResponse} message DashboardResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DashboardResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.leaderboard = null;
                        if (message.leaderboard != null && message.hasOwnProperty("leaderboard"))
                            object.leaderboard = $root.isuxportal.proto.resources.Leaderboard.toObject(message.leaderboard, options);
                        return object;
                    };

                    /**
                     * Converts this DashboardResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.DashboardResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DashboardResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DashboardResponse;
                })();

                admin.ListTeamsQuery = (function() {

                    /**
                     * Properties of a ListTeamsQuery.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IListTeamsQuery
                     */

                    /**
                     * Constructs a new ListTeamsQuery.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a ListTeamsQuery.
                     * @implements IListTeamsQuery
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IListTeamsQuery=} [properties] Properties to set
                     */
                    function ListTeamsQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new ListTeamsQuery instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.ListTeamsQuery
                     * @static
                     * @param {isuxportal.proto.services.admin.IListTeamsQuery=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.ListTeamsQuery} ListTeamsQuery instance
                     */
                    ListTeamsQuery.create = function create(properties) {
                        return new ListTeamsQuery(properties);
                    };

                    /**
                     * Encodes the specified ListTeamsQuery message. Does not implicitly {@link isuxportal.proto.services.admin.ListTeamsQuery.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.ListTeamsQuery
                     * @static
                     * @param {isuxportal.proto.services.admin.IListTeamsQuery} message ListTeamsQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListTeamsQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified ListTeamsQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListTeamsQuery.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.ListTeamsQuery
                     * @static
                     * @param {isuxportal.proto.services.admin.IListTeamsQuery} message ListTeamsQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListTeamsQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListTeamsQuery message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.ListTeamsQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.ListTeamsQuery} ListTeamsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListTeamsQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.ListTeamsQuery();
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
                     * Decodes a ListTeamsQuery message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.ListTeamsQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.ListTeamsQuery} ListTeamsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListTeamsQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListTeamsQuery message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.ListTeamsQuery
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListTeamsQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a ListTeamsQuery message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.ListTeamsQuery
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.ListTeamsQuery} ListTeamsQuery
                     */
                    ListTeamsQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.ListTeamsQuery)
                            return object;
                        return new $root.isuxportal.proto.services.admin.ListTeamsQuery();
                    };

                    /**
                     * Creates a plain object from a ListTeamsQuery message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.ListTeamsQuery
                     * @static
                     * @param {isuxportal.proto.services.admin.ListTeamsQuery} message ListTeamsQuery
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListTeamsQuery.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this ListTeamsQuery to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.ListTeamsQuery
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListTeamsQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListTeamsQuery;
                })();

                admin.ListTeamsResponse = (function() {

                    /**
                     * Properties of a ListTeamsResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IListTeamsResponse
                     * @property {Array.<isuxportal.proto.services.admin.ListTeamsResponse.ITeamListItem>|null} [teams] ListTeamsResponse teams
                     */

                    /**
                     * Constructs a new ListTeamsResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a ListTeamsResponse.
                     * @implements IListTeamsResponse
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IListTeamsResponse=} [properties] Properties to set
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
                     * @member {Array.<isuxportal.proto.services.admin.ListTeamsResponse.ITeamListItem>} teams
                     * @memberof isuxportal.proto.services.admin.ListTeamsResponse
                     * @instance
                     */
                    ListTeamsResponse.prototype.teams = $util.emptyArray;

                    /**
                     * Creates a new ListTeamsResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.ListTeamsResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IListTeamsResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.ListTeamsResponse} ListTeamsResponse instance
                     */
                    ListTeamsResponse.create = function create(properties) {
                        return new ListTeamsResponse(properties);
                    };

                    /**
                     * Encodes the specified ListTeamsResponse message. Does not implicitly {@link isuxportal.proto.services.admin.ListTeamsResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.ListTeamsResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IListTeamsResponse} message ListTeamsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListTeamsResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teams != null && message.teams.length)
                            for (var i = 0; i < message.teams.length; ++i)
                                $root.isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem.encode(message.teams[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ListTeamsResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListTeamsResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.ListTeamsResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IListTeamsResponse} message ListTeamsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListTeamsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListTeamsResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.ListTeamsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.ListTeamsResponse} ListTeamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListTeamsResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.ListTeamsResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.teams && message.teams.length))
                                    message.teams = [];
                                message.teams.push($root.isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem.decode(reader, reader.uint32()));
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
                     * @memberof isuxportal.proto.services.admin.ListTeamsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.ListTeamsResponse} ListTeamsResponse
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
                     * @memberof isuxportal.proto.services.admin.ListTeamsResponse
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
                                var error = $root.isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem.verify(message.teams[i]);
                                if (error)
                                    return "teams." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a ListTeamsResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.ListTeamsResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.ListTeamsResponse} ListTeamsResponse
                     */
                    ListTeamsResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.ListTeamsResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.ListTeamsResponse();
                        if (object.teams) {
                            if (!Array.isArray(object.teams))
                                throw TypeError(".isuxportal.proto.services.admin.ListTeamsResponse.teams: array expected");
                            message.teams = [];
                            for (var i = 0; i < object.teams.length; ++i) {
                                if (typeof object.teams[i] !== "object")
                                    throw TypeError(".isuxportal.proto.services.admin.ListTeamsResponse.teams: object expected");
                                message.teams[i] = $root.isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem.fromObject(object.teams[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ListTeamsResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.ListTeamsResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.ListTeamsResponse} message ListTeamsResponse
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
                                object.teams[j] = $root.isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem.toObject(message.teams[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ListTeamsResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.ListTeamsResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListTeamsResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    ListTeamsResponse.TeamListItem = (function() {

                        /**
                         * Properties of a TeamListItem.
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse
                         * @interface ITeamListItem
                         * @property {number|Long|null} [teamId] TeamListItem teamId
                         * @property {string|null} [name] TeamListItem name
                         * @property {Array.<string>|null} [memberNames] TeamListItem memberNames
                         * @property {boolean|null} [finalParticipation] TeamListItem finalParticipation
                         * @property {boolean|null} [isStudent] TeamListItem isStudent
                         * @property {boolean|null} [withdrawn] TeamListItem withdrawn
                         * @property {boolean|null} [disqualified] TeamListItem disqualified
                         */

                        /**
                         * Constructs a new TeamListItem.
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse
                         * @classdesc Represents a TeamListItem.
                         * @implements ITeamListItem
                         * @constructor
                         * @param {isuxportal.proto.services.admin.ListTeamsResponse.ITeamListItem=} [properties] Properties to set
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
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * TeamListItem name.
                         * @member {string} name
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.name = "";

                        /**
                         * TeamListItem memberNames.
                         * @member {Array.<string>} memberNames
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.memberNames = $util.emptyArray;

                        /**
                         * TeamListItem finalParticipation.
                         * @member {boolean} finalParticipation
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.finalParticipation = false;

                        /**
                         * TeamListItem isStudent.
                         * @member {boolean} isStudent
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.isStudent = false;

                        /**
                         * TeamListItem withdrawn.
                         * @member {boolean} withdrawn
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.withdrawn = false;

                        /**
                         * TeamListItem disqualified.
                         * @member {boolean} disqualified
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.disqualified = false;

                        /**
                         * Creates a new TeamListItem instance using the specified properties.
                         * @function create
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {isuxportal.proto.services.admin.ListTeamsResponse.ITeamListItem=} [properties] Properties to set
                         * @returns {isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem} TeamListItem instance
                         */
                        TeamListItem.create = function create(properties) {
                            return new TeamListItem(properties);
                        };

                        /**
                         * Encodes the specified TeamListItem message. Does not implicitly {@link isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem.verify|verify} messages.
                         * @function encode
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {isuxportal.proto.services.admin.ListTeamsResponse.ITeamListItem} message TeamListItem message or plain object to encode
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
                            if (message.withdrawn != null && Object.hasOwnProperty.call(message, "withdrawn"))
                                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.withdrawn);
                            if (message.disqualified != null && Object.hasOwnProperty.call(message, "disqualified"))
                                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.disqualified);
                            return writer;
                        };

                        /**
                         * Encodes the specified TeamListItem message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {isuxportal.proto.services.admin.ListTeamsResponse.ITeamListItem} message TeamListItem message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TeamListItem.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a TeamListItem message from the specified reader or buffer.
                         * @function decode
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem} TeamListItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TeamListItem.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem();
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
                                case 6:
                                    message.withdrawn = reader.bool();
                                    break;
                                case 7:
                                    message.disqualified = reader.bool();
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
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem} TeamListItem
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
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem
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
                            if (message.withdrawn != null && message.hasOwnProperty("withdrawn"))
                                if (typeof message.withdrawn !== "boolean")
                                    return "withdrawn: boolean expected";
                            if (message.disqualified != null && message.hasOwnProperty("disqualified"))
                                if (typeof message.disqualified !== "boolean")
                                    return "disqualified: boolean expected";
                            return null;
                        };

                        /**
                         * Creates a TeamListItem message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem} TeamListItem
                         */
                        TeamListItem.fromObject = function fromObject(object) {
                            if (object instanceof $root.isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem)
                                return object;
                            var message = new $root.isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem();
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
                                    throw TypeError(".isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem.memberNames: array expected");
                                message.memberNames = [];
                                for (var i = 0; i < object.memberNames.length; ++i)
                                    message.memberNames[i] = String(object.memberNames[i]);
                            }
                            if (object.finalParticipation != null)
                                message.finalParticipation = Boolean(object.finalParticipation);
                            if (object.isStudent != null)
                                message.isStudent = Boolean(object.isStudent);
                            if (object.withdrawn != null)
                                message.withdrawn = Boolean(object.withdrawn);
                            if (object.disqualified != null)
                                message.disqualified = Boolean(object.disqualified);
                            return message;
                        };

                        /**
                         * Creates a plain object from a TeamListItem message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem} message TeamListItem
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
                                object.withdrawn = false;
                                object.disqualified = false;
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
                            if (message.withdrawn != null && message.hasOwnProperty("withdrawn"))
                                object.withdrawn = message.withdrawn;
                            if (message.disqualified != null && message.hasOwnProperty("disqualified"))
                                object.disqualified = message.disqualified;
                            return object;
                        };

                        /**
                         * Converts this TeamListItem to JSON.
                         * @function toJSON
                         * @memberof isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem
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

                admin.GetTeamQuery = (function() {

                    /**
                     * Properties of a GetTeamQuery.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IGetTeamQuery
                     * @property {number|Long|null} [id] GetTeamQuery id
                     */

                    /**
                     * Constructs a new GetTeamQuery.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a GetTeamQuery.
                     * @implements IGetTeamQuery
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IGetTeamQuery=} [properties] Properties to set
                     */
                    function GetTeamQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetTeamQuery id.
                     * @member {number|Long} id
                     * @memberof isuxportal.proto.services.admin.GetTeamQuery
                     * @instance
                     */
                    GetTeamQuery.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new GetTeamQuery instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.GetTeamQuery
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetTeamQuery=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.GetTeamQuery} GetTeamQuery instance
                     */
                    GetTeamQuery.create = function create(properties) {
                        return new GetTeamQuery(properties);
                    };

                    /**
                     * Encodes the specified GetTeamQuery message. Does not implicitly {@link isuxportal.proto.services.admin.GetTeamQuery.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.GetTeamQuery
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetTeamQuery} message GetTeamQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetTeamQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                        return writer;
                    };

                    /**
                     * Encodes the specified GetTeamQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.GetTeamQuery.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.GetTeamQuery
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetTeamQuery} message GetTeamQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetTeamQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetTeamQuery message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.GetTeamQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.GetTeamQuery} GetTeamQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetTeamQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.GetTeamQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetTeamQuery message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.GetTeamQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.GetTeamQuery} GetTeamQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetTeamQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetTeamQuery message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.GetTeamQuery
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetTeamQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a GetTeamQuery message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.GetTeamQuery
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.GetTeamQuery} GetTeamQuery
                     */
                    GetTeamQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.GetTeamQuery)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.GetTeamQuery();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetTeamQuery message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.GetTeamQuery
                     * @static
                     * @param {isuxportal.proto.services.admin.GetTeamQuery} message GetTeamQuery
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetTeamQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                        return object;
                    };

                    /**
                     * Converts this GetTeamQuery to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.GetTeamQuery
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetTeamQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetTeamQuery;
                })();

                admin.GetTeamResponse = (function() {

                    /**
                     * Properties of a GetTeamResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IGetTeamResponse
                     * @property {isuxportal.proto.resources.ITeam|null} [team] GetTeamResponse team
                     */

                    /**
                     * Constructs a new GetTeamResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents a GetTeamResponse.
                     * @implements IGetTeamResponse
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IGetTeamResponse=} [properties] Properties to set
                     */
                    function GetTeamResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetTeamResponse team.
                     * @member {isuxportal.proto.resources.ITeam|null|undefined} team
                     * @memberof isuxportal.proto.services.admin.GetTeamResponse
                     * @instance
                     */
                    GetTeamResponse.prototype.team = null;

                    /**
                     * Creates a new GetTeamResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.GetTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetTeamResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.GetTeamResponse} GetTeamResponse instance
                     */
                    GetTeamResponse.create = function create(properties) {
                        return new GetTeamResponse(properties);
                    };

                    /**
                     * Encodes the specified GetTeamResponse message. Does not implicitly {@link isuxportal.proto.services.admin.GetTeamResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.GetTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetTeamResponse} message GetTeamResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetTeamResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                            $root.isuxportal.proto.resources.Team.encode(message.team, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetTeamResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.GetTeamResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.GetTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IGetTeamResponse} message GetTeamResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetTeamResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetTeamResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.GetTeamResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.GetTeamResponse} GetTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetTeamResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.GetTeamResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
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
                     * Decodes a GetTeamResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.GetTeamResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.GetTeamResponse} GetTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetTeamResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetTeamResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.GetTeamResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetTeamResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.team != null && message.hasOwnProperty("team")) {
                            var error = $root.isuxportal.proto.resources.Team.verify(message.team);
                            if (error)
                                return "team." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a GetTeamResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.GetTeamResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.GetTeamResponse} GetTeamResponse
                     */
                    GetTeamResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.GetTeamResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.GetTeamResponse();
                        if (object.team != null) {
                            if (typeof object.team !== "object")
                                throw TypeError(".isuxportal.proto.services.admin.GetTeamResponse.team: object expected");
                            message.team = $root.isuxportal.proto.resources.Team.fromObject(object.team);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetTeamResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.GetTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.GetTeamResponse} message GetTeamResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetTeamResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.team = null;
                        if (message.team != null && message.hasOwnProperty("team"))
                            object.team = $root.isuxportal.proto.resources.Team.toObject(message.team, options);
                        return object;
                    };

                    /**
                     * Converts this GetTeamResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.GetTeamResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetTeamResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetTeamResponse;
                })();

                admin.UpdateTeamQuery = (function() {

                    /**
                     * Properties of an UpdateTeamQuery.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IUpdateTeamQuery
                     * @property {number|Long|null} [id] UpdateTeamQuery id
                     */

                    /**
                     * Constructs a new UpdateTeamQuery.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents an UpdateTeamQuery.
                     * @implements IUpdateTeamQuery
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IUpdateTeamQuery=} [properties] Properties to set
                     */
                    function UpdateTeamQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateTeamQuery id.
                     * @member {number|Long} id
                     * @memberof isuxportal.proto.services.admin.UpdateTeamQuery
                     * @instance
                     */
                    UpdateTeamQuery.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new UpdateTeamQuery instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.UpdateTeamQuery
                     * @static
                     * @param {isuxportal.proto.services.admin.IUpdateTeamQuery=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.UpdateTeamQuery} UpdateTeamQuery instance
                     */
                    UpdateTeamQuery.create = function create(properties) {
                        return new UpdateTeamQuery(properties);
                    };

                    /**
                     * Encodes the specified UpdateTeamQuery message. Does not implicitly {@link isuxportal.proto.services.admin.UpdateTeamQuery.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.UpdateTeamQuery
                     * @static
                     * @param {isuxportal.proto.services.admin.IUpdateTeamQuery} message UpdateTeamQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateTeamQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                        return writer;
                    };

                    /**
                     * Encodes the specified UpdateTeamQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.UpdateTeamQuery.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.UpdateTeamQuery
                     * @static
                     * @param {isuxportal.proto.services.admin.IUpdateTeamQuery} message UpdateTeamQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateTeamQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpdateTeamQuery message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.UpdateTeamQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.UpdateTeamQuery} UpdateTeamQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateTeamQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.UpdateTeamQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UpdateTeamQuery message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.UpdateTeamQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.UpdateTeamQuery} UpdateTeamQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateTeamQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpdateTeamQuery message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.UpdateTeamQuery
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdateTeamQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates an UpdateTeamQuery message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.UpdateTeamQuery
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.UpdateTeamQuery} UpdateTeamQuery
                     */
                    UpdateTeamQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.UpdateTeamQuery)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.UpdateTeamQuery();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from an UpdateTeamQuery message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.UpdateTeamQuery
                     * @static
                     * @param {isuxportal.proto.services.admin.UpdateTeamQuery} message UpdateTeamQuery
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdateTeamQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                        return object;
                    };

                    /**
                     * Converts this UpdateTeamQuery to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.UpdateTeamQuery
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdateTeamQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpdateTeamQuery;
                })();

                admin.UpdateTeamRequest = (function() {

                    /**
                     * Properties of an UpdateTeamRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IUpdateTeamRequest
                     * @property {isuxportal.proto.resources.ITeam|null} [team] UpdateTeamRequest team
                     * @property {Array.<isuxportal.proto.resources.IContestant>|null} [contestants] UpdateTeamRequest contestants
                     */

                    /**
                     * Constructs a new UpdateTeamRequest.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents an UpdateTeamRequest.
                     * @implements IUpdateTeamRequest
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IUpdateTeamRequest=} [properties] Properties to set
                     */
                    function UpdateTeamRequest(properties) {
                        this.contestants = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateTeamRequest team.
                     * @member {isuxportal.proto.resources.ITeam|null|undefined} team
                     * @memberof isuxportal.proto.services.admin.UpdateTeamRequest
                     * @instance
                     */
                    UpdateTeamRequest.prototype.team = null;

                    /**
                     * UpdateTeamRequest contestants.
                     * @member {Array.<isuxportal.proto.resources.IContestant>} contestants
                     * @memberof isuxportal.proto.services.admin.UpdateTeamRequest
                     * @instance
                     */
                    UpdateTeamRequest.prototype.contestants = $util.emptyArray;

                    /**
                     * Creates a new UpdateTeamRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.UpdateTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IUpdateTeamRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.UpdateTeamRequest} UpdateTeamRequest instance
                     */
                    UpdateTeamRequest.create = function create(properties) {
                        return new UpdateTeamRequest(properties);
                    };

                    /**
                     * Encodes the specified UpdateTeamRequest message. Does not implicitly {@link isuxportal.proto.services.admin.UpdateTeamRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.UpdateTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IUpdateTeamRequest} message UpdateTeamRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateTeamRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                            $root.isuxportal.proto.resources.Team.encode(message.team, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.contestants != null && message.contestants.length)
                            for (var i = 0; i < message.contestants.length; ++i)
                                $root.isuxportal.proto.resources.Contestant.encode(message.contestants[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified UpdateTeamRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.UpdateTeamRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.UpdateTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.IUpdateTeamRequest} message UpdateTeamRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateTeamRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpdateTeamRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.UpdateTeamRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.UpdateTeamRequest} UpdateTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateTeamRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.UpdateTeamRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.team = $root.isuxportal.proto.resources.Team.decode(reader, reader.uint32());
                                break;
                            case 2:
                                if (!(message.contestants && message.contestants.length))
                                    message.contestants = [];
                                message.contestants.push($root.isuxportal.proto.resources.Contestant.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UpdateTeamRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.UpdateTeamRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.UpdateTeamRequest} UpdateTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateTeamRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpdateTeamRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.UpdateTeamRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdateTeamRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.team != null && message.hasOwnProperty("team")) {
                            var error = $root.isuxportal.proto.resources.Team.verify(message.team);
                            if (error)
                                return "team." + error;
                        }
                        if (message.contestants != null && message.hasOwnProperty("contestants")) {
                            if (!Array.isArray(message.contestants))
                                return "contestants: array expected";
                            for (var i = 0; i < message.contestants.length; ++i) {
                                var error = $root.isuxportal.proto.resources.Contestant.verify(message.contestants[i]);
                                if (error)
                                    return "contestants." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an UpdateTeamRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.UpdateTeamRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.UpdateTeamRequest} UpdateTeamRequest
                     */
                    UpdateTeamRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.UpdateTeamRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.admin.UpdateTeamRequest();
                        if (object.team != null) {
                            if (typeof object.team !== "object")
                                throw TypeError(".isuxportal.proto.services.admin.UpdateTeamRequest.team: object expected");
                            message.team = $root.isuxportal.proto.resources.Team.fromObject(object.team);
                        }
                        if (object.contestants) {
                            if (!Array.isArray(object.contestants))
                                throw TypeError(".isuxportal.proto.services.admin.UpdateTeamRequest.contestants: array expected");
                            message.contestants = [];
                            for (var i = 0; i < object.contestants.length; ++i) {
                                if (typeof object.contestants[i] !== "object")
                                    throw TypeError(".isuxportal.proto.services.admin.UpdateTeamRequest.contestants: object expected");
                                message.contestants[i] = $root.isuxportal.proto.resources.Contestant.fromObject(object.contestants[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an UpdateTeamRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.UpdateTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.admin.UpdateTeamRequest} message UpdateTeamRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdateTeamRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.contestants = [];
                        if (options.defaults)
                            object.team = null;
                        if (message.team != null && message.hasOwnProperty("team"))
                            object.team = $root.isuxportal.proto.resources.Team.toObject(message.team, options);
                        if (message.contestants && message.contestants.length) {
                            object.contestants = [];
                            for (var j = 0; j < message.contestants.length; ++j)
                                object.contestants[j] = $root.isuxportal.proto.resources.Contestant.toObject(message.contestants[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this UpdateTeamRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.UpdateTeamRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdateTeamRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpdateTeamRequest;
                })();

                admin.UpdateTeamResponse = (function() {

                    /**
                     * Properties of an UpdateTeamResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @interface IUpdateTeamResponse
                     */

                    /**
                     * Constructs a new UpdateTeamResponse.
                     * @memberof isuxportal.proto.services.admin
                     * @classdesc Represents an UpdateTeamResponse.
                     * @implements IUpdateTeamResponse
                     * @constructor
                     * @param {isuxportal.proto.services.admin.IUpdateTeamResponse=} [properties] Properties to set
                     */
                    function UpdateTeamResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new UpdateTeamResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.admin.UpdateTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IUpdateTeamResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.admin.UpdateTeamResponse} UpdateTeamResponse instance
                     */
                    UpdateTeamResponse.create = function create(properties) {
                        return new UpdateTeamResponse(properties);
                    };

                    /**
                     * Encodes the specified UpdateTeamResponse message. Does not implicitly {@link isuxportal.proto.services.admin.UpdateTeamResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.admin.UpdateTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IUpdateTeamResponse} message UpdateTeamResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateTeamResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified UpdateTeamResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.UpdateTeamResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.admin.UpdateTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.IUpdateTeamResponse} message UpdateTeamResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateTeamResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpdateTeamResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.admin.UpdateTeamResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.admin.UpdateTeamResponse} UpdateTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateTeamResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.admin.UpdateTeamResponse();
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
                     * Decodes an UpdateTeamResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.admin.UpdateTeamResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.admin.UpdateTeamResponse} UpdateTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateTeamResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpdateTeamResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.admin.UpdateTeamResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdateTeamResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates an UpdateTeamResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.admin.UpdateTeamResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.admin.UpdateTeamResponse} UpdateTeamResponse
                     */
                    UpdateTeamResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.admin.UpdateTeamResponse)
                            return object;
                        return new $root.isuxportal.proto.services.admin.UpdateTeamResponse();
                    };

                    /**
                     * Creates a plain object from an UpdateTeamResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.admin.UpdateTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.admin.UpdateTeamResponse} message UpdateTeamResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdateTeamResponse.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this UpdateTeamResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.admin.UpdateTeamResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdateTeamResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpdateTeamResponse;
                })();

                return admin;
            })();

            services.audience = (function() {

                /**
                 * Namespace audience.
                 * @memberof isuxportal.proto.services
                 * @namespace
                 */
                var audience = {};

                audience.DashboardRequest = (function() {

                    /**
                     * Properties of a DashboardRequest.
                     * @memberof isuxportal.proto.services.audience
                     * @interface IDashboardRequest
                     */

                    /**
                     * Constructs a new DashboardRequest.
                     * @memberof isuxportal.proto.services.audience
                     * @classdesc Represents a DashboardRequest.
                     * @implements IDashboardRequest
                     * @constructor
                     * @param {isuxportal.proto.services.audience.IDashboardRequest=} [properties] Properties to set
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
                     * @memberof isuxportal.proto.services.audience.DashboardRequest
                     * @static
                     * @param {isuxportal.proto.services.audience.IDashboardRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.audience.DashboardRequest} DashboardRequest instance
                     */
                    DashboardRequest.create = function create(properties) {
                        return new DashboardRequest(properties);
                    };

                    /**
                     * Encodes the specified DashboardRequest message. Does not implicitly {@link isuxportal.proto.services.audience.DashboardRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.audience.DashboardRequest
                     * @static
                     * @param {isuxportal.proto.services.audience.IDashboardRequest} message DashboardRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DashboardRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified DashboardRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.DashboardRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.audience.DashboardRequest
                     * @static
                     * @param {isuxportal.proto.services.audience.IDashboardRequest} message DashboardRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DashboardRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DashboardRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.audience.DashboardRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.audience.DashboardRequest} DashboardRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DashboardRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.audience.DashboardRequest();
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
                     * @memberof isuxportal.proto.services.audience.DashboardRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.audience.DashboardRequest} DashboardRequest
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
                     * @memberof isuxportal.proto.services.audience.DashboardRequest
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
                     * @memberof isuxportal.proto.services.audience.DashboardRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.audience.DashboardRequest} DashboardRequest
                     */
                    DashboardRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.audience.DashboardRequest)
                            return object;
                        return new $root.isuxportal.proto.services.audience.DashboardRequest();
                    };

                    /**
                     * Creates a plain object from a DashboardRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.audience.DashboardRequest
                     * @static
                     * @param {isuxportal.proto.services.audience.DashboardRequest} message DashboardRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DashboardRequest.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this DashboardRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.audience.DashboardRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DashboardRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DashboardRequest;
                })();

                audience.DashboardResponse = (function() {

                    /**
                     * Properties of a DashboardResponse.
                     * @memberof isuxportal.proto.services.audience
                     * @interface IDashboardResponse
                     * @property {isuxportal.proto.resources.ILeaderboard|null} [leaderboard] DashboardResponse leaderboard
                     */

                    /**
                     * Constructs a new DashboardResponse.
                     * @memberof isuxportal.proto.services.audience
                     * @classdesc Represents a DashboardResponse.
                     * @implements IDashboardResponse
                     * @constructor
                     * @param {isuxportal.proto.services.audience.IDashboardResponse=} [properties] Properties to set
                     */
                    function DashboardResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DashboardResponse leaderboard.
                     * @member {isuxportal.proto.resources.ILeaderboard|null|undefined} leaderboard
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @instance
                     */
                    DashboardResponse.prototype.leaderboard = null;

                    /**
                     * Creates a new DashboardResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @static
                     * @param {isuxportal.proto.services.audience.IDashboardResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.audience.DashboardResponse} DashboardResponse instance
                     */
                    DashboardResponse.create = function create(properties) {
                        return new DashboardResponse(properties);
                    };

                    /**
                     * Encodes the specified DashboardResponse message. Does not implicitly {@link isuxportal.proto.services.audience.DashboardResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @static
                     * @param {isuxportal.proto.services.audience.IDashboardResponse} message DashboardResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DashboardResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.leaderboard != null && Object.hasOwnProperty.call(message, "leaderboard"))
                            $root.isuxportal.proto.resources.Leaderboard.encode(message.leaderboard, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified DashboardResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.DashboardResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @static
                     * @param {isuxportal.proto.services.audience.IDashboardResponse} message DashboardResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DashboardResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DashboardResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.audience.DashboardResponse} DashboardResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DashboardResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.audience.DashboardResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.leaderboard = $root.isuxportal.proto.resources.Leaderboard.decode(reader, reader.uint32());
                                break;
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
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.audience.DashboardResponse} DashboardResponse
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
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DashboardResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.leaderboard != null && message.hasOwnProperty("leaderboard")) {
                            var error = $root.isuxportal.proto.resources.Leaderboard.verify(message.leaderboard);
                            if (error)
                                return "leaderboard." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a DashboardResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.audience.DashboardResponse} DashboardResponse
                     */
                    DashboardResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.audience.DashboardResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.audience.DashboardResponse();
                        if (object.leaderboard != null) {
                            if (typeof object.leaderboard !== "object")
                                throw TypeError(".isuxportal.proto.services.audience.DashboardResponse.leaderboard: object expected");
                            message.leaderboard = $root.isuxportal.proto.resources.Leaderboard.fromObject(object.leaderboard);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a DashboardResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @static
                     * @param {isuxportal.proto.services.audience.DashboardResponse} message DashboardResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DashboardResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.leaderboard = null;
                        if (message.leaderboard != null && message.hasOwnProperty("leaderboard"))
                            object.leaderboard = $root.isuxportal.proto.resources.Leaderboard.toObject(message.leaderboard, options);
                        return object;
                    };

                    /**
                     * Converts this DashboardResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DashboardResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DashboardResponse;
                })();

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
