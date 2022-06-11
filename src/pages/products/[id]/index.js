import { DashboardLayout } from 'src/components/dashboard-layout';
import CategoryDetailForm from 'src/sections/dashboard/category/CategoryDetail';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';

const ProductDetail = () => {

  return (
    <Grid padding={"40px 0"}>
        product
    </Grid>
  );
};
ProductDetail.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
export default ProductDetail;