import MasterLayout from "../pages/layout/MasterLayout";
import { AuthProvider } from "../context/AuthContext";
import {
  Outlet,
  useLocation,
  Navigate
} from "react-router-dom";

function Routes() {
  const location = useLocation();
  return (
    <AuthProvider>
      <MasterLayout>
        {
          location.pathname === '/product' ? <Navigate to="/product/list" /> : <Outlet />
        }
      </MasterLayout>
    </AuthProvider>
  );
}

export default Routes;
