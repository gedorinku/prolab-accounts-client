export class CreateSessionRequest {
  constructor ();
  getName(): string;
  setName(a: string): void;
  getPassword(): string;
  setPassword(a: string): void;
  toObject(): CreateSessionRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateSessionRequest;
}

export namespace CreateSessionRequest {
  export type AsObject = {
    Name: string;
    Password: string;
  }
}

export class DeleteSessionRequest {
  constructor ();
  toObject(): DeleteSessionRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteSessionRequest;
}

export namespace DeleteSessionRequest {
  export type AsObject = {
  }
}

export class GetSessionRequest {
  constructor ();
  toObject(): GetSessionRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetSessionRequest;
}

export namespace GetSessionRequest {
  export type AsObject = {
  }
}

export class Session {
  constructor ();
  getSessionId(): string;
  setSessionId(a: string): void;
  toObject(): Session.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Session;
}

export namespace Session {
  export type AsObject = {
    SessionId: string;
  }
}

export class Empty {
  constructor ();
  toObject(): Empty.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

