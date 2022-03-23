import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Star from "./Star";
import styled from "styled-components";

const Detail = () => {
  const { grade } = useLocation().state;
  const { index } = useParams();

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
          {index}요일
        </span>
        &nbsp; 평점 남기기!
      </h2>
      <hr />
      <Star grade={grade} />
    </DetailWrap>
  );
};

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Detail;
