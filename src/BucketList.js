// 리액트 패키지를 불러옵니다.
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const BucketList = (props) => {
  const navigate = useNavigate();

  const my_wrap = React.useRef(null);

  const my_lists = useSelector((state) => state.bucket.list);

  window.setTimeout(() => {
    console.log(my_wrap);
  }, 1000);

  return (
    <div ref={my_wrap}>
      {my_lists.map((list, index) => {
        return (
          <ItemStyle
            key={index}
            onClick={() => {
              navigate("/detail");
            }}
          >
            {list}
          </ItemStyle>
        );
      })}
    </div>
  );
};

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

export default BucketList;
