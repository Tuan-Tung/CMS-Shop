import { DashboardLayout } from 'src/components/dashboard-layout';
import ProductNewForm from 'src/sections/dashboard/product/ProductNewForm';

const ProductCreate = () => {

  return (
    <div>
        <ProductNewForm />
    </div>
  );
};
ProductCreate.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
export default ProductCreate;