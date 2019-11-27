import React from "react";
import ReactDOM from "react-dom";
import ViewFile from "./ViewFile";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ViewFile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
