import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Star from "./Star";
import styled from "styled-components";

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();

  const week = state.split("")[0];
  const star = state.split("")[1];

  return (
    <DetailWrap>
      <h2>
        <span
          style={{
            color: "#fff",
            padding: "0px 8px",
            background: "#ffc107de",
            borderRadius: "6px",
          }}
        >
          {week}요일
        </span>
        &nbsp; 평점 남기기!
      </h2>
      <hr />
      <Star star={star} params={params} />
      <BackBtn
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </BackBtn>
    </DetailWrap>
  );
};

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackBtn = styled.button`
  width: 60%;
  height: 36px;
  background-color: purple;
  outline: none;
  border: none;
  font-size: 1.1rem;
  border-radius: 5px;
  color: #fff;
  box-shadow: 2px 2px #580058;
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

export default Detail;
