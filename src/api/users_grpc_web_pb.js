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
proto.com.github.ProgrammingLab.prolab_accounts.api = require('./users_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.UserServiceClient =
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
proto.com.github.ProgrammingLab.prolab_accounts.api.UserServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.com.github.ProgrammingLab.prolab_accounts.api.UserServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.com.github.ProgrammingLab.prolab_accounts.api.UserServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.github.ProgrammingLab.prolab_accounts.api.ListUsersRequest,
 *   !proto.com.github.ProgrammingLab.prolab_accounts.api.ListUsersResponse>}
 */
const methodInfo_UserService_ListUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.github.ProgrammingLab.prolab_accounts.api.ListUsersResponse,
  /** @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.ListUsersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.github.ProgrammingLab.prolab_accounts.api.ListUsersResponse.deserializeBinary
);


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.ListUsersRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.github.ProgrammingLab.prolab_accounts.api.ListUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.github.ProgrammingLab.prolab_accounts.api.ListUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.UserServiceClient.prototype.listUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.github.ProgrammingLab.prolab_accounts.api.UserService/ListUsers',
      request,
      metadata,
      methodInfo_UserService_ListUsers,
      callback);
};


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.ListUsersRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.github.ProgrammingLab.prolab_accounts.api.ListUsersResponse>}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.UserServicePromiseClient.prototype.listUsers =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listUsers(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.github.ProgrammingLab.prolab_accounts.api.GetUserRequest,
 *   !proto.com.github.ProgrammingLab.prolab_accounts.api.User>}
 */
const methodInfo_UserService_GetUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.github.ProgrammingLab.prolab_accounts.api.User,
  /** @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.GetUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.github.ProgrammingLab.prolab_accounts.api.User.deserializeBinary
);


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.GetUserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.github.ProgrammingLab.prolab_accounts.api.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.github.ProgrammingLab.prolab_accounts.api.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.UserServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.github.ProgrammingLab.prolab_accounts.api.UserService/GetUser',
      request,
      metadata,
      methodInfo_UserService_GetUser,
      callback);
};


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.GetUserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.github.ProgrammingLab.prolab_accounts.api.User>}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.UserServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getUser(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.github.ProgrammingLab.prolab_accounts.api.CreateUserRequest,
 *   !proto.com.github.ProgrammingLab.prolab_accounts.api.User>}
 */
const methodInfo_UserService_CreateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.github.ProgrammingLab.prolab_accounts.api.User,
  /** @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.CreateUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.github.ProgrammingLab.prolab_accounts.api.User.deserializeBinary
);


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.CreateUserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.github.ProgrammingLab.prolab_accounts.api.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.github.ProgrammingLab.prolab_accounts.api.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.UserServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.github.ProgrammingLab.prolab_accounts.api.UserService/CreateUser',
      request,
      metadata,
      methodInfo_UserService_CreateUser,
      callback);
};


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.CreateUserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.github.ProgrammingLab.prolab_accounts.api.User>}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.UserServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createUser(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.github.ProgrammingLab.prolab_accounts.api.GetCurrentUserRequest,
 *   !proto.com.github.ProgrammingLab.prolab_accounts.api.User>}
 */
const methodInfo_UserService_GetCurrentUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.github.ProgrammingLab.prolab_accounts.api.User,
  /** @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.GetCurrentUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.github.ProgrammingLab.prolab_accounts.api.User.deserializeBinary
);


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.GetCurrentUserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.github.ProgrammingLab.prolab_accounts.api.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.github.ProgrammingLab.prolab_accounts.api.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.UserServiceClient.prototype.getCurrentUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.github.ProgrammingLab.prolab_accounts.api.UserService/GetCurrentUser',
      request,
      metadata,
      methodInfo_UserService_GetCurrentUser,
      callback);
};


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.GetCurrentUserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.github.ProgrammingLab.prolab_accounts.api.User>}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.UserServicePromiseClient.prototype.getCurrentUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getCurrentUser(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.github.ProgrammingLab.prolab_accounts.api.UpdateUserRequest,
 *   !proto.com.github.ProgrammingLab.prolab_accounts.api.User>}
 */
const methodInfo_UserService_UpdateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.github.ProgrammingLab.prolab_accounts.api.User,
  /** @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.UpdateUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.github.ProgrammingLab.prolab_accounts.api.User.deserializeBinary
);


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.UpdateUserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.github.ProgrammingLab.prolab_accounts.api.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.github.ProgrammingLab.prolab_accounts.api.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.UserServiceClient.prototype.updateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.github.ProgrammingLab.prolab_accounts.api.UserService/UpdateUser',
      request,
      metadata,
      methodInfo_UserService_UpdateUser,
      callback);
};


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.UpdateUserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.github.ProgrammingLab.prolab_accounts.api.User>}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.UserServicePromiseClient.prototype.updateUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateUser(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.github.ProgrammingLab.prolab_accounts.api.UpdatePasswordRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_UpdatePassword = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.UpdatePasswordRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.UpdatePasswordRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.UserServiceClient.prototype.updatePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.github.ProgrammingLab.prolab_accounts.api.UserService/UpdatePassword',
      request,
      metadata,
      methodInfo_UserService_UpdatePassword,
      callback);
};


/**
 * @param {!proto.com.github.ProgrammingLab.prolab_accounts.api.UpdatePasswordRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.com.github.ProgrammingLab.prolab_accounts.api.UserServicePromiseClient.prototype.updatePassword =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updatePassword(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.com.github.ProgrammingLab.prolab_accounts.api;

