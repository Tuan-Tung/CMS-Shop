import { Icon } from "@iconify/react";
import { Grid, Button, Menu } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FormTable } from "src/components/table-form/FormTable";
import ProductTableAction from "./ProductTableAction";
import { useProductApi } from "src/service/api-app/productApi";

const columns = [
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


const ProductTableForm = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [searchPro, setSearchPro] = useState('');
  const [isRefresh, setIsRefresh] = useState(false);
  
  const fetchListProduct = async () => {
    let param = searchPro === '' ? 'a' : searchPro;
    try {
      const res = await useProductApi.fetchProduct(param);
      console.log(res);
      setDataProduct(res?.products?.map((product) => ({
        ...product,
        id: product?._id,
        title: product?.title,
        price: product?.price,
        sale: product?.sale + "%",
        createAt: product?.createAt,
        description: product?.description,
        action: <ProductTableAction id={product?._id} 
        setIsRefresh={setIsRefresh}
        isRefresh={isRefresh}
      />
      })))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isRefresh])
  const dataTable = [
    {
      id: 1,
      action: (<ProductTableAction />),
      lastName: "Snow",
      firstName: "Jon",
      createdAt: "19/02/2002",
      age: 35,
    },
    
  ];

  return (
    <Grid>
      <FormTable dataTable={dataProduct} columns={columns} />
    </Grid>
  );
};

export default ProductTableForm;
