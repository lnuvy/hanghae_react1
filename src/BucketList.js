// 리액트 패키지를 불러옵니다.
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BucketList = ({ list }) => {
  const navigate = useNavigate();

  const my_lists = list;
  const my_wrap = React.useRef(null);

  // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.

  window.setTimeout(() => {
    console.log(my_wrap);
  }, 1000);

  return (
    <div ref={my_wrap}>
      {
        // js의 내장 함수 중 하나인 map입니다. 리스트의 갯수만큼 => 오른쪽 구문을 반복해요.
        // 자세한 사용법은 아래 링크를 확인해주세요.
        // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        my_lists.map((list, index) => {
          // 콘솔을 확인해봅시다 :)
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
        })
      }
    </div>
  );
};

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default BucketList;
