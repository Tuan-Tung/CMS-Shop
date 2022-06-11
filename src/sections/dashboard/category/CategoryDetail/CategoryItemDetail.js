import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FormTable } from "src/components/table-form/FormTable";
import { useCategoryApi } from "src/service/api-app/categoryApi";
import CategoryTableAction from "../CategoryTableAction";

const columns = [
  { field: "_id", name: "ID" },
  { field: "name", name: "Name" },
  { field: "slug", name: "Slug" },
  {
    field: "action",
    name: "Action",
  },
];


const CategoryItemDetail = () => {
  const [dataCategory, setDataCategory] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const router = useRouter();
console.log('router.query: ',router.query);
  const fetchListCategory = async () => {
    try {
      const res = await useCategoryApi.fetchCategory();
      setDataCategory(res?.categories.map((value) => ({
        ...value,
        _id: value?._id,
        name: value?.name,
        slug: value?.slug,
        action: <CategoryTableAction id={value?._id} 
                  setIsRefresh={setIsRefresh}
                  isRefresh={isRefresh}
                />
      })))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListCategory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isRefresh])
  
  return (
    <Grid>
      <FormTable 
        dataTable={dataCategory} 
        columns={columns} 
      />
    </Grid>
  );
};

export default CategoryItemDetail;
