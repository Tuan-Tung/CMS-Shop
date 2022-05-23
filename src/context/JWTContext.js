import React, { useReducer } from "react";
import { authReducer } from "./useReduceCT";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  
  let USER_INFO = null;
  if (typeof window !== 'undefined') {
    USER_INFO = JSON.parse(localStorage.getItem("token"))
} 
  const [state, dispatch] = useReducer(authReducer, {userInfo: USER_INFO});
  
  // // checks if the user is authenticated or not
  const isUserAuthenticated = () => {
    
    if (!state.userInfo) {
      dispatch({ type: "logout" });
    }
  };

  return (
    <Provider
      value={{state,dispatch,isUserAuthenticated}}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };

