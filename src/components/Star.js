import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Star = (props) => {
  const { grade } = props;
  const params = useParams();
  const [star, setStar] = useState(!params.index ? grade : -1);
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
      setStar(index);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <BallWrap>
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <Ball
              key={i}
              onClick={() => ballClick(i)}
              color={star >= i ? "#7365c7" : "#eee"}
            />
          );
        })}
      </BallWrap>
      {params.index ? (
        <Btn onClick={() => navigate(-1)}>평점 남기기</Btn>
      ) : null}
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
