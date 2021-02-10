import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import LeftSideBar from "../../components/LeftSideBar";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import {
  updateState,
  updateFormData,
  clearState,
} from "../../store/auth/action";
import history from "../../utils/history";
import { emailValidation, passwordValidation } from "../../utils/validations";

const Registration = ({ updateState, updateFormData, clearState }) => {
  const [UserDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [IsSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setUserDetails({ ...UserDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let values = Object.values(UserDetails);
    if (
      values.every((value) => value) &&
      !emailValidation(UserDetails.email) &&
      !passwordValidation(UserDetails.password)
    ) {
      updateState();
      updateFormData(UserDetails);
      history.push("/step-two");
    }
    setIsSubmitted(true);
  };

  useEffect(() => {
    clearState();
  }, []);
  return (
    <div className="container">
      <LeftSideBar />
      <div className="step-one">
        <div className="content">
          <p className="step-class">STEP 1</p>
          <p className="step-header">Lets get your details</p>
          <form>
            <TextField
              label="What is your name"
              value={UserDetails.name}
              name="name"
              placeHolder="Name"
              handleChange={handleInputChange}
              error={IsSubmitted && !UserDetails.name}
              errorText={IsSubmitted && !UserDetails.name && "Name is required"}
            />
            <TextField
              label="What is your email address?"
              value={UserDetails.email}
              name="email"
              type="email"
              placeHolder="Email"
              handleChange={handleInputChange}
              error={IsSubmitted && !UserDetails.email}
              errorText={IsSubmitted && emailValidation(UserDetails.email)}
            />
            <TextField
              label="Create a password"
              value={UserDetails.password}
              name="password"
              type="password"
              placeHolder="Password"
              handleChange={handleInputChange}
              helperText="Min 6 characters and atleast one letter and one number"
              error={IsSubmitted && !UserDetails.password}
              errorText={
                IsSubmitted && passwordValidation(UserDetails.password)
              }
            />
            <Button label="Continue" action={handleSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  updateState: () => dispatch(updateState()),
  updateFormData: (data) => dispatch(updateFormData(data)),
  clearState: () => dispatch(clearState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
