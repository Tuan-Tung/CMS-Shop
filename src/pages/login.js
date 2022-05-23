import { Box } from "@mui/material";
import Head from "next/head";
import LoginForm from "../sections/auth/login/LoginForm";

const Login = () => {

  return (
    <>
      <Head>
        <title>Login | CMS Shop</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
          backgroundImage:
            "url(https://res.cloudinary.com/dkzpakm7v/image/upload/v1608865169/samples/landscapes/nature-mountains.jpg)",
        }}
      >
        <LoginForm />
      </Box>
    </>
  );
};

export default Login;
