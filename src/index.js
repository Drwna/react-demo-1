import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.querySelector("#root"));

const Component = () => {
  let inner;
  let n = 4;
  if (n % 2 === 0) {
    inner = <div>n是偶数</div>;
  } else {
    inner = <span>n是奇数</span>;
  }
  const content = <div>{inner}</div>;
  return content;
};

ReactDOM.render(<Component />, document.querySelector("#root2"));
