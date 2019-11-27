import React from "react";
import ReactDOM from "react-dom";
import ViewAnnoucements from "./ViewAnnoucements";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ViewAnnoucements />, div);
  ReactDOM.unmountComponentAtNode(div);
});
