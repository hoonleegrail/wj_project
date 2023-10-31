import React, { useState } from "react";
import Header__top from "./Header__top";
import Header__menu from "./Header__menu";
import "./Header.css";

export default () => {
  return (
    <header className="header">
      <Header__top />
      <Header__menu />
    </header>
  );
};
