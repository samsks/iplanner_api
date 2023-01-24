interface IUserReq {
  email: string;
  name: string;
  password: string;
  birthDate: Date;
  profileImg?: string;
}

interface IUserRes {
  id?: string;
  email?: string;
  name?: string;
  birthDate?: Date;
  profileImg?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IUserReqUpdate {
  name?: string;
  email?: string;
  password?: string;
  birthDate?: Date;
  profileImg?: string;
}

interface IUserAdmRes {
  email?: string;
  name?: string;
  isAdm?: boolean;
  isActive?: boolean;
  birthDate?: Date;
  profileImg?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export { IUserReq, IUserRes, IUserReqUpdate, IUserAdmRes };
