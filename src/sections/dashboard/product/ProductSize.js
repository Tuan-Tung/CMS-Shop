import { Button, CardContent, Grid, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";

const ProductSize = (prop) => {
  const { handleCancelSize, values } = prop;
  const [sizePr, setSizePr] = useState(values);
  const handleChange = (event,index) => {
    const {name,value} = event.target;
    let sizeProducts = values
    sizeProducts[index] = {...sizeProducts[index],[name]: value} 
    setSizePr([
      sizeProducts,
    ]);
  };

  return (
    <div>
      {values?.map((value, index) => (
        <Grid key={index} container spacing={3}>
          <Grid item xs={5} paddingBottom={2}>
            <TextField
              fullWidth
              label="Size"
              name="size"
              onChange={(e) => handleChange(e,index)}
              required
              value={value?.size}
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} paddingBottom={2}>
            <TextField
              fullWidth
              label="quantity"
              name="quantity"
              onChange={(e) => handleChange(e,index)}
              type="number"
              required
              value={value?.quantity}
              variant="outlined"
            />
          </Grid>
          <IconButton
            variant="outlined"
            style={{ background: "none", color: "red" }}
            onClick={() => handleCancelSize(index)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      ))}
    </div>
  );
};

export default ProductSize;
