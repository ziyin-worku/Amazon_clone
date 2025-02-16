import React from "react";
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <div className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* logo */}
          <a href="/">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
          <a href="" className={classes.delivery}>
            {/* delivery */}
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </a>
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
          <a href="" className={classes.language}>
            <img
              src="https://image.shutterstock.com/image-vector/american-flag-usa-design-united-260nw-2477519645.jpg"
              alt="american-flag"
            />
            <select>
              <option value="">EN</option>
            </select>
          </a>

          {/* three components */}
          <a href="">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          {/* orders */}
          <a href="">
            <p>returns</p>
            <span>& Orders</span>
          </a>
          {/* cart */}
          <a to={"/cart"} className={classes.cart}>
            <BiCart size={38} />

            <span className={classes.orders}>0</span>
            <span>Cart</span>
          </a>
        </div>
      </div>
      <LowerHeader />
    </>
  );
}

export default Header;
