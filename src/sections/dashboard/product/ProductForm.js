import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card, Grid } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Box, Container } from "@mui/system";
import { FormTable } from "src/components/table-form/FormTable";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "firstName", headerName: "First name" },
  { field: "lastName", headerName: "Last name" },
  {
    field: "age",
    headerName: "Age",
  },
  {
    field: "fullName",
    headerName: "Full name",
  },
];

const dataTable = [
  {
    id: 1,
    avatarUrl: "/static/images/avatars/avatar_3.png",
    lastName: "Snow",
    firstName: "Jon",
    createdAt: 1555016400000,
    age: 35,
  },
  {
    id: 2,
    avatarUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.okxe.vn%2Fblog%2Fxu-huong-xe%2Fharley-davidson-sportster-s&psig=AOvVaw2qp9kQoLEwrBEdatqY_7XD&ust=1653666858780000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPj8pqDD_fcCFQAAAAAdAAAAABAD",
    lastName: "Lannister",
    firstName: "Cersei",
    createdAt: 1555016400000,
    age: 42,
  },
  {
    id: 3,
    avatarUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.okxe.vn%2Fblog%2Fxu-huong-xe%2Fharley-davidson-sportster-s&psig=AOvVaw2qp9kQoLEwrBEdatqY_7XD&ust=1653666858780000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPj8pqDD_fcCFQAAAAAdAAAAABAD",
    lastName: "Lannister",
    firstName: "Jaime",
    createdAt: 1555016400000,
    age: 45,
  },
  {
    id: 4,
    avatarUrl: "/static/images/avatars/avatar_3.png",
    lastName: "Stark",
    firstName: "Arya",
    createdAt: 1555016400000,
    age: 16,
  },
  {
    id: 5,
    avatarUrl: "/static/images/avatars/avatar_3.png",
    lastName: "Targaryen",
    firstName: "Daenerys",
    createdAt: 1555016400000,
    age: null,
  },
  {
    id: 6,
    avatarUrl: "/static/images/avatars/avatar_3.png",
    lastName: "Melisandre",
    firstName: null,
    createdAt: 1555016400000,
    age: 150,
  },
  {
    id: 7,
    avatarUrl: "/static/images/avatars/avatar_3.png",
    lastName: "Clifford",
    firstName: "Ferrara",
    createdAt: 1555016400000,
    age: 44,
  },
  {
    id: 8,
    avatarUrl: "/static/images/avatars/avatar_3.png",
    lastName: "Frances",
    firstName: "Rossini  Rossini Ferrara FerraraFerraraFerrara Ferrara Ferrara Ferrara Ferrara Ferrara FerraraFerrara",
    createdAt: 1555016400000,
    age: 36,
  },
  {
    id: 9,
    avatarUrl: "/static/images/avatars/avatar_3.png",
    lastName: "Roxie",
    firstName: "Harvey",
    createdAt: 1555016400000,
    age: 65,
  },
];
const ProductForm = () => {
  return (
    <Grid>
      <FormTable dataTable={dataTable} columns={columns} />
    </Grid>
  );
};

export default ProductForm;
