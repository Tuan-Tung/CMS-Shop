import { DashboardLayout } from "src/components/dashboard-layout";
import CategoryDetailForm from "src/sections/dashboard/category/CategoryDetail";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";

const CategoryDetail = () => {
  const router = useRouter();
  return (
    <Grid padding={"40px 0"}>
      {router.query.id ? <CategoryDetailForm id={router.query?.id} /> : null}
    </Grid>
  );
};
CategoryDetail.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default CategoryDetail;
