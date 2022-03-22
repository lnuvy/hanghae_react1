import React, { useRef } from "react";
import logo from "./logo.svg";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import "./style.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import NotFound from "./NotFound";
import { useDispatch } from "react-redux";
import { createBucket } from "./redux/modules/bucket";
import Progress from "./Progress";

// 클래스형 컴포넌트는 이렇게 생겼습니다!
function App() {
  const text = useRef(null);
  const dispatch = useDispatch();

  const addBucket = () => {
    dispatch(createBucket(text.current.value));
  };

  return (
    <AppWrap>
      <Container>
        <Title>버킷 리스트</Title>
        <Progress />
        <Line />
        <Routes>
          <Route path="/" element={<BucketList />} />
          <Route path="/detail/:index" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <InputWrap>
        <input type="text" ref={text} />
        <button onClick={addBucket}>추가하기</button>
      </InputWrap>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        위로 가기
      </button>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  background-color: #eee;
  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  background-color: #fff;
  max-width: 350px;
  min-height: 60vh;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
`;

const InputWrap = styled.div`
  background-color: #fff;
  max-width: 350px;
  min-height: 10vh;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  & > * {
    padding: 5px;
  }
  & input {
    border: 1px solid #888;
    width: 70%;
    margin-right: 10px;
  }
  & input:focus {
    outline: none;
    border: 1px solid #a673ff;
  }
  & button {
    width: 25%;
    color: #fff;
    border: #a673ff;
    background: #a673ff;
  }
`;

export default App;
