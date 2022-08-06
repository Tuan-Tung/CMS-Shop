import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import { Download as DownloadIcon } from "../../icons/download";
import { Search as SearchIcon } from "../../icons/search";
import { Upload as UploadIcon } from "../../icons/upload";
import NextLink from "next/link";
import ProductTableForm from "src/sections/dashboard/product/ProductTableForm";
import { useState } from "react";

export const ProductListToolbar = (props) => {
  const [searchPro, setSearchPro] = useState("");
  const [valText, setValText] = useState("");

  const handleSearch = () => {
    setSearchPro(valText);
  };
  const handleChange = (event) => {
    const { value } = event.target;
    setValText(value);

    if (event.key === 'Enter') {
      setSearchPro(valText);
    }
  };
  return (
    <Box {...props}>
      <Grid>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            m: -1,
          }}
        >
          <Typography sx={{ m: 1 }} variant="h4">
            Products
          </Typography>
          <Box sx={{ m: 1 }}>
            <NextLink href="/products/add">
              <Button color="primary" variant="contained">
                Add products
              </Button>
            </NextLink>
          </Box>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Card>
            <CardContent>
            <Stack direction="row" spacing={2}>
                <TextField
                  fullWidth
                  onChange={handleChange}
                  onKeyDown={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon fontSize="small" color="action">
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Search product"
                  variant="outlined"
                />
              <Button variant="contained" color="warning" endIcon={<SearchIcon />} onClick={handleSearch}>Search</Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>
        <ProductTableForm searchPro={searchPro} />
      </Grid>
    </Box>
  );
};
