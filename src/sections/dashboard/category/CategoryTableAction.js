import React, { useState } from "react";
import { Grid, Button, Typography, Box, Modal,Stack } from "@mui/material";
import { Icon } from "@iconify/react";
import NextLink from 'next/link';
import { useCategoryApi } from 'src/service/api-app/categoryApi';
import { useSnackbar } from 'notistack';

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

const CategoryTableAction = (props) => {
  const { id, isRefresh, setIsRefresh } = props;
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const  deleteCategory = async () => {
    try {
      await useCategoryApi.deleteCategory(id);
      enqueueSnackbar("Delete Category Success!",{
        variant: 'success',
        autoHideDuration: 2000,
      });
      setIsRefresh(!isRefresh)
      setOpen(false)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Grid>
      <Button title="Delete"
        onClick={handleOpen}
        size="medium">
        <Icon fontSize={20}
            icon="ant-design:delete-filled" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: 20 }}>
            Do you want to delete category ?
          </Typography>
          <Stack direction="row" 
            justifyContent="end" 
            padding={'10px 0'}
            spacing={2}>
          <Button
            onClick={deleteCategory}
            size="medium"
            variant="outlined">
              Accept
          </Button>
          <Button
            onClick={handleClose}
            size="medium"
            variant="outlined" 
            color="error">
              Cancle
          </Button>
          </Stack>
        </Box>
      </Modal>
      <NextLink href={`/categorys/${id}/view`}>
      <Button title="View"
        size="medium">
        <Icon fontSize={20}
            icon="carbon:view-filled" />
      </Button>
      </NextLink>
    </Grid>
  );
};

export default CategoryTableAction;
