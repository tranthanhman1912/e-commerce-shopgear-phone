import React, { useEffect, useRef } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logofull.png";
import { useUserAuth } from "../context/UserAuthContext";

import {auth} from "../firebase";
const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Sản phẩm",
    path: "/product",
  },
  {
    display: "Bài viết",
    path: "/blog",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const { user, logOut } = useUserAuth();
  const navActive = mainNav.findIndex((i) => i.path === pathname);
  const headerRef = useRef(null);
  const navigate = useNavigate();
  
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {}
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__left">
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item
              ${index === navActive ? "active" : ""} `}
              >
                <Link to={item.path}>{item.display}</Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__cart">
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>
            </div>
            {user ? (
              <div className="header__menu__item header__menu__right__user ">
                <div className="header__menu__right__user__email">
                  {user.email}
                </div>
                <div
                  className="header__menu__right__user__logout"
                  title="Đăng xuất"
                  onClick={handleLogOut}
                >
                  <i className="bx bx-log-out"></i>
                </div>
              </div>
            ) : (
              <div className="header__menu__item header__menu__right__user ">
                <Link to="/login">
                  <i className="bx bx-user"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
