export interface IStudent {
  isActive: boolean;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  studentId: string;
  _id: string;
}

export interface ITeacher {
  name: string;
  password: string;
  description: string;
  email: string;
  _id: string;
  phone: string;
  wechat: string;
  avatar: string;
}

export interface ThirdPartyInfo {
  provider: string;
  id: string;
}
