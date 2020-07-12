import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpStepComponent from "./steps/SignUpComponent";
import AdditionalInfoStepComponent from "./steps/AdditionalInfoStep";
import ConfirmationStepComponent from "./steps/ConfirmationStep";
import CompletionStepComponent from "./steps/CompletionStep";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <SignUpStepComponent />
            </Route>
            <Route path="/more-infos">
              <AdditionalInfoStepComponent />
            </Route>
            <Route path="/confirmation">
              <ConfirmationStepComponent />
            </Route>
            <Route path="/success">
              <CompletionStepComponent success={true} />
            </Route>
            <Route path="/error">
              <CompletionStepComponent success={false} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
