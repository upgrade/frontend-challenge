import React, { Component } from "react";
class SignUpStepComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: sessionStorage.getItem("firstName") || "",
      email: sessionStorage.getItem("email") || "",
      password: sessionStorage.getItem("password") || "",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    sessionStorage.setItem("firstName", this.state.firstName);
    sessionStorage.setItem("email", this.state.email);
    sessionStorage.setItem("password", this.state.password);
    window.location.href = "/more-infos";
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="step">
        <div className="step-content">
          <h1>{"Sign up"}</h1>
          <form className="sign-up-form" onSubmit={this.onSubmit}>
            <div className="input-wrapper">
              <input
                name={"firstName"}
                type={"text"}
                placeholder={"First Name"}
                value={this.state.firstName}
                onChange={this.onInputChange}
                autoComplete="given-name"
                required={true}
              />
            </div>
            <div className="input-wrapper">
              <input
                name={"email"}
                type={"email"}
                placeholder={"E-mail"}
                value={this.state.email}
                onChange={this.onInputChange}
                autoComplete="email"
                required={true}
              />
            </div>
            <div className="input-wrapper">
              <input
                name={"password"}
                type={"password"}
                placeholder={"Password"}
                value={this.state.password}
                onChange={this.onInputChange}
                autoComplete="new-password"
                required={true}
                minLength={6}
                maxLength={64}
              />
              <br />
            </div>
            <div className="buttons">
              <button
                disabled={
                  !this.state.firstName ||
                  !this.state.email ||
                  !this.state.password
                }
              >
                {"Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpStepComponent;
