// source: isuxportal/resources/team.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var isuxportal_resources_contestant_pb = require('../../isuxportal/resources/contestant_pb.js');
goog.object.extend(proto, isuxportal_resources_contestant_pb);
goog.exportSymbol('proto.isuxportal.proto.resources.Team', null, global);
goog.exportSymbol('proto.isuxportal.proto.resources.Team.TeamDetail', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.isuxportal.proto.resources.Team = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.isuxportal.proto.resources.Team.repeatedFields_, null);
};
goog.inherits(proto.isuxportal.proto.resources.Team, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.isuxportal.proto.resources.Team.displayName = 'proto.isuxportal.proto.resources.Team';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.isuxportal.proto.resources.Team.TeamDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.isuxportal.proto.resources.Team.TeamDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.isuxportal.proto.resources.Team.TeamDetail.displayName = 'proto.isuxportal.proto.resources.Team.TeamDetail';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.isuxportal.proto.resources.Team.repeatedFields_ = [4,17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.isuxportal.proto.resources.Team.prototype.toObject = function(opt_includeInstance) {
  return proto.isuxportal.proto.resources.Team.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.isuxportal.proto.resources.Team} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.isuxportal.proto.resources.Team.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    leaderId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    memberIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    finalParticipation: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    hidden: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    withdrawn: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    detail: (f = msg.getDetail()) && proto.isuxportal.proto.resources.Team.TeamDetail.toObject(includeInstance, f),
    leader: (f = msg.getLeader()) && isuxportal_resources_contestant_pb.Contestant.toObject(includeInstance, f),
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    isuxportal_resources_contestant_pb.Contestant.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.isuxportal.proto.resources.Team}
 */
proto.isuxportal.proto.resources.Team.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.isuxportal.proto.resources.Team;
  return proto.isuxportal.proto.resources.Team.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.isuxportal.proto.resources.Team} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.isuxportal.proto.resources.Team}
 */
proto.isuxportal.proto.resources.Team.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLeaderId(value);
      break;
    case 4:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt64());
      msg.setMemberIdsList(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFinalParticipation(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHidden(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithdrawn(value);
      break;
    case 8:
      var value = new proto.isuxportal.proto.resources.Team.TeamDetail;
      reader.readMessage(value,proto.isuxportal.proto.resources.Team.TeamDetail.deserializeBinaryFromReader);
      msg.setDetail(value);
      break;
    case 16:
      var value = new isuxportal_resources_contestant_pb.Contestant;
      reader.readMessage(value,isuxportal_resources_contestant_pb.Contestant.deserializeBinaryFromReader);
      msg.setLeader(value);
      break;
    case 17:
      var value = new isuxportal_resources_contestant_pb.Contestant;
      reader.readMessage(value,isuxportal_resources_contestant_pb.Contestant.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.isuxportal.proto.resources.Team.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.isuxportal.proto.resources.Team.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.isuxportal.proto.resources.Team} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.isuxportal.proto.resources.Team.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLeaderId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMemberIdsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      4,
      f
    );
  }
  f = message.getFinalParticipation();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getHidden();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getWithdrawn();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getDetail();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.isuxportal.proto.resources.Team.TeamDetail.serializeBinaryToWriter
    );
  }
  f = message.getLeader();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      isuxportal_resources_contestant_pb.Contestant.serializeBinaryToWriter
    );
  }
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      isuxportal_resources_contestant_pb.Contestant.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.isuxportal.proto.resources.Team.TeamDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.isuxportal.proto.resources.Team.TeamDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.isuxportal.proto.resources.Team.TeamDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.isuxportal.proto.resources.Team.TeamDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    emailAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    benchmarkTargetId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    inviteToken: jspb.Message.getFieldWithDefault(msg, 16, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.isuxportal.proto.resources.Team.TeamDetail}
 */
proto.isuxportal.proto.resources.Team.TeamDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.isuxportal.proto.resources.Team.TeamDetail;
  return proto.isuxportal.proto.resources.Team.TeamDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.isuxportal.proto.resources.Team.TeamDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.isuxportal.proto.resources.Team.TeamDetail}
 */
proto.isuxportal.proto.resources.Team.TeamDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBenchmarkTargetId(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setInviteToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.isuxportal.proto.resources.Team.TeamDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.isuxportal.proto.resources.Team.TeamDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.isuxportal.proto.resources.Team.TeamDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.isuxportal.proto.resources.Team.TeamDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmailAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBenchmarkTargetId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getInviteToken();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
};


/**
 * optional string email_address = 1;
 * @return {string}
 */
proto.isuxportal.proto.resources.Team.TeamDetail.prototype.getEmailAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.isuxportal.proto.resources.Team.TeamDetail} returns this
 */
proto.isuxportal.proto.resources.Team.TeamDetail.prototype.setEmailAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 benchmark_target_id = 2;
 * @return {number}
 */
proto.isuxportal.proto.resources.Team.TeamDetail.prototype.getBenchmarkTargetId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.isuxportal.proto.resources.Team.TeamDetail} returns this
 */
proto.isuxportal.proto.resources.Team.TeamDetail.prototype.setBenchmarkTargetId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string invite_token = 16;
 * @return {string}
 */
proto.isuxportal.proto.resources.Team.TeamDetail.prototype.getInviteToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.isuxportal.proto.resources.Team.TeamDetail} returns this
 */
proto.isuxportal.proto.resources.Team.TeamDetail.prototype.setInviteToken = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.isuxportal.proto.resources.Team.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.isuxportal.proto.resources.Team} returns this
 */
proto.isuxportal.proto.resources.Team.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.isuxportal.proto.resources.Team.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.isuxportal.proto.resources.Team} returns this
 */
proto.isuxportal.proto.resources.Team.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 leader_id = 3;
 * @return {number}
 */
proto.isuxportal.proto.resources.Team.prototype.getLeaderId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.isuxportal.proto.resources.Team} returns this
 */
proto.isuxportal.proto.resources.Team.prototype.setLeaderId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated int64 member_ids = 4;
 * @return {!Array<number>}
 */
proto.isuxportal.proto.resources.Team.prototype.getMemberIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.isuxportal.proto.resources.Team} returns this
 */
proto.isuxportal.proto.resources.Team.prototype.setMemberIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.isuxportal.proto.resources.Team} returns this
 */
proto.isuxportal.proto.resources.Team.prototype.addMemberIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.isuxportal.proto.resources.Team} returns this
 */
proto.isuxportal.proto.resources.Team.prototype.clearMemberIdsList = function() {
  return this.setMemberIdsList([]);
};


/**
 * optional bool final_participation = 5;
 * @return {boolean}
 */
proto.isuxportal.proto.resources.Team.prototype.getFinalParticipation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.isuxportal.proto.resources.Team} returns this
 */
proto.isuxportal.proto.resources.Team.prototype.setFinalParticipation = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool hidden = 6;
 * @return {boolean}
 */
proto.isuxportal.proto.resources.Team.prototype.getHidden = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.isuxportal.proto.resources.Team} returns this
 */
proto.isuxportal.proto.resources.Team.prototype.setHidden = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool withdrawn = 7;
 * @return {boolean}
 */
proto.isuxportal.proto.resources.Team.prototype.getWithdrawn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.isuxportal.proto.resources.Team} returns this
 */
proto.isuxportal.proto.resources.Team.prototype.setWithdrawn = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional TeamDetail detail = 8;
 * @return {?proto.isuxportal.proto.resources.Team.TeamDetail}
 */
proto.isuxportal.proto.resources.Team.prototype.getDetail = function() {
  return /** @type{?proto.isuxportal.proto.resources.Team.TeamDetail} */ (
    jspb.Message.getWrapperField(this, proto.isuxportal.proto.resources.Team.TeamDetail, 8));
};


/**
 * @param {?proto.isuxportal.proto.resources.Team.TeamDetail|undefined} value
 * @return {!proto.isuxportal.proto.resources.Team} returns this
*/
proto.isuxportal.proto.resources.Team.prototype.setDetail = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.isuxportal.proto.resources.Team} returns this
 */
proto.isuxportal.proto.resources.Team.prototype.clearDetail = function() {
  return this.setDetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.isuxportal.proto.resources.Team.prototype.hasDetail = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Contestant leader = 16;
 * @return {?proto.isuxportal.proto.resources.Contestant}
 */
proto.isuxportal.proto.resources.Team.prototype.getLeader = function() {
  return /** @type{?proto.isuxportal.proto.resources.Contestant} */ (
    jspb.Message.getWrapperField(this, isuxportal_resources_contestant_pb.Contestant, 16));
};


/**
 * @param {?proto.isuxportal.proto.resources.Contestant|undefined} value
 * @return {!proto.isuxportal.proto.resources.Team} returns this
*/
proto.isuxportal.proto.resources.Team.prototype.setLeader = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.isuxportal.proto.resources.Team} returns this
 */
proto.isuxportal.proto.resources.Team.prototype.clearLeader = function() {
  return this.setLeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.isuxportal.proto.resources.Team.prototype.hasLeader = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * repeated Contestant members = 17;
 * @return {!Array<!proto.isuxportal.proto.resources.Contestant>}
 */
proto.isuxportal.proto.resources.Team.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.isuxportal.proto.resources.Contestant>} */ (
    jspb.Message.getRepeatedWrapperField(this, isuxportal_resources_contestant_pb.Contestant, 17));
};


/**
 * @param {!Array<!proto.isuxportal.proto.resources.Contestant>} value
 * @return {!proto.isuxportal.proto.resources.Team} returns this
*/
proto.isuxportal.proto.resources.Team.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.isuxportal.proto.resources.Contestant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.isuxportal.proto.resources.Contestant}
 */
proto.isuxportal.proto.resources.Team.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.isuxportal.proto.resources.Contestant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.isuxportal.proto.resources.Team} returns this
 */
proto.isuxportal.proto.resources.Team.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};


goog.object.extend(exports, proto.isuxportal.proto.resources);