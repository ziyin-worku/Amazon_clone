import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

import classes from "./Header.module.css";

function LowerHeader() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <a href="">
            {/* icons  */}
            <AiOutlineMenu fontWeight={800} fontSize={24}/>
            All
          </a>
        </li>
        <li>
          <a href="">Today's Deals</a>
        </li>
        <li>
          <a href="">Customer Service</a>
        </li>
        <li>
          <a href="">Registry</a>
        </li>
        <li>
          <a href="">Gift cards</a>
        </li>
        <li>
          <a href="">Sell</a>
        </li>
      </ul>
    </div>
  );
}

export default LowerHeader;
