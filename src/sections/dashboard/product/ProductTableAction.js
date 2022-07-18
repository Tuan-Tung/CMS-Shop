import { Icon } from "@iconify/react";
import { Button, Grid } from "@mui/material";
import NextLink from 'next/link';
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useProductApi } from "src/service/api-app/productApi";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const style = {
  borderRadius: "10px",
  border: "none",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  px: 4,
};

const ProductTableAction = (props) => {
  const [open, setOpen] = useState(false);
  const { id, isRefresh, setIsRefresh } = props;
  const { enqueueSnackbar } = useSnackbar();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    try {
      await useProductApi.deleteProduct(id);
      enqueueSnackbar("Delete Product Success!", {
        variant: "success",
        autoHideDuration: 2000,
      });
      setIsRefresh(!isRefresh);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <Grid>
      <Button onClick={handleOpen}>
      <Icon fontSize={20}
            icon="ant-design:delete-filled" />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to delete Product ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Do you want to delete Product ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <NextLink href={`/products/${id}`}>
      <Button title="Edit"
        size="medium">
        <Icon fontSize={20}
            icon="clarity:edit-solid" />
      </Button>
      </NextLink>
    </Grid>
  );
};

export default ProductTableAction;
