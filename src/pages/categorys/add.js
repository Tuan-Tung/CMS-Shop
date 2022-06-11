import { Grid } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import CategoryNewForm from 'src/sections/dashboard/category/CategoryNewForm';

const ProductCreate = () => {

  return (
    <Grid padding={"40px 0"}>
        <CategoryNewForm />
    </Grid>
  );
};
ProductCreate.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
export default ProductCreate;