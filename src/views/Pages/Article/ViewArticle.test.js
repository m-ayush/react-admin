import React from "react";
import ReactDOM from "react-dom";
import ViewArticle from "./ViewArticle";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ViewArticle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
