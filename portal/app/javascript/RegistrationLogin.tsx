import {isuxportal} from "./pb";
import {ApiClient} from "./ApiClient";
import React from "react";

export interface Props {
  client: ApiClient,
  session: isuxportal.proto.services.common.GetCurrentSessionResponse,
  registrationSession: isuxportal.proto.services.registration.GetRegistrationSessionResponse,
}

export interface State {
}

export class RegistrationLogin extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return <section className="mt-2">
      <h3 className="title is-3">ログイン</h3>
        <p>ISUCON10 の参加登録には、<a href="https://github.com">GitHub</a> と <a href="https://discord.com">Discord</a> のアカウントが必要です。<a href="/terms">参加規約</a> に同意の上、それぞれのアカウントでログインをお願いします。</p>
        <div className="columns mt-1">
          <div className="column is-4">{this.renderGithubLogin()}</div>
          <div className="column is-4">{this.renderDiscordLogin()}</div>
        </div>
    </section>;
  }

  githubLoginUrl() {
    return (document.querySelector('meta[name="isux:github-auth-path"]') as HTMLMetaElement).content;
  }

  discordLoginUrl() {
    return (document.querySelector('meta[name="isux:discord-auth-path"]') as HTMLMetaElement).content;
  }

  public renderLogin(title: string, loginUrl: string, username?: string, avatarUrl?: string) {
    if (username && username !== "" && avatarUrl) {
      return <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={avatarUrl} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-5">{title}</p>
              <p className="subtitle is-6">{username}</p>
            </div>
            <div className="level-right">
              <a href={loginUrl} className="button is-light level-item">変更</a>
            </div>
          </div>
        </div>
      </div>;
    } else {
      return <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <a href={loginUrl} className="button is-info">{title} でログイン</a>
            </div>
          </div>
        </div>
      </div>;

    }
  }

  public renderGithubLogin() {
    return this.renderLogin('GitHub', this.githubLoginUrl(), this.props.registrationSession.githubLogin, this.props.registrationSession.githubAvatarUrl);
  }

  public renderDiscordLogin() {
    return this.renderLogin('Discord', this.discordLoginUrl(), this.props.registrationSession.discordTag, this.props.registrationSession.discordAvatarUrl);
  }
}

