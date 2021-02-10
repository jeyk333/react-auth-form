import React, { useEffect } from "react";
import LeftSideBar from "../../components/LeftSideBar";
import Email from "../../assets/images/email.svg";
import { connect } from "react-redux";
import { postData } from "../../store/auth/action";

const StepThree = ({ postData }) => {
  useEffect(() => {
    alert("Please check your email");
    postData();
  }, []);
  return (
    <div className="container">
      <LeftSideBar />
      <div className="step-one">
        <div className="content">
          <p className="step-class">STEP 3</p>
          <p className="step-header">Please check your email</p>
          <p className="details">
            Confirm your email address to start your onboarding. If you do not
            receive it right away, please check your spam folder.
          </p>
          <img src={Email} alt="Email Links" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  postData: () => dispatch(postData()),
});
export default connect(mapStateToProps, mapDispatchToProps)(StepThree);
