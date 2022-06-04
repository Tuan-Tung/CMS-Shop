import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  MenuItem,
  Select,
  TextField,
  InputLabel
} from '@mui/material';
import { Container } from '@mui/system';
import { useRouter } from 'next/router';
import { useCategoryApi } from 'src/service/api-app/categoryApi';
import { useSnackbar } from 'notistack';

const CategoryNewForm = (props) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [values, setValues] = useState({
    name: '',
    parentId: '',
  });
  const [parentCategory, setParentCategory] = useState([]);

  const fetchListCategory = async () => {
    try {
      const res = await useCategoryApi.fetchCategory();
      setParentCategory(res?.categories.map((value) => ({
        ...value,
        _id: value?._id,
        name: value?.name,
        slug: value?.slug,
      })))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListCategory();
  },[])

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };


  const handleCancel = () => {
    router.push('/categorys')
  }
  const handleSubmit = async () => {
    let params = {}
    if(values.parentId) {
      params = {
        name: values.name,
        parentId: values.parentId,
      }
    }else {
      params = {
        name: values.name,
      }
    }
    try {
      await useCategoryApi.createCategory(params);
      enqueueSnackbar("Create Category Success!",{
        variant: 'success',
        autoHideDuration: 2000,
      });
      router.push('/categorys');
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.response.data.error, {
        variant: 'error',
      });
    }
  }

return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
        <Container>
      <Card>
        <CardHeader
          title="Create Category"
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
              <InputLabel id="demo-select-small">Shoe Name (or category)</InputLabel>
              <TextField
                fullWidth
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <InputLabel id="demo-select-small">Shoe Category</InputLabel>
              <Select
                fullWidth
              name="parentId"
              labelId="demo-select-small"
              id="demo-select-small"
              value={values.parentId}
              onChange={handleChange}
            >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            {parentCategory?.map((categorys,index) => (
              <MenuItem key={index} 
                value={`${categorys?._id}`}>{categorys?.name}
              </MenuItem>
            ))}
          </Select>
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

export default CategoryNewForm;