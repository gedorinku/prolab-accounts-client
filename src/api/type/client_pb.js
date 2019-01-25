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

goog.exportSymbol('proto.programming_lab.prolab_accounts.type.Client', null, global);

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
proto.programming_lab.prolab_accounts.type.Client = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.programming_lab.prolab_accounts.type.Client.repeatedFields_, null);
};
goog.inherits(proto.programming_lab.prolab_accounts.type.Client, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.programming_lab.prolab_accounts.type.Client.displayName = 'proto.programming_lab.prolab_accounts.type.Client';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.programming_lab.prolab_accounts.type.Client.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.programming_lab.prolab_accounts.type.Client.prototype.toObject = function(opt_includeInstance) {
  return proto.programming_lab.prolab_accounts.type.Client.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.programming_lab.prolab_accounts.type.Client} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.programming_lab.prolab_accounts.type.Client.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uri: jspb.Message.getFieldWithDefault(msg, 3, ""),
    contactsList: jspb.Message.getRepeatedField(msg, 4),
    logoUri: jspb.Message.getFieldWithDefault(msg, 5, ""),
    owner: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.programming_lab.prolab_accounts.type.Client}
 */
proto.programming_lab.prolab_accounts.type.Client.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.programming_lab.prolab_accounts.type.Client;
  return proto.programming_lab.prolab_accounts.type.Client.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.programming_lab.prolab_accounts.type.Client} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.programming_lab.prolab_accounts.type.Client}
 */
proto.programming_lab.prolab_accounts.type.Client.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addContacts(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogoUri(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
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
proto.programming_lab.prolab_accounts.type.Client.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.programming_lab.prolab_accounts.type.Client.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.programming_lab.prolab_accounts.type.Client} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.programming_lab.prolab_accounts.type.Client.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContactsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getLogoUri();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.programming_lab.prolab_accounts.type.Client.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.programming_lab.prolab_accounts.type.Client.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.programming_lab.prolab_accounts.type.Client.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.programming_lab.prolab_accounts.type.Client.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uri = 3;
 * @return {string}
 */
proto.programming_lab.prolab_accounts.type.Client.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.programming_lab.prolab_accounts.type.Client.prototype.setUri = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string contacts = 4;
 * @return {!Array<string>}
 */
proto.programming_lab.prolab_accounts.type.Client.prototype.getContactsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.programming_lab.prolab_accounts.type.Client.prototype.setContactsList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.programming_lab.prolab_accounts.type.Client.prototype.addContacts = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.programming_lab.prolab_accounts.type.Client.prototype.clearContactsList = function() {
  this.setContactsList([]);
};


/**
 * optional string logo_uri = 5;
 * @return {string}
 */
proto.programming_lab.prolab_accounts.type.Client.prototype.getLogoUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.programming_lab.prolab_accounts.type.Client.prototype.setLogoUri = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string owner = 6;
 * @return {string}
 */
proto.programming_lab.prolab_accounts.type.Client.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.programming_lab.prolab_accounts.type.Client.prototype.setOwner = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto.programming_lab.prolab_accounts.type);
