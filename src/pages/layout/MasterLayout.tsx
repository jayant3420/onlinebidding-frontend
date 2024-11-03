import Header from "../../component/Header/Header";

function MasterLayout({ children }: any) {
  return (
    <>
      <div className="home-wrapper">
        <Header />
        <div className="main-content">
          {children}
        </div>
      </div>
    </>
  );
}

export default MasterLayout;
