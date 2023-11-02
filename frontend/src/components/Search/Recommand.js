import React from "react";
import "./Recommand.css";

export default (props) => {
  let top__number = 1;

  return (
    <div className="top__search">
      <div>인기 검색어</div>
      <ul className="recommand">
        {props.op.map((op) => {
          return (
            <li>
              <a href={op}>
                {top__number++}. {op}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
