import React, { useState } from "react";
import styled from "styled-components";

const Star = (props) => {
  const { star } = props;
  const [clickChange, setClickChange] = useState(
    [false, false, false, false, false].fill(true, 0, star)
  );
  const ballClick = (index) => {
    switch (index) {
      case 0:
        setClickChange([true, false, false, false, false]);
        break;
      case 1:
        setClickChange([true, true, false, false, false]);
        break;
      case 2:
        setClickChange([true, true, true, false, false]);
        break;
      case 3:
        setClickChange([true, true, true, true, false]);
        break;
      case 4:
        setClickChange([true, true, true, true, true]);
        break;
      default:
        return;
    }
  };

  return (
    <BallWrap>
      {clickChange.map((el, i) => (
        <Ball
          onClick={() => ballClick(i)}
          key={i}
          color={el ? "#7365c7" : "#eee"}
        />
      ))}
    </BallWrap>
  );
};

const BallWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-contents: center;
  align-items: center;
  margin: auto;
`;

const Ball = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 20px;
  background: ${(props) => props.color};
  margin: auto 5px;
`;

// const ColorBall = styled.div`
//   width: 36px;
//   height: 36px;
//   border-radius: 20px;
//   background: #7365c7;
//   margin: auto;
// `;

export default Star;
