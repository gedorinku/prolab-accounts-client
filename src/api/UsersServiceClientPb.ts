/**
 * @fileoverview gRPC-Web generated client stub for com.github.ProgrammingLab.prolab_accounts.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';
import {
  CreateUserRequest,
  GetCurrentUserRequest,
  GetUserRequest,
  ListUsersRequest,
  ListUsersResponse,
  UpdatePasswordRequest,
  UpdateUserRequest,
  User,
  Empty} from './users_pb';

export class UserServiceClient {
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

  methodInfoListUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    ListUsersResponse,
    (request: ListUsersRequest) => {
      return request.serializeBinary();
    },
    ListUsersResponse.deserializeBinary
  );

  listUsers(
    request: ListUsersRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ListUsersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/com.github.ProgrammingLab.prolab_accounts.api.UserService/ListUsers',
      request,
      metadata,
      this.methodInfoListUsers,
      callback);
  }

  methodInfoGetUser = new grpcWeb.AbstractClientBase.MethodInfo(
    User,
    (request: GetUserRequest) => {
      return request.serializeBinary();
    },
    User.deserializeBinary
  );

  getUser(
    request: GetUserRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: User) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/com.github.ProgrammingLab.prolab_accounts.api.UserService/GetUser',
      request,
      metadata,
      this.methodInfoGetUser,
      callback);
  }

  methodInfoCreateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    User,
    (request: CreateUserRequest) => {
      return request.serializeBinary();
    },
    User.deserializeBinary
  );

  createUser(
    request: CreateUserRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: User) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/com.github.ProgrammingLab.prolab_accounts.api.UserService/CreateUser',
      request,
      metadata,
      this.methodInfoCreateUser,
      callback);
  }

  methodInfoGetCurrentUser = new grpcWeb.AbstractClientBase.MethodInfo(
    User,
    (request: GetCurrentUserRequest) => {
      return request.serializeBinary();
    },
    User.deserializeBinary
  );

  getCurrentUser(
    request: GetCurrentUserRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: User) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/com.github.ProgrammingLab.prolab_accounts.api.UserService/GetCurrentUser',
      request,
      metadata,
      this.methodInfoGetCurrentUser,
      callback);
  }

  methodInfoUpdateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    User,
    (request: UpdateUserRequest) => {
      return request.serializeBinary();
    },
    User.deserializeBinary
  );

  updateUser(
    request: UpdateUserRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: User) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/com.github.ProgrammingLab.prolab_accounts.api.UserService/UpdateUser',
      request,
      metadata,
      this.methodInfoUpdateUser,
      callback);
  }

  methodInfoUpdatePassword = new grpcWeb.AbstractClientBase.MethodInfo(
    Empty,
    (request: UpdatePasswordRequest) => {
      return request.serializeBinary();
    },
    Empty.deserializeBinary
  );

  updatePassword(
    request: UpdatePasswordRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/com.github.ProgrammingLab.prolab_accounts.api.UserService/UpdatePassword',
      request,
      metadata,
      this.methodInfoUpdatePassword,
      callback);
  }

}

