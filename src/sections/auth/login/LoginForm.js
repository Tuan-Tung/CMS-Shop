import React, { useContext } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuthApi } from "src/service/api-app/authApi";
import { useAuth } from "src/hooks/useAuth";
import { AuthContext } from "src/context/JWTContext";

const LoginForm = () => {
  const context = useContext(AuthContext);
  const router = useRouter();
  const {login} = useAuth()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (data) => {
      try {
        await login(data);
        router.push("/");
      } catch (error) {
        console.log(error)
      }
    },
  });
  return (
    <Container maxWidth="sm"
      style={{ background: "white", borderRadius: "10px" }}
    >
      {/* <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Dashboard
            </Button>
          </NextLink> */}
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ my: 3 }}>
          <Typography color="textPrimary"
            variant="h4">
            Login CMS
          </Typography>
          <Typography color="textSecondary"
            gutterBottom
            variant="body2">
            Login CMS on the internal platform
          </Typography>
        </Box>

        <TextField
          error={Boolean(formik.touched.email && formik.errors.email)}
          fullWidth
          helperText={formik.touched.email && formik.errors.email}
          label="Email Address"
          margin="normal"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="email"
          value={formik.values.email}
          variant="outlined"
        />
        <TextField
          error={Boolean(formik.touched.password && formik.errors.password)}
          fullWidth
          helperText={formik.touched.password && formik.errors.password}
          label="Password"
          margin="normal"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="password"
          value={formik.values.password}
          variant="outlined"
        />
        <Box sx={{ py: 2 }}>
          <Button
            color="primary"
            disabled={formik.isSubmitting}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Sign In Now
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default LoginForm;
