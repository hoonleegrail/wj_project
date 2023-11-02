import React, { useState } from "react";
import "./Header__menu.css";

export default () => {
  // json 파일을 읽어들여서 호출하는 형태로 바꾸고 싶은데...
  const categories = [
    ["개발", "/develope"],
    ["비즈니스", "/business"],
    ["재무 및 회계", "/finance"],
    ["IT 및 소프트웨어", "/sw"],
    ["사무 생산성", "/office"],
    ["자기 계발", "/self-develope"],
    ["디자인", "/design"],
    ["마케팅", "/marketing"],
    ["라이프스타일", "/life-style"],
    ["사진 및 영상", "/photo"],
    ["건강 및 피트니스", "/fitness"],
    ["음악", "/music"],
    ["교육 및 학문", "/study"],
  ];

  const event = [
    { name: "2023 AI해커톤", url: "#", className: "special" },
    { name: "게임 강의 로드맵", url: "#", className: "special" },
    { name: "직무별 Best 강의", url: "#", className: "" },
    { name: "도전! 강사되기", url: "#", className: "" },
  ];

  return (
    <div className="qmenu">
      <ul className="inner">
        <li className="category">
          <a href="#">카테고리</a>
          <ul>
            {categories.map((el) => {
              return (
                <li>
                  <a href={el[1]}>{el[0]}</a>
                </li>
              );
            })}
          </ul>
        </li>
        {event.map((el) => {
          return (
            <li className={el.className}>
              <a href={el.url}>{el.name}</a>
            </li>
          );
        })}
        <li className="uService float__right">
          <a href="#">유데미 서비스</a>
        </li>
      </ul>
    </div>
  );
};
