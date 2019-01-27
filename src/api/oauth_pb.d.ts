export class OAuthConsentRequest {
  constructor ();
  getConsentChallenge(): string;
  setConsentChallenge(a: string): void;
  getAccept(): boolean;
  setAccept(a: boolean): void;
  getGrantScopesList(): string[];
  setGrantScopesList(a: string[]): void;
  getRemember(): boolean;
  setRemember(a: boolean): void;
  toObject(): OAuthConsentRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => OAuthConsentRequest;
}

export namespace OAuthConsentRequest {
  export type AsObject = {
    ConsentChallenge: string;
    Accept: boolean;
    GrantScopesList: string[];
    Remember: boolean;
  }
}

export class OAuthConsentResponse {
  constructor ();
  getRedirectUrl(): string;
  setRedirectUrl(a: string): void;
  toObject(): OAuthConsentResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => OAuthConsentResponse;
}

export namespace OAuthConsentResponse {
  export type AsObject = {
    RedirectUrl: string;
  }
}

export class OAuthLoginRequest {
  constructor ();
  getLoginChallenge(): string;
  setLoginChallenge(a: string): void;
  getName(): string;
  setName(a: string): void;
  getPassword(): string;
  setPassword(a: string): void;
  getRemember(): boolean;
  setRemember(a: boolean): void;
  toObject(): OAuthLoginRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => OAuthLoginRequest;
}

export namespace OAuthLoginRequest {
  export type AsObject = {
    LoginChallenge: string;
    Name: string;
    Password: string;
    Remember: boolean;
  }
}

export class OAuthLoginResponse {
  constructor ();
  getRedirectUrl(): string;
  setRedirectUrl(a: string): void;
  toObject(): OAuthLoginResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => OAuthLoginResponse;
}

export namespace OAuthLoginResponse {
  export type AsObject = {
    RedirectUrl: string;
  }
}

export class StartOAuthConsentRequest {
  constructor ();
  getConsentChallenge(): string;
  setConsentChallenge(a: string): void;
  toObject(): StartOAuthConsentRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => StartOAuthConsentRequest;
}

export namespace StartOAuthConsentRequest {
  export type AsObject = {
    ConsentChallenge: string;
  }
}

export class StartOAuthConsentResponse {
  constructor ();
  getSkip(): boolean;
  setSkip(a: boolean): void;
  getRedirectUrl(): string;
  setRedirectUrl(a: string): void;
  getRequestedScopesList(): string[];
  setRequestedScopesList(a: string[]): void;
  getClient(): Client;
  setClient(a: Client): void;
  toObject(): StartOAuthConsentResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => StartOAuthConsentResponse;
}

export namespace StartOAuthConsentResponse {
  export type AsObject = {
    Skip: boolean;
    RedirectUrl: string;
    RequestedScopesList: string[];
    Client: Client;
  }
}

export class StartOAuthLoginRequest {
  constructor ();
  getLoginChallenge(): string;
  setLoginChallenge(a: string): void;
  toObject(): StartOAuthLoginRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => StartOAuthLoginRequest;
}

export namespace StartOAuthLoginRequest {
  export type AsObject = {
    LoginChallenge: string;
  }
}

export class StartOAuthLoginResponse {
  constructor ();
  getSkip(): boolean;
  setSkip(a: boolean): void;
  getRedirectUrl(): string;
  setRedirectUrl(a: string): void;
  toObject(): StartOAuthLoginResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => StartOAuthLoginResponse;
}

export namespace StartOAuthLoginResponse {
  export type AsObject = {
    Skip: boolean;
    RedirectUrl: string;
  }
}

export class Client {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getName(): string;
  setName(a: string): void;
  getUri(): string;
  setUri(a: string): void;
  getContactsList(): string[];
  setContactsList(a: string[]): void;
  getLogoUri(): string;
  setLogoUri(a: string): void;
  getOwner(): string;
  setOwner(a: string): void;
  toObject(): Client.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Client;
}

export namespace Client {
  export type AsObject = {
    Id: string;
    Name: string;
    Uri: string;
    ContactsList: string[];
    LogoUri: string;
    Owner: string;
  }
}

