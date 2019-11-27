import React from "react";
import ReactDOM from "react-dom";
import EditArticle from "./EditArticle";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EditArticle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
