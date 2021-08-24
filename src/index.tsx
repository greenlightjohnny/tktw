import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const unused = "something";
  return <h1>Day One</h1>;
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
