import React from "react";

const CompletionStepComponent = ({ success }) => (
  <div className="step">
    <div className="step-content">
      <h1>{success ? "Success!" : "Error"}</h1>
      <img
        src={success ? "/success.svg" : "/error.svg"}
        width={20}
        height={20}
        alt={success ? "Success" : "Error"}
      />
      <p className="completion-step-text">
        {success
          ? "You should receive a confirmation email soon."
          : "Uh oh, something went wrong. Please try again later."}
      </p>
      <div className="buttons">
        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          {"Restart"}
        </button>
      </div>
    </div>
  </div>
);

export default CompletionStepComponent;
