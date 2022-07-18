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


const CategoryItemDetail = (props) => {
  const [dataCategory, setDataCategory] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const router = useRouter();

  const fetchListCategory = async () => {
    try {
      const res = await useCategoryApi.fetchCategory();
     res?.categories.map((value) => {
        if(value?._id === props?.idCategory){
          setDataCategory(value?.children?.map((childrenValue) => ({
            ...childrenValue,
            _id: childrenValue?._id,
            name: childrenValue?.name,
            slug: childrenValue?.slug,
            action: <CategoryTableAction id={childrenValue?._id} 
                      nameShoe={childrenValue?.name}
                      setIsRefresh={setIsRefresh}
                      isRefresh={isRefresh}
                    />
          })))
        }
    })
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
