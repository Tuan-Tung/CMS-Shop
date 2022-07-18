import { useEffect, useState } from 'react';
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
  TextField
} from '@mui/material';
import { Container } from '@mui/system';
import { useRouter } from 'next/router';
import { useProductApi } from 'src/service/api-app/productApi';
import { useCategoryApi } from 'src/service/api-app/categoryApi';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const ProductNewForm = (props) => {
  const router = useRouter();
  const [category,setCategory] = useState([]);
  const [values, setValues] = useState({
    shoeName: 'Katarina',
    description: 'Smith',
    productImage: [],
    quantity: 0,
    price: 0,
    sale: 0,
    sizeProduct: [],
    category: []
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleCancel = () => {
    router.push('/products')
  }
  const handleSubmit = () => {
    console.log(values);
  }
  const fetchListCategory = async () => {
    try {
      const res = await useCategoryApi.fetchCategory();
      setCategory(res?.category?.map((cate) => ({
        ...cate,
        _id: cate._id,
        name: cate.name,
      })))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListCategory();
  },[])

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
        <Container>
      <Card>
        <CardHeader
          title="Create Product"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="Shoe Nam"
                name="shoeName"
                onChange={handleChange}
                required
                value={values.shoeName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Description"
                name="description"
                onChange={handleChange}
                required
                multiline
                rows={4}
                maxRows={5}
                value={values.description}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Quantity"
                name="quantity"
                onChange={handleChange}
                required
                value={values.quantity}
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Price"
                name="price"
                onChange={handleChange}
                type="number"
                value={values.price}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Sale"
                name="sale"
                onChange={handleChange}
                required
                type="number"
                value={values.sale}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Autocomplete
        multiple
        id="tags-outlined"
        options={category}
        limitTags={3}
        getOptionLabel={(option) => option?.name}
        name="category"
        onChange={(e, value) => setValues({...values, category: value.map((val) => val?._id)})}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Category"
            placeholder=""
          />
        )}
      />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="error"
            variant="contained"
            sx={{mx: 3}}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleSubmit}
          >
            Create
          </Button>
        </Box>
      </Card>
      </Container>
    </form>
  );
};

export default ProductNewForm;