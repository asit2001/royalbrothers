import axios, { isAxiosError } from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API;

interface User {
  name: string;
  email: string;
  number: string;
  password: string;
}

export async function signUp(obj: User) {
  try {
    const res = await axios.post("/api/user/signup",obj);
    return res.data;
  } catch (error) {
    console.log(error);
    
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.error);
    }
    throw error;
  }
}
export async function login(obj: Omit<User,"email"|"name">) {
  try {
    const res = await axios.post("/api/user/login",obj);
    return res.data;
} catch (error) {
      console.log(error);
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.error);
    }
    throw error;
  }
}
export async function logout() {
  try {
    const res = await axios.delete("/api/user/logout",{
        withCredentials:true
    });
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.error);
    }
    throw error;
  }
}
