/* eslint-disable require-unicode-regexp */
// eslint-disable-next-line import/no-extraneous-dependencies

const passwordChecker = (password) => {
  const passwordCriteriaRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

  return passwordCriteriaRegex.test(password);
};

export default passwordChecker;
