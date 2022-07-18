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
  InputLabel,
  Stack
} from '@mui/material';
import { Container } from '@mui/system';
import { useRouter } from 'next/router';
import { useCategoryApi } from 'src/service/api-app/categoryApi';
import { useSnackbar } from 'notistack';
import CategoryItemDetail from './CategoryItemDetail';

const CategoryDetailForm = (props) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [values, setValues] = useState({
    name: '',
    parentId: '',
  });

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
      await useCategoryApi.updateCategory(router.query?.id,params);
      enqueueSnackbar("Update Category Success!",{
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
          title="Details of products of the shoe company"
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
              <InputLabel id="demo-select-small">Shoe Category</InputLabel>
              <TextField
                fullWidth
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
           
            </Grid>
              <CategoryItemDetail idCategory={props.id} />
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
            Save
          </Button>
        </Box>
      </Card>
      </Container>
    </form>
  );
};

export default CategoryDetailForm;