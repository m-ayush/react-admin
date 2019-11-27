import React from "react";
import ReactDOM from "react-dom";
import EditFiles from "./EditFiles";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EditFiles />, div);
  ReactDOM.unmountComponentAtNode(div);
});
