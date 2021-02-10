import React from "react";
import { connect } from "react-redux";
import Logo from "../../assets/images/logo.svg";
import { STEPS } from "../../constants";
import Construction from "../../assets/images/Construction.svg";

const LeftSideBar = ({ currentStep, steps }) => {
  return (
    <div className="side-bar">
      <img src={Logo} alt="logo" />
      <div className="steps">
        {STEPS.map((step) => (
          <div className="step" key={step.id}>
            {steps.includes(step.step) ? (
              <i class="fa fa-check-circle step-over" aria-hidden="true"></i>
            ) : (
              <p
                className={`step-value ${
                  step.step === currentStep ? "current-step" : null
                }`}
              >
                {step.step}
              </p>
            )}
            <p
              className={`step-title ${
                step.step === currentStep || steps.includes(step.step)
                  ? "current-step"
                  : null
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      <div className="image-cover">
        <img src={Construction} alt="Construction" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentStep: state.auth.Step,
  steps: state.auth.Steps,
});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSideBar);
