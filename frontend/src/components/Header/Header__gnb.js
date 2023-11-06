import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Header__gnb.css";

export default function () {
  const [login, setLogin] = useState("");

  // 가상의 유저 정보가 있다고 가정함. 로그인 구현까지는 시간이 안 될 것 같음.
  const user = [
    {
      id: "1",
      ico: "./frontend/src/components/_Asset/ico.png",
      fav: ["Python", "Javascript", "NodeJS"],
    },
    {
      id: "2",
      ico: "https://lh3.googleusercontent.com/a/ACg8ocKs3bH9t4CR4NFkQLaTd4ghMhjbSXOV-1_xDyhbuhWM77I=s96-c",
      fav: ["Python", "Javascript", "NodeJS"],
    },
    {
      id: "3",
      ico: "https://cdn-icons-png.flaticon.com/128/3917/3917706.png",
      fav: ["Python", "Javascript", "NodeJS"],
    },
  ];
  const userStyle = [
    {
      backgroundImage: `url('/image/ico.png')`,
      backgroundSize: "50px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    {
      backgroundImage: `url('https://lh3.googleusercontent.com/a/ACg8ocKs3bH9t4CR4NFkQLaTd4ghMhjbSXOV-1_xDyhbuhWM77I=s96-c')`,
      backgroundSize: "50px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    {
      backgroundImage: `url('https://cdn-icons-png.flaticon.com/128/3917/3917706.png')`,
      backgroundSize: "50px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
  ];

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
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <li className="gnb_item">
                <a href="#">로그인</a>
              </li>
            }
          ></Route>
          <Route
            path="/1*"
            element={
              <li className="gnb_item user" style={userStyle[0]}>
                <a href="#"></a>
              </li>
            }
          ></Route>
          <Route
            path="/2*"
            element={
              <li className="gnb_item user" style={userStyle[1]}>
                <a href="#"></a>
              </li>
            }
          ></Route>
          <Route
            path="/3*"
            element={
              <li className="gnb_item user" style={userStyle[2]}>
                <a href="#"></a>
              </li>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </ul>
  );
}
