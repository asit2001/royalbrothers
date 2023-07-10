import { ObjectId } from "mongoose";

export interface User {
  name: string;
  email: string;
  password: string;
  number: string;
    
}
export interface decodeJWT {
  exp: number;
  iat: number;
  key: string;
  name: string;
  user_id: string;
  email: string;
}
