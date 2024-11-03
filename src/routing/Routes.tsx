import HomeWrapper from "../pages/home/HomeWrapper";
import MasterLayout from "../pages/layout/MasterLayout";

function Routes() {
  return (
    <MasterLayout>
      <HomeWrapper isBannerShow={true} />
    </MasterLayout>
  );
}

export default Routes;
