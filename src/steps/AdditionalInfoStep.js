import React, { Component } from "react";
import LoadingComponent from "../components/LoadingComponent";

class AdditionalInfoStepComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      availableColors: [],
      terms: false,
      isLoading: true,
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.onToggleTerms = this.onToggleTerms.bind(this);
  }

  async componentDidMount() {
    const availableColors = await (
      await fetch("http://localhost:3001/api/colors")
    ).json();
    if (availableColors && availableColors.length > 0) {
      this.setState({
        availableColors,
        color: sessionStorage.getItem("color") || "",
        terms: Boolean(sessionStorage.getItem("terms")) || false,
        isLoading: false,
      });
    }
  }

  onHandleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onToggleTerms() {
    this.setState({
      terms: !this.state.terms,
    });
  }

  async onNextClick() {
    sessionStorage.setItem("color", this.state.color);
    sessionStorage.setItem("terms", this.state.terms);
    window.location.href = "/confirmation";
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
          <h1>{"Additional infos"}</h1>
          <div className="input-wrapper">
            <select
              name={"color"}
              value={this.state.color}
              onChange={this.onHandleChange}
            >
              <option value="">Select your favorite color</option>
              {this.state.availableColors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div className="flex-row">
            <input
              name="terms"
              type="checkbox"
              checked={this.state.terms}
              onChange={this.onToggleTerms}
            />
            <label htmlFor="terms" onClick={this.onToggleTerms}>
              {" "}
              I agree to <a href="/more-infos">terms and conditions</a>
            </label>
            <br></br>
          </div>
          <br />
          <div className="buttons">
            <button onClick={this.onBackClick}>{"Back"}</button>
            <button
              disabled={!this.state.color || !this.state.terms}
              onClick={this.onNextClick}
            >
              {"Next"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdditionalInfoStepComponent;
