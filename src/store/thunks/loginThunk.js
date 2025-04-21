import { updataAuthData } from "../slices/authSlice";

export const loginThunk =
  ({ username, password }) =>
  async (dispatch) => {
    return new Promise((resolve, reject) => {
      if (password === "1234" && username === "admin") {
        dispatch(updataAuthData({ isAuth: true }));
        resolve("success");
      } else {
        dispatch(updataAuthData({ isAuth: false }));
        reject("incorrect");
      }
    });
  };
