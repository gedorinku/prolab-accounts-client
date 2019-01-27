/**
 * @fileoverview gRPC-Web generated client stub for com.github.ProgrammingLab.prolab_accounts.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';
import {
  CreateSessionRequest,
  DeleteSessionRequest,
  GetSessionRequest,
  Session,
  Empty} from './sessions_pb';

export class SessionServiceClient {
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

  methodInfoGetSession = new grpcWeb.AbstractClientBase.MethodInfo(
    Session,
    (request: GetSessionRequest) => {
      return request.serializeBinary();
    },
    Session.deserializeBinary
  );

  getSession(
    request: GetSessionRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Session) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/com.github.ProgrammingLab.prolab_accounts.api.SessionService/GetSession',
      request,
      metadata,
      this.methodInfoGetSession,
      callback);
  }

  methodInfoCreateSession = new grpcWeb.AbstractClientBase.MethodInfo(
    Session,
    (request: CreateSessionRequest) => {
      return request.serializeBinary();
    },
    Session.deserializeBinary
  );

  createSession(
    request: CreateSessionRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Session) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/com.github.ProgrammingLab.prolab_accounts.api.SessionService/CreateSession',
      request,
      metadata,
      this.methodInfoCreateSession,
      callback);
  }

  methodInfoDeleteSession = new grpcWeb.AbstractClientBase.MethodInfo(
    Empty,
    (request: DeleteSessionRequest) => {
      return request.serializeBinary();
    },
    Empty.deserializeBinary
  );

  deleteSession(
    request: DeleteSessionRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/com.github.ProgrammingLab.prolab_accounts.api.SessionService/DeleteSession',
      request,
      metadata,
      this.methodInfoDeleteSession,
      callback);
  }

}

