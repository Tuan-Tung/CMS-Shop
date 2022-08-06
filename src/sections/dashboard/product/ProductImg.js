import { Button, CardContent, Grid, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";

const ProductImg = (prop) => {
  const { handleCancelImage, values } = prop;
  const [imagePr, setImagePr] = useState(values);
  const handleChange = (event, index) => {
    const { name, value } = event.target;
    let ImageProducts = values;
    ImageProducts[index] = { ...ImageProducts[index], [name]: value };
    setImagePr([ImageProducts]);
  };

  return (
    <div>
      {values?.map((value, index) => (
        <Grid key={index} container spacing={3}>
          <Grid item xs={11} paddingBottom={2}>
            <TextField
              fullWidth
              label="Image"
              name="img"
              onChange={(e) => handleChange(e, index)}
              value={value?.img}
              type="text"
              variant="outlined"
            />
          </Grid>
          <IconButton
            variant="outlined"
            style={{ background: "none", color: "red" }}
            onClick={() => handleCancelImage(index)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      ))}
    </div>
  );
};

export default ProductImg;
