import React from "react";
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <div className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* logo */}
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          <Link to="" className={classes.delivery}>
            {/* delivery */}
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </Link>
        </div>

        <div className={classes.search}>
          {/* search */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" placeholder="search product" />
          <FaSearch size={25} />
        </div>

        {/* right side */}
        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img
              src="https://image.shutterstock.com/image-vector/american-flag-usa-design-united-260nw-2477519645.jpg"
              alt="american-flag"
            />
            <select>
              <option value="">EN</option>
            </select>
          </Link>

          {/* three components */}
          <Link to="/auth">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </Link>
          {/* orders */}
          <Link to="/orders">
            <p>returns</p>
            <span>& Orders</span>
          </Link>
          {/* cart */}
          <Link to={"/cart"} className={classes.cart}>
            <BiCart size={38} />

            <span className={classes.orders}>0</span>
            <span>Cart</span>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </>
  );
}

export default Header;
