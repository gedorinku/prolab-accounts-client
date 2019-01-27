export class CreateUserRequest {
  constructor ();
  getUser(): User;
  setUser(a: User): void;
  getRegisterationToken(): string;
  setRegisterationToken(a: string): void;
  toObject(): CreateUserRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    User: User;
    RegisterationToken: string;
  }
}

export class GetCurrentUserRequest {
  constructor ();
  toObject(): GetCurrentUserRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetCurrentUserRequest;
}

export namespace GetCurrentUserRequest {
  export type AsObject = {
  }
}

export class GetUserRequest {
  constructor ();
  getUserId(): number;
  setUserId(a: number): void;
  toObject(): GetUserRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    UserId: number;
  }
}

export class ListUsersRequest {
  constructor ();
  getPageToken(): number;
  setPageToken(a: number): void;
  getPageSize(): number;
  setPageSize(a: number): void;
  toObject(): ListUsersRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListUsersRequest;
}

export namespace ListUsersRequest {
  export type AsObject = {
    PageToken: number;
    PageSize: number;
  }
}

export class ListUsersResponse {
  constructor ();
  getUsersList(): User[];
  setUsersList(a: User[]): void;
  getNextPageToken(): number;
  setNextPageToken(a: number): void;
  toObject(): ListUsersResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListUsersResponse;
}

export namespace ListUsersResponse {
  export type AsObject = {
    UsersList: User[];
    NextPageToken: number;
  }
}

export class UpdatePasswordRequest {
  constructor ();
  getPassword(): string;
  setPassword(a: string): void;
  getNewPassword(): string;
  setNewPassword(a: string): void;
  getNewPasswordRepeat(): string;
  setNewPasswordRepeat(a: string): void;
  toObject(): UpdatePasswordRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UpdatePasswordRequest;
}

export namespace UpdatePasswordRequest {
  export type AsObject = {
    Password: string;
    NewPassword: string;
    NewPasswordRepeat: string;
  }
}

export class UpdateUserRequest {
  constructor ();
  getUser(): User;
  setUser(a: User): void;
  toObject(): UpdateUserRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    User: User;
  }
}

export class User {
  constructor ();
  getUserId(): number;
  setUserId(a: number): void;
  getName(): string;
  setName(a: string): void;
  getEmail(): string;
  setEmail(a: string): void;
  getFullName(): string;
  setFullName(a: string): void;
  getAvatarUrl(): string;
  setAvatarUrl(a: string): void;
  getDescription(): string;
  setDescription(a: string): void;
  getGrade(): number;
  setGrade(a: number): void;
  getLeft(): boolean;
  setLeft(a: boolean): void;
  getDepartment(): string;
  setDepartment(a: string): void;
  getShortDepartment(): string;
  setShortDepartment(a: string): void;
  getRole(): string;
  setRole(a: string): void;
  getTwitterScreenName(): string;
  setTwitterScreenName(a: string): void;
  getGithubUserName(): string;
  setGithubUserName(a: string): void;
  toObject(): User.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => User;
}

export namespace User {
  export type AsObject = {
    UserId: number;
    Name: string;
    Email: string;
    FullName: string;
    AvatarUrl: string;
    Description: string;
    Grade: number;
    Left: boolean;
    Department: string;
    ShortDepartment: string;
    Role: string;
    TwitterScreenName: string;
    GithubUserName: string;
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

