import React, { useState } from "react";
import "./SearchBar.css";

export default (props) => {
  return (
    <div className="search__container">
      <input
        className="search__bar"
        type="text"
        placeholder="배움이 필요하다면? 검색해보세요!"
        onChange={props.inputChangeHanler}
      />
      <a href="#" className="search__icon"></a>
      <div className="search_relative">
        <ul className="keyword">
          {/* FIXME:여기에 data parsing 필요 */}
          <li>
            <a href="#">파이썬</a>
          </li>
          <li>
            <a href="#">프론트엔드</a>
          </li>
          <li>
            <a href="#">피트니스</a>
          </li>
          <li>
            <a href="#">프로젝트</a>
          </li>
          <li>
            <a href="#">프로젝트</a>
          </li>
          <li>
            <a href="#">ㅍXXX</a>
          </li>
          <li>
            <a href="#">ㅍXXX</a>
          </li>
        </ul>
        <hr />
        <h2>관련 기획전</h2>
        <ul className="relative_special_event">
          {/* FIXME:여기에 관련 기획전 내용이 나와야 함.. 지금은 하드코딩 */}
          <li>
            <a href="#">
              <img src="" alt="" />
              <span>[udemy큐레이션x우아한형제들] 개발자 성장 프로젝트</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="" alt="" />
              <span>프론트엔드 개발자를 위한 4주 완성 기술 블로그 챌린지</span>
            </a>
          </li>
        </ul>
        <div className="close">
          <button>닫기 X</button>
        </div>
      </div>
    </div>
  );
};
