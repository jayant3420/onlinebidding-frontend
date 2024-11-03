import LoginWrapper from "./pages/auth/Login/LoginWrapper";
import SignUpWrapper from "./pages/auth/SignUp/SignUpWrapper";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate
} from "react-router-dom";
import Routes from "./routing/Routes";
import AuthContainer from "./pages/auth/AuthContainer";

function App() {
  console.log("api key ==>>", process.env.REACT_APP_PUBLIC_API_KEY);
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Routes />} />
        <Route path="/auth" element={<AuthContainer />}>
          <Route path="login" element={<LoginWrapper />} />
          <Route path="sign-up" element={<SignUpWrapper />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </Router>
  );
}

export default App;
