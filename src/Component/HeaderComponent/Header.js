import React, { useState, /*useEffect*/ } from 'react';
import logo from '../../images/logo-moho.webp';

import '../HeaderComponent/HeaderStyle.css';
import { GoSignIn } from "react-icons/go";
import { PiSignIn } from "react-icons/pi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [isThirdDropdownOpen, setIsThirdDropdownOpen] = useState(false);
  const [isFourthDropdownOpen, setIsFourthDropdownOpen] = useState(false);

  const handleMouseEnterFirstDropdown = () => {
    setIsFirstDropdownOpen(true);
  };

  const handleMouseLeaveFirstDropdown = () => {
    setIsFirstDropdownOpen(false);
  };

  const handleMouseEnterSecondDropdown = () => {
    setIsSecondDropdownOpen(true);
  };

  const handleMouseLeaveSecondDropdown = () => {
    setIsSecondDropdownOpen(false);
  };

  const handleMouseEnterThirdDropdown = () => {
    setIsThirdDropdownOpen(true);
  };

  const handleMouseLeaveThirdDropdown = () => {
    setIsThirdDropdownOpen(false);
  };

  const handleMouseEnterFourthDropdown = () => {
    setIsFourthDropdownOpen(true);
  };

  const handleMouseLeaveFourthDropdown = () => {
    setIsFourthDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="header__title">
        Nội Thất MOHO miễn phí giao hàng & lắp đặt tại TP.HCM, Hà Nội, Biên Hòa và một số khu vực tại Bình Dương
      </div>
      <div className="header__container">
        <div className="header__logo">
          <a href="/">
            <img src={logo} alt="Nội thất MOHO" />
          </a>
        </div>
        <div className="header__nav">
          <ul>

            <li className="dropdown" onMouseEnter={handleMouseEnterThirdDropdown} onMouseLeave={handleMouseLeaveThirdDropdown}>
              <a href="/product">Sản Phẩm</a>
              <div className="dropdown-icon">
                {isThirdDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div className={`dropdown-content ${isThirdDropdownOpen ? 'show' : ''}`}>
                <a href="/tu-bep">Tủ Bếp</a>
                <a href="/do-trang-tri">Đồ Trang Trí</a>
                <a href="/phong-lam-viec">Phòng Làm Việc</a>
              </div>
            </li>

            <li><a href="/bo-suu-tap-moi">Bộ Sưu Tập Mới</a></li>

            <li className="dropdown" onMouseEnter={handleMouseEnterFirstDropdown} onMouseLeave={handleMouseLeaveFirstDropdown}>
              <a href="/tu-bep">Tủ Bếp</a>
              <div className="dropdown-icon">
                {isFirstDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div className={`dropdown-content ${isFirstDropdownOpen ? 'show' : ''}`}>
                <a href="/tu-bep">MOHO KICHEN</a>
              </div>
            </li>

            <li className="dropdown" onMouseEnter={handleMouseEnterSecondDropdown} onMouseLeave={handleMouseLeaveSecondDropdown}>
              <a href="/dich-vu">Dịch Vụ</a>
              <div className="dropdown-icon">
                {isSecondDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div className={`dropdown-content ${isSecondDropdownOpen ? 'show' : ''}`}>
                <a href="/sales-policy">Chính Sách Bán Hàng</a>
                <a href="/delivery-policy">Chính Sách Giao Hàng & Lắp Đặt</a>
                <a href="/return-policy">Chính Sách Đổi Trả</a>
                <a href="/warranty-policy">Chính Sách Bảo Hành & Bảo Trì</a>
                <a href="/MOHOmie">Khách Hàng Thân Thiết - MOHOmie</a>
                <a href="/sales-partnet-policy">Chính Sách Đối Tác Bán Hàng</a>
              </div>
            </li>

            <li className="dropdown" onMouseEnter={handleMouseEnterFourthDropdown} onMouseLeave={handleMouseLeaveFourthDropdown}>
              <a href="/khuyen-mai">Khuyến Mãi</a>
              <div className="dropdown-icon">
                {isFourthDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div className={`dropdown-content ${isFourthDropdownOpen ? 'show' : ''}`}>
                <a href="/khuyen-mai">[50%] Mừng Tháng Của Mẹ</a>
              </div>
            </li>

            <li><a href="/tin-tuc">Tin Tức</a></li>

            <li><a href="/about-us">About Us</a></li>

            <li><a href="/show-room">Showroom</a></li>

          </ul>
        </div>
        <div className="search-container">
          <form className="search-box">
            <div className="wpo-search-inner">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="input-search"
                required
              />
              <button type="submit" className="btn-search">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="header__account">
          <PiSignIn />
          <a href="/login">Đăng nhập</a>
          <span className="spacer"></span>
          <GoSignIn />
          <a href="/register">Đăng ký</a>
          {/* <i class="fa-regular fa-user"></i>
          <a href="/login">Đăng nhập/Đăng ký</a>
          <div>
            <a>Tài Khoản</a>
            <i class="fa-solid fa-angle-down"></i>
          </div> */}
        </div>
        <div className="header__cart">
          <a href="/cart">
            <FiShoppingBag />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
