const { default: BaseInstance } = require("../BaseApiClients");

const login = (param) => BaseInstance.post("/user/login", param);

const useAuthApi = {
  login,
};

Object.freeze(useAuthApi);
export { useAuthApi };
