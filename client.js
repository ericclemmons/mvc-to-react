import React from "react";

import Context from "./components/Context";
import Home from "./components/Home";

const context = window.context;

React.render((
  <Context {...context}>
    <Home />
  </Context>
), document.getElementById("app"));
