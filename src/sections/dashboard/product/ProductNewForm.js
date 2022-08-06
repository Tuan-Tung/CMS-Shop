import { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import { useProductApi } from "src/service/api-app/productApi";
import { useCategoryApi } from "src/service/api-app/categoryApi";
import ProductSize from "./ProductSize";
import ProductImg from "./ProductImg";
import { useSnackbar } from "notistack";

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

const ProductNewForm = (props) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { dfProduct, isEdit,idPr } = props;
  const [category, setCategory] = useState([]);
  const [values, setValues] = useState(dfProduct);


  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleCancel = () => {
    router.push("/products");
  };
  const handleSubmit = async () => {
    try {
      await useProductApi.createProduct(values);
      enqueueSnackbar("Create Product Success!", {
        variant: "success",
        autoHideDuration: 2000,
      });
      router.push("/products");
    } catch (error) {
      console.log(error);
      if(error.response.data.message){
        enqueueSnackbar(error.response.data.message, {
          variant: "error",
        });
      }
      else {
        enqueueSnackbar(error.response.data, {
          variant: "error",
        });
      }
    }
  };
  const handleEdit = async () => {
    try {
      await useProductApi.updateProduct(idPr,values);
      enqueueSnackbar("Edit Product Success!", {
        variant: "success",
        autoHideDuration: 2000,
      });
      router.push("/products");
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.response.data.message, {
        variant: "error",
      });
    }
  }

  const fetchListCategory = async () => {
    try {
      const res = await useCategoryApi.fetchCategory();
      setCategory(
        res?.category?.map((cate) => ({
          ...cate,
          _id: cate._id,
          name: cate.name,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  // handle Size
  const handleAddSize = () => {
    setValues({
      ...values,
      sizeProduct: [...values.sizeProduct, { quantity: 0, size: 0 }],
    });
  };
  const handleCancelSize = (index) => {
    values.sizeProduct.splice(index, 1);
    setValues({
      ...values,
      sizeProduct: [...values.sizeProduct],
    });
  };

  // handle Img
  const handleAddImage = () => {
    setValues({
      ...values,
      productImage: [...values.productImage, { img: "" }],
    });
  };
  const handleCancelImage = (index) => {
    values.productImage.splice(index, 1);
    setValues({
      ...values,
      productImage: [...values.productImage],
    });
  };

  const fetchProductById = async () => {
    try {
      const res = await useProductApi.fetchProduct(".");
      res.products?.map((valuePr) => {
        if (valuePr?._id === idPr) {
          setValues(valuePr);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListCategory();
    fetchProductById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idPr]);

  return (
    <form autoComplete="off" noValidate {...props}>
      <Container>
        <Card>
          <CardHeader title="Create Product" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="Shoe Nam"
                  name="title"
                  onChange={handleChange}
                  required
                  value={values?.title}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  value={values?.description}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Quantity"
                  name="quantity"
                  onChange={handleChange}
                  value={values?.quantity}
                  type="number"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Price"
                  name="price"
                  onChange={handleChange}
                  type="number"
                  value={values?.price}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Sale"
                  name="sale"
                  onChange={handleChange}
                  required
                  type="number"
                  value={values?.sale}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={category}
                  limitTags={3}
                  getOptionLabel={(option) => option?.name}
                  name="category"
                  onChange={(e, value) =>
                    setValues({ ...values, category: value.map((val) => val?._id) })
                  }
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField {...params} label="Category" placeholder="" />
                  )}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid paddingTop={2} item md={6}>
                <Button onClick={handleAddSize}>+ Add size product</Button>
                <ProductSize
                  handleChange={handleChange}
                  setValues={setValues}
                  values={values?.sizeProduct}
                  handleCancelSize={handleCancelSize}
                />
              </Grid>
              <Grid paddingTop={2} item md={6}>
                <Button onClick={handleAddImage}>+ Add image product</Button>
                <ProductImg
                  handleChange={handleChange}
                  setValues={setValues}
                  values={values?.productImage}
                  handleCancelImage={handleCancelImage}
                />
              </Grid>
            </Grid>
          </CardContent>

          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            <Button color="error" variant="contained" sx={{ mx: 3 }} onClick={handleCancel}>
              Cancel
            </Button>
            {isEdit ? <Button color="primary" variant="contained" onClick={handleEdit}>
              Edit
            </Button> : <Button color="primary" variant="contained" onClick={handleSubmit}>
              Create
            </Button>}
          </Box>
        </Card>
      </Container>
    </form>
  );
};

export default ProductNewForm;
