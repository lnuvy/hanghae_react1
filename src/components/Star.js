import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { updateStar } from "../redux/modules/week";

const Star = (props) => {
  const { star } = props;
  const { params } = props;
  const [clickChange, setClickChange] = useState(
    [false, false, false, false, false].fill(true, 0, star)
  );

  // 이렇게하면 바뀌네
  // useEffect(() => {
  //   console.log(clickChange);
  // }, [clickChange]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.index) window.addEventListener("keydown", handlePress);

    return () => {
      window.removeEventListener("keydown", handlePress);
    };
  }, []);

  const handlePress = (e) => {
    if (!([0, 1, 2, 3, 4, 5].indexOf(parseInt(e.key)) === -1)) {
      ballClick(e.key - 1);
    }
  };

  const ballClick = (index) => {
    if (params.index) {
      setClickChange(new Array(5).fill(false).fill(true, 0, index + 1));
    }
    // 여긴 왜 키보드 입력시 state가 안변할까 ?
    console.log(clickChange);
  };

  const handleChange = () => {
    const new_star = clickChange.filter((el) => el).length;
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
