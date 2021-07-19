import { LOGIN } from "./types";

export const login = (user) => {
  return {
    type: LOGIN,
    user: user,
  };
};
