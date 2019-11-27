import React from "react";
import ReactDOM from "react-dom";
import EditAnnouncments from "./EditAnnouncments";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EditAnnouncments />, div);
  ReactDOM.unmountComponentAtNode(div);
});
