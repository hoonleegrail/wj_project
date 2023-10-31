import React, { useState } from "react";
import "./Header__search.css";

export default function () {
  return (
    <div className="search">
      <div className="search-box">
        <form
          action="/search"
          className="search-form"
          onsubmit="return f_ValidateKeyword()"
        >
          <input
            type="search"
            name="s"
            placeholder="원하는 강의를 찾아보세요"
            maxLength={100}
          />
          <button onSubmit=""></button>
        </form>
      </div>
    </div>
  );
}
