import { CacheProvider } from "@emotion/react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { useAuth } from "src/hooks/useAuth.js";
import { AuthContext, AuthProvider } from "../context/JWTContext.js";
import { theme } from "../theme";
import { createEmotionCache } from "../utils/create-emotion-cache";

const clientSideEmotionCache = createEmotionCache();
const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  
  
  React.useEffect(() => {
   // checks if the user is authenticated
  if(localStorage.getItem("token")){
    if(router.asPath !== "/login"){
      router.push(`${router.asPath}`)
    }
    else{
      router.push("/")
    }
  }  else{
    router.push("/login");
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>CMS Shop</title>
        <meta name="viewport"
        content="initial-scale=1, width=device-width" />
      </Head>
      <AuthProvider value>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </LocalizationProvider>
      </AuthProvider>
    </CacheProvider>
  );
};

export default App;
