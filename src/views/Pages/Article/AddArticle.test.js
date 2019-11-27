import React from "react";
import ReactDOM from "react-dom";
import AddArticle from "./AddArticle";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddArticle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
