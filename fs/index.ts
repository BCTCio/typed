enum EGender {
  MALE,
  FEMALE,
}

export interface IStudent {
  isActive: boolean;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  discordId?: string;
  location?: string;
  personalWebsite?: string;
  hobbies?: string;
  githubName?: string;
  about?: string;
  username?: string;
  dob?: Date;
  gender?: EGender;
  avatar?: string;
  studentId: string;
  liked_users: string[];
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

export interface IClass {
  _id: string;
  teachers: [string];
  students: [string];
  title: string;
  templateId: string;
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
  days: [number];
  cohort: number;
  classLength: number;
  assetFileType: string;
  zoomId: string;
  zoomLink: string;
  zoomPassword: string;
  ongoing: boolean;
  teacherName: string;
  formatEndDate: string;
  formatStartDate: string;
  _v?: number;
}

export interface IAnnouncements {
  announcements: {
    _id: string;
    title: string;
    description: string;
    announcer: string;
    date: Date;
  }[];
  currentPage: number;
  totalAnnouncements: number;
}

export interface IHomework {
  attachment?: FileList;
  content?: string;
  studentId: string;
  classId: string;
  classIndex: string;
}
