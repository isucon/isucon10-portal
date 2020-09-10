import { ApiClient } from "../ApiClient";
import { updateNavBarSession } from "../NavbarSession";
import { AdminApp } from "../AdminApp";
import React from "react";
import ReactDOM from "react-dom";

(async function () {
  const client = new ApiClient();
  const session = await client.getCurrentSession();
  updateNavBarSession(session);
  const elem = document.getElementById("app");
  ReactDOM.render(<AdminApp session={session} client={client} />, elem);
})();
