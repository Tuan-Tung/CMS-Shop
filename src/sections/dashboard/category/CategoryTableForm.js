import { Icon } from "@iconify/react";
import { Grid, Button, Menu } from "@mui/material";
import React, { useState } from "react";
import { FormTable } from "src/components/table-form/FormTable";
import CategoryTableAction from "./CategoryTableAction";

const columns = [
  { field: "id", name: "ID" },
  { field: "firstName", name: "First name" },
  { field: "lastName", name: "Last name" },
  {
    field: "age",
    name: "Age",
  },
  {
    field: "createdAt",
    name: "CreatedAt",
  },
  {
    field: "action",
    name: "Action",
  },
];


const CategoryTableForm = () => {
 
  
  const dataTable = [
    {
      id: 1,
      action: (<CategoryTableAction />),
      lastName: "Snow",
      firstName: "Jon",
      createdAt: "19/02/2002",
      age: 35,
    },
    {
      id: 2,
      action: (<CategoryTableAction />),
      lastName: "Lannister",
      firstName: "Cersei",
      createdAt: 1555016400000,
      age: 42,
    },
    {
      id: 3,
      action: (<CategoryTableAction />),
      lastName: "Lannister",
      firstName: "Jaime",
      createdAt: 1555016400000,
      age: 45,
    },
    {
      id: 4,
      action: (<CategoryTableAction />),
      lastName: "Stark",
      firstName: "Arya",
      createdAt: 1555016400000,
      age: 16,
    },
    {
      id: 5,
      action: (<CategoryTableAction />),
      lastName: "Targaryen",
      firstName: "Daenerys",
      createdAt: 1555016400000,
      age: null,
    },
    {
      id: 6,
      action: (<CategoryTableAction />),
      lastName: "Melisandre",
      firstName: null,
      createdAt: 1555016400000,
      age: 150,
    },
    {
      id: 7,
      action: (<CategoryTableAction />),
      lastName: "Clifford",
      firstName: "Ferrara",
      createdAt: 1555016400000,
      age: 44,
    },
    {
      id: 8,
      action: (<CategoryTableAction />),
      lastName: "Frances",
      firstName:
        "Rossini  Rossini Ferrara FerraraFerraraFerrara Ferrara Ferrara Ferrara Ferrara Ferrara FerraraFerrara",
      createdAt: 1555016400000,
      age: 36,
    },
    {
      id: 9,
      action: (<CategoryTableAction />),
      lastName: "Roxie",
      firstName: "Harvey",
      createdAt: 1555016400000,
      age: 65,
    },
  ];

  return (
    <Grid>
      <FormTable dataTable={dataTable} columns={columns} />
    </Grid>
  );
};

export default CategoryTableForm;
