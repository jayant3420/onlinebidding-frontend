import { Navigate, Outlet } from "react-router-dom";
import { getter } from "../../util/storage";

function AuthContainer() {
    const isLoggedIn = getter("user");
    if(!isLoggedIn) {
        return <Outlet />
    }

    return <Navigate to="/" />
}

export default AuthContainer;