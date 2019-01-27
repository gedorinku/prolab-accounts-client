/**
 * @fileoverview gRPC-Web generated client stub for programming_lab.prolab_accounts
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';
import {
  OAuthConsentRequest,
  OAuthConsentResponse,
  OAuthLoginRequest,
  OAuthLoginResponse,
  StartOAuthConsentRequest,
  StartOAuthConsentResponse,
  StartOAuthLoginRequest,
  StartOAuthLoginResponse,
  Client} from './oauth_pb';

export class OAuthServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoStartOAuthLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    StartOAuthLoginResponse,
    (request: StartOAuthLoginRequest) => {
      return request.serializeBinary();
    },
    StartOAuthLoginResponse.deserializeBinary
  );

  startOAuthLogin(
    request: StartOAuthLoginRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: StartOAuthLoginResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/programming_lab.prolab_accounts.OAuthService/StartOAuthLogin',
      request,
      metadata,
      this.methodInfoStartOAuthLogin,
      callback);
  }

  methodInfoOAuthLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    OAuthLoginResponse,
    (request: OAuthLoginRequest) => {
      return request.serializeBinary();
    },
    OAuthLoginResponse.deserializeBinary
  );

  oAuthLogin(
    request: OAuthLoginRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: OAuthLoginResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/programming_lab.prolab_accounts.OAuthService/OAuthLogin',
      request,
      metadata,
      this.methodInfoOAuthLogin,
      callback);
  }

  methodInfoStartOAuthConsent = new grpcWeb.AbstractClientBase.MethodInfo(
    StartOAuthConsentResponse,
    (request: StartOAuthConsentRequest) => {
      return request.serializeBinary();
    },
    StartOAuthConsentResponse.deserializeBinary
  );

  startOAuthConsent(
    request: StartOAuthConsentRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: StartOAuthConsentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/programming_lab.prolab_accounts.OAuthService/StartOAuthConsent',
      request,
      metadata,
      this.methodInfoStartOAuthConsent,
      callback);
  }

  methodInfoOAuthConsent = new grpcWeb.AbstractClientBase.MethodInfo(
    OAuthConsentResponse,
    (request: OAuthConsentRequest) => {
      return request.serializeBinary();
    },
    OAuthConsentResponse.deserializeBinary
  );

  oAuthConsent(
    request: OAuthConsentRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: OAuthConsentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/programming_lab.prolab_accounts.OAuthService/OAuthConsent',
      request,
      metadata,
      this.methodInfoOAuthConsent,
      callback);
  }

}

