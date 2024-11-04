import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getter } from "../../util/storage";

function AuthContainer() {
    const isLoggedIn = getter("user");
    const location = useLocation();
    console.log("location ==>>", location);

    if(location.pathname === "/auth" && !isLoggedIn) {
        return <Navigate to="/auth/login" />
    }

    if(!isLoggedIn) {
        return <Outlet />
    }

    return <Navigate to="/" />
}

export default AuthContainer;