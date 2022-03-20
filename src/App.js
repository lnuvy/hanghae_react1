import React from "react";
import logo from "./logo.svg";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import "./style.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Detail from "./Detail";

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };

    this.text = React.createRef();
  }

  componentDidMount() {}

  addBucket = () => {
    const inputText = this.text.current.value;
    this.setState({ list: [...this.state.list, inputText] });
  };

  render() {
    return (
      <AppWrap>
        <Container>
          <Title>버킷 리스트</Title>
          <Line />
          <Routes>
            <Route path="/" element={<BucketList list={this.state.list} />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </Container>

        <InputWrap>
          <input type="text" ref={this.text} />
          <button onClick={this.addBucket}>추가하기</button>
        </InputWrap>
      </AppWrap>
    );
  }
}

const AppWrap = styled.div`
  background-color: #eee;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  height: 80vh;
  margin: auto;
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
  width: 50vw;
  max-width: 350px;
  margin: auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export default App;
