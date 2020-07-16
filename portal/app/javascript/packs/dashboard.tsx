import React from "react";
import ReactDOM from "react-dom";

import { Dashboard } from "../Dashboard";

(async function() {
  const elem = document.getElementById('dashboard');
  ReactDOM.render(
    <Dashboard />,
    elem,
  );
})();
