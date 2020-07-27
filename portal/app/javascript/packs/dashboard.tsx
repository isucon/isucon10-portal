import React from "react";
import ReactDOM from "react-dom";

import { Dashboard } from "../Dashboard";
import { ApiClient } from "../ApiClient";
import { updateNavBarSession } from "../NavbarSession";

(async function () {
  const client = new ApiClient();
  const session = await client.getCurrentSession();
  updateNavBarSession(session);
  const elem = document.getElementById('dashboard');
  ReactDOM.render(
    <Dashboard client={client} />,
    elem,
  );
})();
