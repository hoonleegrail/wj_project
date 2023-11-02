import React, { useState } from "react";
import "./Header__gnb.css";

export default function () {
  const [login, setLogin] = useState("");

  // 가상의 유저 정보가 있다고 가정함. 로그인 구현까지는 시간이 안 될 것 같음.
  const user = {
    id: "001",
    ico: "./frontend/src/components/_Asset/ico.png",
    fav: ["Python", "Javascript", "NodeJS"],
  };
  const userStyle = {
    backgroundImage: `url('/image/ico.png')`,
    backgroundSize: "50px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <ul className="header__gnb gnb">
      <li className="gnb_item">
        <a href="#">인사이트</a>
      </li>
      <li className="gnb_item">
        <a href="#">강사되기</a>
      </li>
      <li className="gnb_item">
        <a href="#">파트너</a>
      </li>
      <li className="gnb_item">
        <a href="#">기업교육</a>
      </li>
      <li className="gnb_item user" style={userStyle}>
        <a href="#"></a>
      </li>
    </ul>
  );
}
