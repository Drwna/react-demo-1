import React from "react";

const App = () => {
  return (
    // React.createElement()
    <div>
      App 组件
      <Component />
      <Loop numbers={[1, 2, 3, 4]} />
    </div>
  );
};

const Component = () => {
  let inner;
  let n = window.prompt("enter a number");
  if (n % 2 === 0) {
    inner = <div>n是偶数</div>;
  } else {
    inner = <span>n是奇数</span>;
  }
  const content = <div>{inner}</div>;
  return content;
};

const Loop = (props) => {
  const array = [];
  for (let i = 0; i < props.numbers.length; i++) {
    array.push(
      <div key={i}>
        下标为{i}值为{props.numbers[i]}
      </div>
    );
  }
  return <div>{array}</div>;
};

export default App;
