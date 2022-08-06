import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";

const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
];

export const AccountProfileDetails = (props) => {
  let user = null;
  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("token"));
  }
  const [values, setValues] = useState({
    name: user?.result?.name,
    email: user?.result?.email,
    phone: "0987654321",
    role: user?.result?.role === 1 ? "ADMIN" : "USER",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader subheader="The information can't be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                onChange={handleChange}
                InputProps={{
                  readOnly: true,
                  shrink: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                value={values?.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                value={values?.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                InputProps={{
                  readOnly: true,
                  shrink: true,
                }}
                value={values?.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Role"
                name="role"
                onChange={handleChange}
                InputProps={{
                  readOnly: true,
                  shrink: true,
                }}
                value={values?.role}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}></Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        ></Box>
      </Card>
    </form>
  );
};
