import React, { useState } from "react";
import { Grid, Button, Typography, MenuItem } from "@mui/material";
import { Icon } from "@iconify/react";

const CategoryTableAction = () => {
  
  return (
    <Grid>
      <Button title="Delete"
        size="medium">
        <Icon fontSize={20}
            icon="ant-design:delete-filled" />
      </Button>
      <Button title="Edit"
        size="medium">
        <Icon fontSize={20}
            icon="clarity:edit-solid" />
      </Button>
    </Grid>
  );
};

export default CategoryTableAction;
