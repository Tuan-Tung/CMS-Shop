import React from 'react'
import { Button } from '@mui/material';
import { Icon } from "@iconify/react";

const CategoryEdit = () => {
  return (
    <Button title="Edit"
        size="medium">
        <Icon fontSize={20}
            icon="clarity:edit-solid" />
      </Button>
  )
}

export default CategoryEdit