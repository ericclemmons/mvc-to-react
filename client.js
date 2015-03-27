import React from "react";

import Home from "./components/Home";

React.render(<Home path={window.location.pathname} />, document.getElementById("app"));
