import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.css";
import Main from "./components/Main";
import Detail from "./components/Detail";

function App() {
  const ref = useRef();
  const [name, setName] = useState("누구누구");

  const nameChange = () => {
    setName(ref.current.value);
    ref.current.value = "";
  };

  return (
    <div className="App">
      <Container>
        {name.length > 4 ? (
          <Title>
            <Name>{name}</Name>
            의<br /> 일주일은 ?
          </Title>
        ) : (
          <Title>
            <Name>{name}</Name>의 일주일은 ?
          </Title>
        )}

        <Line />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:index" element={<Detail />} />
        </Routes>
      </Container>
      <Input>
        <input ref={ref} type="text" />
        <button onClick={nameChange}>이름 바꾸기</button>
      </Input>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  min-width: 300px;
  width: 50vw;
  height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 40px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Input = styled.div`
  max-width: 350px;
  min-width: 300px;
  width: 50vw;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;

  & > * {
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

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Name = styled.span`
  background: #7365c7a6;
  color: #fff;
  padding: 0px 6px;
  border-radius: 10px;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
