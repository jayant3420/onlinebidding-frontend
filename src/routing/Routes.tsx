import MasterLayout from "../pages/layout/MasterLayout";
import { Outlet } from "react-router-dom";

function Routes() {
  return (
    <MasterLayout>
      <Outlet />
    </MasterLayout>
  );
}

export default Routes;
