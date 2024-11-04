import Banner from "../../component/Home/Banner";
import BidContainer from "../../component/Bid/BidContainer";
import Footer from "../../component/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function HomeWrapper() {
  const user = useContext(AuthContext)?.user ?? null;
  console.log("user ==>>", user);
  return (
    <>
      <div className="main-content">
        {!user && <Banner />}
        <BidContainer user = {user} />
        <Footer />
      </div>
    </>
  );
}

export default HomeWrapper;
