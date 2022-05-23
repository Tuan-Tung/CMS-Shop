import { useContext } from "react";
import { useAuthApi } from "src/service/api-app/authApi";
//
import { AuthContext } from "../context/JWTContext";

// ----------------------------------------------------------------------

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);
  const login = async (data) => {
    const res = await useAuthApi.login(data);
    console.log(res);
    dispatch({ type: "login", res });
  };
  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "logout" });

    router.push("/login");
  };
  // ...  còn một số thức khác
  const isAuthenticated = () => {
    return state.expiresAt && new Date().getTime() < state.expiresAt;
  };
  // ...  còn một số thức khác
  return {
    isAuthenticated,
    userInfo: state?.userInfo,
    // userId: state ? state : null,
    login,
    logout,
  };
};
