import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Star from "./Star";
import styled from "styled-components";

// 요일 세기 (초기화되지않게 컴포넌트 위에 선언)
let count = 0;

const Main = () => {
  const params = useParams();
  const navagate = useNavigate();

  const weeks = useSelector((state) => state.week.week);
  const randoms = useSelector((state) => state.week.random);

  console.log("난수:", randoms);

  // 요일 찾기( 일 = 0 , 월 = 1, ... 토 = 6)
  const now = new Date().getDay();
  if (now !== count) {
    for (let i = 0; i < now; i++) {
      count++;
      weeks.push(weeks[0]);
      weeks.shift();
    }
  }

  return (
    <div>
      {weeks.map((el, i) => {
        return (
          <div
            key={i}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: "20px auto",
            }}
          >
            <Text>{el}</Text>
            <Star star={randoms[i]} params={params} />
            <Semo
              onClick={() => {
                navagate(`/detail/${i}`, { state: el + randoms[i] });
              }}
            ></Semo>
          </div>
        );
      })}
    </div>
  );
};

const Text = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

const Semo = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent #e3b0e3;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

export default Main;
