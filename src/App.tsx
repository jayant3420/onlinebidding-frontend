import LoginWrapper from "./pages/auth/Login/LoginWrapper";
import SignUpWrapper from "./pages/auth/SignUp/SignUpWrapper";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./routing/Routes";
import HomeWrapper from "./pages/home/HomeWrapper";
import AuctionPageDecider from "./pages/bidding/AuctionPageDecider";
import AuthContainer from "./pages/auth/AuthContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/product" element={<Home />}>
            <Route path="list" element={<HomeWrapper />} />
            <Route path="detail/:id" element={<AuctionPageDecider />} />
          </Route>
          <Route path="/auth" element={<AuthContainer />}>
            <Route path="login" element={<LoginWrapper />} />
            <Route path="sign-up" element={<SignUpWrapper />} />
          </Route>
          <Route path="*" element={<Navigate to="/product/list" />} />
        </Switch>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
