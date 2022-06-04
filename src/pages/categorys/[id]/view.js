import { DashboardLayout } from 'src/components/dashboard-layout';
import CategoryNewForm from 'src/sections/dashboard/category/CategoryNewForm';

const ProductDetail = () => {

  return (
    <div>
        <CategoryNewForm />
    </div>
  );
};
ProductDetail.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
export default ProductDetail;