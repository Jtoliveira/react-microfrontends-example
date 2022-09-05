import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import RemotePage from "./RemotePage";

const App = () => (
  <RemotePage />
);

ReactDOM.render(<App />, document.getElementById("app"));
