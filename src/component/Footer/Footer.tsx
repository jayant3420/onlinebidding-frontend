import GenricAuctionLogo from "../../assets/icons/genricAuctionLogo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img
            src={GenricAuctionLogo}
            alt="Genix Auctions Logo"
            className="footer__logo-image"
          />
          <span>Genix Auctions</span>
        </div>

        <div className="footer__links">
          <ul className="footer__column">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className="footer__column">
            <li>
              <a href="#">Auctions</a>
            </li>
          </ul>
          <ul className="footer__column">
            <li>
              <a href="#">Bidding</a>
            </li>
          </ul>
        </div>

        <div className="footer__social">
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; Copyright 2024, All Rights Reserved by Genix</p>
      </div>
    </footer>
  );
}

export default Footer;
