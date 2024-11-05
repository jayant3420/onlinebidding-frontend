import Banner from "../../component/Home/Banner";
import BidContainer from "../../component/Bid/BidContainer";
import Footer from "../../component/Footer/Footer";
import { getter } from "../../util/storage";

function HomeWrapper() {
  const user = getter("user");
  const userJson = user ? JSON.parse(user) : null;
  return (
    <>
      <div className="main-content">
        {!userJson && <Banner />}
        <BidContainer user = {userJson} />
        <Footer />
      </div>
    </>
  );
}

export default HomeWrapper;
