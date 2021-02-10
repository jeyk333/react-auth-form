import React, { useState } from "react";
import { connect } from "react-redux";
import LeftSideBar from "../../components/LeftSideBar";
import TextField from "../../components/TextField";
import DropDown from "../../components/DropDwon";
import { ROLES, SIZE } from "../../constants";
import Button from "../../components/Button";
import { updateState, updateFormData } from "../../store/auth/action";
import history from "../../utils/history";

const StepTwo = ({ updateState, updateFormData }) => {
  const [UserDetailsTwo, setUserDetailsTwo] = useState({
    businessName: "",
    role: "",
    totalEmployees: "",
  });
  const [IsSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setUserDetailsTwo({ ...UserDetailsTwo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (UserDetailsTwo.businessName) {
      updateState();
      updateFormData(UserDetailsTwo);
      history.push("/step-three");
    }
    setIsSubmitted(true);
  };
  return (
    <div className="container">
      <LeftSideBar />
      <div className="step-one">
        <div className="content">
          <p className="step-class">STEP 2</p>
          <p className="step-header">Now tell us about your team</p>
          <form>
            <TextField
              label="What is the name of the business?"
              value={UserDetailsTwo.businessName}
              name="businessName"
              placeHolder="Business Name"
              handleChange={handleInputChange}
              error={IsSubmitted && !UserDetailsTwo.businessName}
              errorText={
                IsSubmitted &&
                !UserDetailsTwo.businessName &&
                "Business Name is required"
              }
            />
            <DropDown
              label="What is your role in the business?"
              value={UserDetailsTwo.role}
              name="role"
              handleChange={handleInputChange}
              lists={ROLES}
            />
            <DropDown
              label="How many employees do you have?"
              value={UserDetailsTwo.totalEmployees}
              name="totalEmployees"
              handleChange={handleInputChange}
              lists={SIZE}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);
