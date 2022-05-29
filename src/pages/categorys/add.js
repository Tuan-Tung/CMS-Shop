import { DashboardLayout } from 'src/components/dashboard-layout';
import CategoryNewForm from 'src/sections/dashboard/category/CategoryNewForm';

const ProductCreate = () => {

  return (
    <div>
        <CategoryNewForm />
    </div>
  );
};
ProductCreate.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
export default ProductCreate;