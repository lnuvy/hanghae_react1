import { Children } from "react";
import "./App.css";
import LifecycleEx from "./LifecycleEx";
import React from "react";

function App() {
  const [isCat, setIsCat] = React.useState(true);

  return (
    <div className="App">
      {isCat ? <LifecycleEx /> : null}
      <button
        onClick={() => {
          setIsCat(!isCat);
        }}
      >
        바꾸기
      </button>
    </div>
  );
}

export default App;
