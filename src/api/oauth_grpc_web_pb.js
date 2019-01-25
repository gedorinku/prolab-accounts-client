/**
 * @fileoverview gRPC-Web generated client stub for programming_lab.prolab_accounts
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var type_client_pb = require('./type/client_pb.js')
const proto = {};
proto.programming_lab = {};
proto.programming_lab.prolab_accounts = require('./oauth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.programming_lab.prolab_accounts.OAuthServiceClient =
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
proto.programming_lab.prolab_accounts.OAuthServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.programming_lab.prolab_accounts.OAuthServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.programming_lab.prolab_accounts.OAuthServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.programming_lab.prolab_accounts.StartOAuthLoginRequest,
 *   !proto.programming_lab.prolab_accounts.StartOAuthLoginResponse>}
 */
const methodInfo_OAuthService_StartOAuthLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.programming_lab.prolab_accounts.StartOAuthLoginResponse,
  /** @param {!proto.programming_lab.prolab_accounts.StartOAuthLoginRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.programming_lab.prolab_accounts.StartOAuthLoginResponse.deserializeBinary
);


/**
 * @param {!proto.programming_lab.prolab_accounts.StartOAuthLoginRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.programming_lab.prolab_accounts.StartOAuthLoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.programming_lab.prolab_accounts.StartOAuthLoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.programming_lab.prolab_accounts.OAuthServiceClient.prototype.startOAuthLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/programming_lab.prolab_accounts.OAuthService/StartOAuthLogin',
      request,
      metadata,
      methodInfo_OAuthService_StartOAuthLogin,
      callback);
};


/**
 * @param {!proto.programming_lab.prolab_accounts.StartOAuthLoginRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.programming_lab.prolab_accounts.StartOAuthLoginResponse>}
 *     The XHR Node Readable Stream
 */
proto.programming_lab.prolab_accounts.OAuthServicePromiseClient.prototype.startOAuthLogin =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.startOAuthLogin(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.programming_lab.prolab_accounts.OAuthLoginRequest,
 *   !proto.programming_lab.prolab_accounts.OAuthLoginResponse>}
 */
const methodInfo_OAuthService_OAuthLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.programming_lab.prolab_accounts.OAuthLoginResponse,
  /** @param {!proto.programming_lab.prolab_accounts.OAuthLoginRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.programming_lab.prolab_accounts.OAuthLoginResponse.deserializeBinary
);


/**
 * @param {!proto.programming_lab.prolab_accounts.OAuthLoginRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.programming_lab.prolab_accounts.OAuthLoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.programming_lab.prolab_accounts.OAuthLoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.programming_lab.prolab_accounts.OAuthServiceClient.prototype.oAuthLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/programming_lab.prolab_accounts.OAuthService/OAuthLogin',
      request,
      metadata,
      methodInfo_OAuthService_OAuthLogin,
      callback);
};


/**
 * @param {!proto.programming_lab.prolab_accounts.OAuthLoginRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.programming_lab.prolab_accounts.OAuthLoginResponse>}
 *     The XHR Node Readable Stream
 */
proto.programming_lab.prolab_accounts.OAuthServicePromiseClient.prototype.oAuthLogin =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.oAuthLogin(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.programming_lab.prolab_accounts.StartOAuthConsentRequest,
 *   !proto.programming_lab.prolab_accounts.StartOAuthConsentResponse>}
 */
const methodInfo_OAuthService_StartOAuthConsent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.programming_lab.prolab_accounts.StartOAuthConsentResponse,
  /** @param {!proto.programming_lab.prolab_accounts.StartOAuthConsentRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.programming_lab.prolab_accounts.StartOAuthConsentResponse.deserializeBinary
);


/**
 * @param {!proto.programming_lab.prolab_accounts.StartOAuthConsentRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.programming_lab.prolab_accounts.StartOAuthConsentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.programming_lab.prolab_accounts.StartOAuthConsentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.programming_lab.prolab_accounts.OAuthServiceClient.prototype.startOAuthConsent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/programming_lab.prolab_accounts.OAuthService/StartOAuthConsent',
      request,
      metadata,
      methodInfo_OAuthService_StartOAuthConsent,
      callback);
};


/**
 * @param {!proto.programming_lab.prolab_accounts.StartOAuthConsentRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.programming_lab.prolab_accounts.StartOAuthConsentResponse>}
 *     The XHR Node Readable Stream
 */
proto.programming_lab.prolab_accounts.OAuthServicePromiseClient.prototype.startOAuthConsent =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.startOAuthConsent(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.programming_lab.prolab_accounts.OAuthConsentRequest,
 *   !proto.programming_lab.prolab_accounts.OAuthConsentResponse>}
 */
const methodInfo_OAuthService_OAuthConsent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.programming_lab.prolab_accounts.OAuthConsentResponse,
  /** @param {!proto.programming_lab.prolab_accounts.OAuthConsentRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.programming_lab.prolab_accounts.OAuthConsentResponse.deserializeBinary
);


/**
 * @param {!proto.programming_lab.prolab_accounts.OAuthConsentRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.programming_lab.prolab_accounts.OAuthConsentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.programming_lab.prolab_accounts.OAuthConsentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.programming_lab.prolab_accounts.OAuthServiceClient.prototype.oAuthConsent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/programming_lab.prolab_accounts.OAuthService/OAuthConsent',
      request,
      metadata,
      methodInfo_OAuthService_OAuthConsent,
      callback);
};


/**
 * @param {!proto.programming_lab.prolab_accounts.OAuthConsentRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.programming_lab.prolab_accounts.OAuthConsentResponse>}
 *     The XHR Node Readable Stream
 */
proto.programming_lab.prolab_accounts.OAuthServicePromiseClient.prototype.oAuthConsent =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.oAuthConsent(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.programming_lab.prolab_accounts;

