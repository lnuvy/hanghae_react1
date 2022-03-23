import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Star from "./Star";
import styled from "styled-components";

const Main = (props) => {
  const { weeks } = props;
  const params = useParams();
  const navagate = useNavigate();

  const randoms = Array.from({ length: 7 }, () =>
    Math.floor(Math.random() * 5)
  );
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
            <Star grade={randoms[i]} />
            <Semo
              onClick={() => {
                navagate(`/detail/${weeks[i]}`, {
                  state: { grade: randoms[i] },
                });
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
