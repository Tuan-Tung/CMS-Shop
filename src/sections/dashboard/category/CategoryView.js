import React from 'react'
import NextLink from 'next/link';
import { Button } from '@mui/material';
import { Icon } from "@iconify/react";
import { useRouter } from 'next/router';

const CategoryView = ({idView,queryId}) => {
  const router = useRouter();
  
    const handleView = async () => {
        if(typeof window !== 'undefined'){
          router.push({
            pathname: "/categorys/[id]",
            query: {
              id: idView,
            },
          });
        }
       
      }
  return (
      <Button title="View"
        onClick={handleView}
        size="medium">
        <Icon fontSize={20}
            icon="carbon:view-filled" />
      </Button>
  )
}

export default CategoryView