import React from "react";

import Context from "./components/Context";
import Home from "./components/Home";

const context = window.context;

React.render((
  <Context {...context} view={Home} />
), document.getElementById("app"));
