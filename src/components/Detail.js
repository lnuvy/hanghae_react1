import React, { useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Star from "./Star";

const Detail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { index } = useParams();

  const week = state.split("")[0];
  const star = state.split("")[1];

  return (
    <div>
      <span>{week}요일 평점 남기기!</span>
      <hr />
      <Star star={star} />
      <button
        onClick={() => {
          console.log(star);
        }}
      >
        평점 남기기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Detail;
