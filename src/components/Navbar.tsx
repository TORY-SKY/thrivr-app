import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/images/tem.png";

interface ReservationModal {
  openModal: () => void;
}
const Navbar = ({ openModal }: ReservationModal) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <header className="navigation-bar">
        <nav className="classA-nav">
          <ul className={`side-bar ${isSidebarOpen ? "Open" : "Close"}`}>
            <CloseIcon className="close-icon" onClick={toggleSidebar} />
            <li className="li">
              <a href="/home" className="a-tags">
                Home
              </a>
            </li>
            <li className="li">
              <a href="/aboutus" className="a-tags">
                About Us
              </a>
            </li>
            <li className="li">
              <a href="/service" className="a-tags">
                Service
              </a>
            </li>
            <li className="li">
              <a href="/shop" className="a-tags">
                Shop
              </a>
            </li>
            <li
              className="shopping-cart "
              style={{
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              <ShoppingCartIcon />
              <i className="cart-items">0</i>
            </li>
            <li className="reserve-btn li">
              <button className="a-tags" onClick={openModal}>
                Reserve Now
              </button>
            </li>
          </ul>
          <ul className="nav-links">
            <li className=" the-logo-img">
              <a href="/" className="a-tags logo-name">
                <img
                  src={logo}
                  className="hideOnMobile"
                  alt="barber logo"
                  style={{ width: "6rem", height: "auto" }}
                />
                Temscutz
              </a>
            </li>
            <li className="hideOnMobile">
              <a href="/" className="a-tags">
                Home
              </a>
            </li>
            <li className="hideOnMobile">
              <a href="/aboutus" className="a-tags">
                About Us
              </a>
            </li>
            <li className="hideOnMobile">
              <a href="/service" className="a-tags">
                Service
              </a>
            </li>
            <li className="hideOnMobile">
              <a href="/shop" className="a-tags">
                Shop
              </a>
            </li>
            <li
              className="shopping-cart hideOnMobile"
              style={{
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              <ShoppingCartIcon />
              <i className="cart-items">0</i>
            </li>
            <li className="reserve-btn hideOnMobile">
              <button className="a-tags" onClick={openModal}>
                Reserve Now
              </button>
            </li>
            <li onClick={toggleSidebar} className="Menu-Icon">
              <MenuIcon />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
