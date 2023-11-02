import React, { useState } from "react";
import Recommand from "./Recommand";
import SearchBar from "./SearchBar";
import "./Search.css";

export default (props) => {
  const [isSearch, setIsSearch] = useState(null);
  const [relativeSearch, setRelativeSearch] = useState(null);
  const [isSearchResult, setIsSearchResult] = useState([
    { url: "#", result: "ChatGPT" },
    { url: "#", result: "파이썬" },
    { url: "#", result: "프론트엔드 개발" },
    { url: "#", result: "백엔드 개발" },
    { url: "#", result: "파이썬" },
    { url: "#", result: "프론트엔드 개발" },
    { url: "#", result: "백엔드 개발" },
  ]);

  const inputChangeHanler = (input) => {
    setIsSearch(input.target.value);
    searchResultFetch(input.target.value);
  };

  const searchResultFetch = async (searchText) => {
    const searchAIURL = `https://some-api.com/search?query=${searchText}`;
    try {
      // 사실 데이터가 어떻게 오는지 몰라서 ... 작성하기가 좀 그러네
      const response = await fetch(searchAIURL);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      setIsSearchResult(data);
    } catch (error) {
      console.error("Error:", error);
    }
    // FIXME: 여기도 fetch를 해서 유사 검색어를 노출하게 해야 하는데...🥲
    const relativeURL = `https://some-api.com/search?query=${searchText}`;
    try {
      const response = await fetch(relativeURL);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      setRelativeSearch(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!isSearch) {
    return (
      <div className="search_box__container">
        <div className="search__AI inner">
          <SearchBar inputChangeHanler={inputChangeHanler} />
          <Recommand op={props.op}></Recommand>
          <div className="tempBox"></div>
        </div>
        <div></div>
      </div>
    );
  } else {
    return (
      <div className="search_box__container inner">
        <div className="search__AI">
          <SearchBar inputChangeHanler={inputChangeHanler} />
          <Recommand op={props.op}></Recommand>
        </div>
        <div className="result__text">"{isSearch}"에 대한 검색 결과</div>
        <div className="result__box">
          <span>추천 검색어 | </span>
          {isSearchResult.map((el) => {
            return <a href={el.url}>{el.result}</a>;
          })}
        </div>
      </div>
    );
  }
};
