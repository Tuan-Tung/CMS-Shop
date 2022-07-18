const { default: BaseInstance } = require("../BaseApiClients");

const fetchProduct = (param) => BaseInstance.get(`/products?search=${param}`);

const createProduct = (params) => BaseInstance.post("/products/create", params);

const deleteProduct = (id) => BaseInstance.delete(`/products/${id}`);

const updateProduct = (id,params) => BaseInstance.patch(`/products/${id}`, params);


const useProductApi = {
    fetchProduct,
    createProduct,
    deleteProduct,
    updateProduct,
};

Object.freeze(useProductApi);
export { useProductApi };
