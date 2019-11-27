import React from "react";
import ReactDOM from "react-dom";
import ViewPosition from "./ViewPosition";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ViewPosition />, div);
  ReactDOM.unmountComponentAtNode(div);
});
