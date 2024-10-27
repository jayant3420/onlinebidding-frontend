import HomeWrapper from "./pages/home/HomeWrapper";
import LoginWrapper from "./pages/auth/Login/LoginWrapper";
import SignUpWrapper from "./pages/auth/SignUp/SignUpWrapper";
import AuctionPreview from "./pages/bidding/AuctionPreview";
import AuctionItemDetailContainer from "./pages/bidding/AuctionItemDetailContainer";
import MasterLayout from "./pages/layout/MasterLayout";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <MasterLayout>
      <AuctionItemDetailContainer />
      {/* <HomeWrapper /> */}
    </MasterLayout>
    // <HomeWrapper />
    // <LoginWrapper />
    // <SignUpWrapper />
    // <AuctionPreview />
  );
}

export default App;
