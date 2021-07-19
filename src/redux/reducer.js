import { LOGIN } from "./types";
let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

const authentiCation = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        loggedIn: true,
        user: action.user,
      };

    default:
      return state;
  }
};
export default authentiCation;
