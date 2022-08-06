import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { DashboardLayout } from "src/components/dashboard-layout";
import ProductNewForm from "src/sections/dashboard/product/ProductNewForm";
import { useRouter } from "next/router";
import { useProductApi } from "src/service/api-app/productApi";

const ProductDetail = () => {
  const router = useRouter();
  const [productId, setProductId] = useState({
    title: "",
    description: "",
    productImage: [],
    quantity: 0,
    price: 0,
    sale: 0,
    sizeProduct: [],
    category: [],
  });
  const fetchProductById = async () => {
    try {
      const res = await useProductApi.fetchProduct(".");
      res.products?.map((valuePr) => {
        if (valuePr?._id === router.query.id) {
          setProductId(valuePr);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProductById();
  }, []);
  return (
    <Grid padding={"40px 0"}>
      {router.query.id ? <ProductNewForm isEdit idPr={router.query.id} /> : null}
    </Grid>
  );
};
ProductDetail.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default ProductDetail;
