import { Icon } from "@iconify/react";
import { Grid, Button, Menu, Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FormTable } from "src/components/table-form/FormTable";
import ProductTableAction from "./ProductTableAction";
import { useProductApi } from "src/service/api-app/productApi";

const columns = [
  { field: "img", name: "Img" },
  { field: "id", name: "ID" },
  { field: "title", name: "First name" },
  { field: "price", name: "Price" },
  {
    field: "sale",
    name: "Sale",
  },
  {
    field: "description",
    name: "Description",
  },
  {
    field: "createAt",
    name: "CreatedAt",
  },
  {
    field: "action",
    name: "Action",
  },
];

const ProductTableForm = (props) => {
  const { searchPro } = props;
  const [dataProduct, setDataProduct] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);

  const fetchListProduct = async () => {
    let param = searchPro === "" ? "." : searchPro;
    try {
      const res = await useProductApi.fetchProduct(param);
      setDataProduct(
        res?.products?.map((product) => ({
          ...product,
          id: product?._id,
          img: <Avatar alt="" src={product?.productImage[0]?.img} />,
          title: product?.title,
          price: product?.price || 0,
          sale: (product?.sale || 0) + "%",
          createAt: product?.createAt,
          description: product?.description,
          action: (
            <ProductTableAction
              id={product?._id}
              setIsRefresh={setIsRefresh}
              isRefresh={isRefresh}
            />
          ),
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefresh,searchPro]);

  return (
    <Grid>
      <FormTable dataTable={dataProduct} columns={columns} />
    </Grid>
  );
};

export default ProductTableForm;
