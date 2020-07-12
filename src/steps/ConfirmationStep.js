import React, { Component } from "react";
import LoadingComponent from "../components/LoadingComponent";

class ConfirmationStepComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      email: "",
      password: "",
      color: "",
      terms: false,
      isLoading: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      firstName: sessionStorage.getItem("firstName"),
      email: sessionStorage.getItem("email"),
      password: sessionStorage.getItem("password"),
      color: sessionStorage.getItem("color"),
      terms: Boolean(sessionStorage.getItem("terms")),
    });
  }

  async onSubmit() {
    this.setState({
      isLoading: true,
    });
    const response = await fetch("http://localhost:3001/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.firstName,
        email: this.state.email,
        password: this.state.password,
        color: this.state.color,
        terms: this.state.terms,
      }),
    });
    if (response) {
      sessionStorage.clear();
      if (response.status === 200) {
        window.location.href = "/success";
      } else {
        window.location.href = "/error";
      }
    }
  }

  onBackClick() {
    window.history.back();
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingComponent />;
    }
    return (
      <div className="step">
        <div className="step-content">
          <h1>{"Confirmation"}</h1>
          <ul>
            <li>{`First Name: ${this.state.firstName}`}</li>
            <li>{`Email: ${this.state.email}`}</li>
            <li>{`Password: ${"*".repeat(this.state.password.length)}`}</li>
            <li>{`Favorite color: ${this.state.color}`}</li>
            <li>{`Terms and conditions: ${
              this.state.terms ? "Agreed" : "Not agreed"
            }`}</li>
          </ul>
          <div className="buttons">
            <button onClick={this.onBackClick}>{`Back`}</button>
            <button onClick={this.onSubmit}>{`Submit`}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmationStepComponent;
