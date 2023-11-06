import React, { useState } from "react";
import Recommand from "./Recommand";
import SearchBar from "./SearchBar";
import "./Search.css";

export default (props) => {
  // userID에 따른 추천 키워드.. ReactRoute에 대해서 잘 몰라서, 조건 분기를 못 만들었다.
  const userIDRecommands = [
    [
      { url: "#", result: "numpy" },
      { url: "#", result: "pandas" },
      { url: "#", result: "matplotlib" },
      { url: "#", result: "r" },
      { url: "#", result: "library" },
    ],
    [
      { url: "#", result: "pandas" },
      { url: "#", result: "matplotlib" },
      { url: "#", result: "library" },
      { url: "#", result: "plotly" },
      { url: "#", result: "julia" },
    ],
    [
      { url: "#", result: "multithreading" },
      { url: "#", result: "ee" },
      { url: "#", result: "concurrency" },
      { url: "#", result: "jsp" },
      { url: "#", result: "reactive" },
    ],
  ];

  const [isSearch, setIsSearch] = useState(null);
  const [relativeSearch, setRelativeSearch] = useState(null);
  const [isSearchResult, setIsSearchResult] = useState(userIDRecommands[2]);

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

  if (isSearch === "python") {
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
  } else if (isSearch === "java") {
    return (
      <div className="search_box__container inner">
        <div className="search__AI">
          <SearchBar inputChangeHanler={inputChangeHanler} />
          <Recommand op={props.op}></Recommand>
        </div>
        <div className="result__text">"{isSearch}"에 대한 검색 결과</div>
        <div className="result__box">
          <span>추천 검색어 | </span>
          {userIDRecommands[2].map((el) => {
            return <a href={el.url}>{el.result}</a>;
          })}
        </div>
      </div>
    );
  } else {
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
  }
};
