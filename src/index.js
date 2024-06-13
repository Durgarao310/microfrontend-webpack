import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);
  return <h1>Hello, world!{count}</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));


