const { default: BaseInstance } = require("../BaseApiClients");

const fetchCategory = () => BaseInstance.get("/category");

const createCategory = (params) => BaseInstance.post("/category/create", params);

const deleteCategory = (id) => BaseInstance.delete(`/category/${id}`);

const updateCategory = (id,params) => BaseInstance.patch(`/category/${id}`, params);


const useCategoryApi = {
    fetchCategory,
    createCategory,
    deleteCategory,
    updateCategory,
};

Object.freeze(useCategoryApi);
export { useCategoryApi };
