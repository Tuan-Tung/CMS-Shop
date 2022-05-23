
export const authReducer = (state = initalHobby, action) => {
    const { type, res } = action;

  switch (action.type) {
    case "login": {
      localStorage.setItem('token',  JSON.stringify(res));
      return {
        ...state,
        userInfo: res.result,
      };
    }
    case "logout": {
        localStorage.removeItem("token");
        return {
          ...state,
          userInfo: {},
        };
      }

    default:
      return state;
  }
};
