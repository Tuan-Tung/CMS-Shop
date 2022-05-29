import { Box, Container, Grid } from '@mui/material';
import Head from 'next/head';
import CategoryTableForm from 'src/sections/dashboard/category/CategoryTableForm';
import { DashboardLayout } from '../../components/dashboard-layout';
import { CategoryListToolbar } from '../../components/category/category-list-toolbar';

const Category = () => (
  <>
    <Head>
      <title>
        Category | CMS Shop
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
        <CategoryListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid>
            <CategoryTableForm />
          </Grid>
        </Box>
      </Container>
    </Box>
  </>
);

Category.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Category;
