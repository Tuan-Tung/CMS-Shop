import React, { useState } from 'react'
import { Grid, Button, Typography, Box, Modal,Stack, TextField, InputLabel } from "@mui/material";
import { Icon } from "@iconify/react";
import { useCategoryApi } from 'src/service/api-app/categoryApi';
import { useSnackbar } from 'notistack';
import { useFormik } from "formik";
import * as Yup from "yup";


const style = {
  borderRadius: '10px',
  border: 'none',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  px: 4,
};
const CategoryEdit = ({idEdit,nameShoe, isRefresh, setIsRefresh}) => {
  const { enqueueSnackbar } = useSnackbar();

  const [openFormEditCategory, setOpenFormEditCategory] = useState(false);

  const handleOpenFormEditCategory = () => setOpenFormEditCategory(true);
  const handleCloseFormEditCategory = () => setOpenFormEditCategory(false);
 
  const formik = useFormik({
    initialValues: {
      name: nameShoe,
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required("NameShoe is required"),
    }),
    onSubmit: async (data) => {
      // let params = values;
      try {
        await useCategoryApi.updateCategory(idEdit,data) 
        enqueueSnackbar("Update Category Success!",{
          variant: 'success',
          autoHideDuration: 2000,
        });
        handleCloseFormEditCategory();
        setIsRefresh(!isRefresh)
      } catch (error) {
        enqueueSnackbar(error?.response?.data?.error, {
          variant: 'error',
          autoHideDuration: 2000,
        });
        console.log(error);
      }
    }
  });
  // const updateCategoryChilden = async ( ) => {
  //   let params = values;
  //   try {
  //     await useCategoryApi.updateCategory(idEdit,params) 
  //     enqueueSnackbar("Update Category Success!",{
  //       variant: 'success',
  //       autoHideDuration: 2000,
  //     });
  //     handleCloseFormEditCategory();
  //     setIsRefresh(!isRefresh)
  //   } catch (error) {
  //     enqueueSnackbar(error?.response?.data?.error, {
  //       variant: 'error',
  //       autoHideDuration: 2000,
  //     });
  //     console.log(error);
  //   }
  // }
  return (
    <form onSubmit={formik.handleSubmit}>
    <Button title="Edit"
        onClick={handleOpenFormEditCategory}
        size="medium">
        <Icon fontSize={20}
            icon="clarity:edit-solid" />
      </Button>
      
      <Modal
      open={openFormEditCategory}
      onClose={handleCloseFormEditCategory}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        
        <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: 20 }}>
          Update shoe category
        </Typography>
        <Grid paddingTop={3}
              item
              md={6}
              xs={12}
            >
              <InputLabel id="demo-select-small">Shoe Category</InputLabel>
              <TextField
                error={Boolean(formik.touched.name && formik.errors.name)}
                fullWidth
                helperText={formik.touched.name && formik.errors.name}
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                value={formik.values.name}
                // onChange={handleChange}
                // required
                // value={values.nameShoe}
                variant="outlined"
              />
            </Grid>
        <Stack direction="row" 
          justifyContent="end" 
          padding={'10px 0'}
          spacing={2}>
            
        <Button
          onClick={formik.handleSubmit}
          size="medium"
          type="submit"
          variant="outlined">
            Save
        </Button>
        <Button
          onClick={handleCloseFormEditCategory}
          size="medium"
          variant="outlined" 
          color="error">
            Cancle
        </Button>
        </Stack>
      </Box>
    </Modal>
    </form>
  )
}

export default CategoryEdit