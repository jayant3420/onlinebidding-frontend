import Banner from "../../component/Home/Banner";
import BidContainer from "../../component/Bid/BidContainer";
import Footer from "../../component/Footer/Footer";

type HomeWrapperType = {
  isBannerShow?: boolean;
};

function HomeWrapper({ isBannerShow = true }: HomeWrapperType) {
  return (
    <>
      <div className="main-content">
        {isBannerShow && <Banner />}
        <BidContainer />
        <Footer />
      </div>
    </>
  );
}

export default HomeWrapper;
