export interface UserId {
  themes: string[];
  posts: string[];
  _id: string;
  tel: string;
  email: string;
  username: string;
  password: string;
  created_at: string;
  updatedAt: string;
  __v: number;
}

export interface User {
  email: string;
  firstName: string;
  //   phoneNumber: string;
  //   password: string;
}
