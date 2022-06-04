const { default: BaseInstance } = require("../BaseApiClients");

const fetchCategory = () => BaseInstance.get("/category");

const createCategory = (params) => BaseInstance.post("/category/create", params);

const deleteCategory = (id) => BaseInstance.delete(`/category/${id}`);

const useCategoryApi = {
    fetchCategory,
    createCategory,
    deleteCategory,
};

Object.freeze(useCategoryApi);
export { useCategoryApi };
