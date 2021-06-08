import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// @ts-expect-error more detail on https://github.com/reactwg/react-18/discussions/5
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
