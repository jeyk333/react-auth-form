export const emailValidation = (value) => {
  let validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!value) {
    return "Email is required";
  } else {
    if (!validation.test(value)) {
      return "Please enter a valid email";
    } else {
      return "";
    }
  }
};

export const passwordValidation = (value) => {
  let validation = /^(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (!value) {
    return "Password is required";
  } else {
    if (!validation.test(value)) {
      return "Password is not matching the criteria";
    } else {
      return "";
    }
  }
};
