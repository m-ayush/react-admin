import React from "react";
import ReactDOM from "react-dom";
import EditPosition from "./EditPosition";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EditPosition />, div);
  ReactDOM.unmountComponentAtNode(div);
});
