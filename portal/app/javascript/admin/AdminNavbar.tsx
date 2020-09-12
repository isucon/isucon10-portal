import type { isuxportal } from "../pb_admin";
import { AdminApiClient } from "./AdminApiClient";
import * as Rails from "@rails/ujs";

import React from "react";
import { Link } from "react-router-dom";

import { ErrorMessage } from "../ErrorMessage";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: AdminApiClient;
}

export interface State {}

export class AdminNavbar extends React.Component<Props, State> {
  navbarMenu: React.RefObject<HTMLDivElement>;
  constructor(props: Props) {
    super(props);
    this.state = {};
    this.navbarMenu = React.createRef();
  }

  public componentDidMount() {
    const menu = this.navbarMenu.current;
    console.log("a");
    if (menu) {
      console.log("b");
      menu.className = "navbar-menu is-active";
      const targetName = menu.dataset.target;
      menu.addEventListener("onclick", () => {
        console.log("click");
      });
    }
  }

  public render() {
    return (
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/contestant">
              ISUCON10 Admin
            </Link>
            <div
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="isux-navbar-admin-header-items"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
          <div id="isux-navbar-admin-header-items" className="navbar-menu" ref={this.navbarMenu}>
            <div className="navbar-start">
              <a className="navbar-item" href="/teams">
                チーム一覧
              </a>
              <a className="navbar-item" href="/terms">
                規約
              </a>
              <a className="navbar-item" href="/rules">
                レギュレーション
              </a>
              <a className="navbar-item" href="/">
                パブリックダッシュボード
              </a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  onLogout(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "/session";
    document.body.appendChild(form);

    const csrfToken = document.createElement("input");
    csrfToken.type = "hidden";
    csrfToken.name = Rails.csrfParam() || "";
    csrfToken.value = Rails.csrfToken() || "";
    form.appendChild(csrfToken);

    const method = document.createElement("input");
    method.type = "hidden";
    method.name = "_method";
    method.value = "delete";
    form.appendChild(method);

    form.submit();
  }
}
