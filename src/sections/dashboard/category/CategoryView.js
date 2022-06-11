import React from 'react'
import NextLink from 'next/link';
import { Button } from '@mui/material';
import { Icon } from "@iconify/react";
import { useRouter } from 'next/router';

const CategoryView = ({idView,queryId}) => {
  const router = useRouter();
  
console.log("idview: ",idView);
    const handleView = async () => {
        console.log(router);
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
    // <NextLink href={`/categorys/${id}/view`}>
      <Button title="View"
        onClick={handleView}
        size="medium">
        <Icon fontSize={20}
            icon="carbon:view-filled" />
      </Button>
    //   </NextLink>
  )
}

export default CategoryView