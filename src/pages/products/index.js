import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../../__mocks__/products';
import { ProductListToolbar } from '../../components/product/product-list-toolbar';
import { ProductCard } from '../../components/product/product-card';
import { DashboardLayout } from '../../components/dashboard-layout';
import ProductTableForm from 'src/sections/dashboard/product/ProductTableForm';

const Products = () => (
  <>
    <Head>
      <title>
        Products | CMS Shop
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid>
            <ProductTableForm />
          </Grid>
        </Box>
      </Container>
    </Box>
  </>
);

Products.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Products;
