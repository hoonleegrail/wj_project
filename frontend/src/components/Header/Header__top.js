import React, { useState } from "react";
import Header__home from "./Header__home";
import Header__search from "./Header__search";
import Header__gnb from "./Header__gnb";
import "./Header__top.css";

export default () => {
  return (
    <div className="header_top inner">
      <Header__home />
      <Header__search />
      <Header__gnb />
    </div>
  );
};
