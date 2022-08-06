import { DashboardLayout } from 'src/components/dashboard-layout';
import ProductNewForm from 'src/sections/dashboard/product/ProductNewForm';

const DEFAULT_PRODUCT = {
  title: "",
  description: "",
  productImage: [],
  quantity: 0,
  price: 0,
  sale: 0,
  sizeProduct: [],
  category: [],
}
const ProductCreate = () => {

  return (
    <div>
        <ProductNewForm dfProduct={DEFAULT_PRODUCT} />
    </div>
  );
};
ProductCreate.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
export default ProductCreate;