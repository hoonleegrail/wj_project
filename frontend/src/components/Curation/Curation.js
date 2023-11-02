import React, { useState } from "react";
import Pick from "./Pick";
import "./Curation.css";

export default () => {
  const [containerLeft, setContainerLeft] = useState(0);
  const [isButtonShow, setIsButtonShow] = useState(0);
  const [leftShow, setLeftShow] = useState("none");
  const [rightShow, setRightShow] = useState("block");

  const pickLeft = () => {
    if (isButtonShow - 1 === 0) setLeftShow("none");
    if (isButtonShow - 1 !== 3) setRightShow("block");
    setIsButtonShow(isButtonShow - 1);
    setContainerLeft((prevLeft) => prevLeft - 360);
  };

  const pickRight = () => {
    if (isButtonShow + 1 !== 0) setLeftShow("block");
    if (isButtonShow + 1 === 3) setRightShow("none");
    setIsButtonShow(isButtonShow + 1);
    setContainerLeft((prevLeft) => prevLeft + 360);
  };

  return (
    <div className="curation_container inner">
      <h2>큐레이션 Pick</h2>
      <span>
        <strong>로그인시</strong> 개인 맞춤형 강의를 추천해드려요!
      </span>
      <button className="more">더보기</button>
      <button className="left" onClick={pickLeft} style={{ display: leftShow }}>
        {"<"}
      </button>
      <button
        className="right"
        onClick={pickRight}
        style={{ display: rightShow }}
      >
        {">"}
      </button>
      <div className="pick_container">
        <div className="pick_wrap" style={{ left: `-${containerLeft}px` }}>
          <Pick />
          <Pick />
          <Pick />
          <Pick />
          <Pick />
          <Pick />
        </div>
      </div>
    </div>
  );
};
