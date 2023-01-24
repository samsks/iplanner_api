interface ISession {
  email: string;
  password: string;
}

interface ISessionRes {
  token?: string;
}

export { ISession, ISessionRes };
