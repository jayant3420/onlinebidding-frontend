import Header from "../../component/Header/Header";

function MasterLayout({ children }: any) {
  return (
    <>
      <div className="home-wrapper">
        <Header />
        <div className="main-content">
          {children}
          {/* {!isBannerShow && <Banner />}
          <BidContainer />
          <Footer /> */}
        </div>
      </div>
    </>
  );
}

export default MasterLayout;
