import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { updateStar } from "../redux/modules/week";

const Star = (props) => {
  const { star } = props;
  const { params } = props;

  // 매니저님 물어볼거 (메인 페이지에서 수정을 못하도록 true,false 처럼 조건을 줬는데 params 값받는게 없을때 {}이 나오는 이유)
  // console.log(params);

  const [clickChange, setClickChange] = useState(
    [false, false, false, false, false].fill(true, 0, star)
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 매니저님 물어볼거 ( 키보드 입력 시에도 state가 변해야 맞는거같은데 왜 실제 state에서는 변하지 않는지)
  useEffect(() => {
    if (params.index) window.addEventListener("keydown", handlePress);
    return () => {
      window.removeEventListener("keydown", handlePress);
    };
  }, []);

  const handlePress = (e) => {
    if (!([0, 1, 2, 3, 4, 5].indexOf(parseInt(e.key)) === -1)) {
      // console.log(e.key);
      ballClick(parseInt(e.key) - 1);
    }
    if (e.key === "Enter") {
      handleChange();
      console.log(e);
    }
  };

  // (리팩토링 방법...? 너무 무식한거같음)
  const ballClick = (index) => {
    if (params.index) {
      switch (index) {
        case 0:
          setClickChange([true, false, false, false, false]);
          console.log(clickChange);
          break;
        case 1:
          setClickChange([true, true, false, false, false]);
          console.log(clickChange);
          break;
        case 2:
          setClickChange([true, true, true, false, false]);
          console.log(clickChange);
          break;
        case 3:
          setClickChange([true, true, true, true, false]);
          console.log(clickChange);
          break;
        case 4:
          setClickChange([true, true, true, true, true]);
          console.log(clickChange);
          break;
        default:
          setClickChange([false, false, false, false, false]);
      }
    }
  };

  const handleChange = () => {
    const new_star = clickChange.filter((el) => el).length;
    console.log("(handleChange 안)색칠된 공 개수:", new_star);
    dispatch(updateStar(new_star, params.index));
    navigate(-1);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <BallWrap>
        {clickChange.map((el, i) => (
          <Ball
            onClick={() => ballClick(i)}
            key={i}
            color={el ? "#7365c7" : "#eee"}
          />
        ))}
      </BallWrap>
      {params.index ? <Btn onClick={handleChange}>평점 남기기</Btn> : null}
    </div>
  );
};

const BallWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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

const Btn = styled.button`
  width: 60%;
  height: 36px;
  background-color: #d2b0e3;
  margin: 20px auto;
  outline: none;
  border: none;
  font-size: 1.1rem;
  border-radius: 5px;
  box-shadow: 2px 2px #a687b5;

  &:hover {
    cursor: pointer;
  }

  &:active {
    position: relative;
    top: 2px;
    left: 2px;
    box-shadow: none;
  }
`;

export default Star;
