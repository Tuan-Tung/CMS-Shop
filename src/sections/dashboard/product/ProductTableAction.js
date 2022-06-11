import React, { useState } from "react";
import { Grid, Button, Typography, MenuItem } from "@mui/material";
import { Icon } from "@iconify/react";
import Menu from "@mui/material/Menu";
import NextLink from 'next/link';

const ProductTableAction = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handCloseMenu = () => {
    setOpenMenu(false);
  };
  return (
    <Grid>
      <Button title="Delete"
        size="medium">
        <Icon fontSize={20}
            icon="ant-design:delete-filled" />
      </Button>
      <NextLink href={'/products/'}>
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
