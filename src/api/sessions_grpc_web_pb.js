/**
 * @fileoverview gRPC-Web generated client stub for com.github.ProgrammingLab.prolab_accounts.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.com = {};
proto.com.github = {};
proto.com.github.ProgrammingLab = {};
proto.com.github.ProgrammingLab.prolab_accounts = {};
proto.com.github.ProgrammingLab.prolab_accounts.api = require('./sessions_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.SessionServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.SessionServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.com.github.ProgrammingLab.prolab_accounts.api.SessionServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.com.github.ProgrammingLab.prolab_accounts.api.SessionServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.github.ProgrammingLab.prolab_accounts.api.GetSessionRequest,
 *   !proto.com.github.ProgrammingLab.prolab_accounts.api.Session>}
 */
const methodInfo_SessionService_GetSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.github.ProgrammingLab.prolab_accounts.api.Session,
  /** @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.GetSessionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.github.ProgrammingLab.prolab_accounts.api.Session.deserializeBinary
);


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.GetSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.github.ProgrammingLab.prolab_accounts.api.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.github.ProgrammingLab.prolab_accounts.api.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.SessionServiceClient.prototype.getSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.github.ProgrammingLab.prolab_accounts.api.SessionService/GetSession',
      request,
      metadata,
      methodInfo_SessionService_GetSession,
      callback);
};


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.GetSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.github.ProgrammingLab.prolab_accounts.api.Session>}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.SessionServicePromiseClient.prototype.getSession =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getSession(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.github.ProgrammingLab.prolab_accounts.api.CreateSessionRequest,
 *   !proto.com.github.ProgrammingLab.prolab_accounts.api.Session>}
 */
const methodInfo_SessionService_CreateSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.github.ProgrammingLab.prolab_accounts.api.Session,
  /** @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.CreateSessionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.github.ProgrammingLab.prolab_accounts.api.Session.deserializeBinary
);


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.CreateSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.github.ProgrammingLab.prolab_accounts.api.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.github.ProgrammingLab.prolab_accounts.api.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.SessionServiceClient.prototype.createSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.github.ProgrammingLab.prolab_accounts.api.SessionService/CreateSession',
      request,
      metadata,
      methodInfo_SessionService_CreateSession,
      callback);
};


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.CreateSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.github.ProgrammingLab.prolab_accounts.api.Session>}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.SessionServicePromiseClient.prototype.createSession =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createSession(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.github.ProgrammingLab.prolab_accounts.api.DeleteSessionRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_SessionService_DeleteSession = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.DeleteSessionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.DeleteSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.SessionServiceClient.prototype.deleteSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.github.ProgrammingLab.prolab_accounts.api.SessionService/DeleteSession',
      request,
      metadata,
      methodInfo_SessionService_DeleteSession,
      callback);
};


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.DeleteSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.SessionServicePromiseClient.prototype.deleteSession =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteSession(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.com.github.ProgrammingLab.prolab_accounts.api;

