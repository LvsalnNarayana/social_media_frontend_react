const usePrivacyOption = (privacyOption) => {
  if (privacyOption === "only_me") {
    return "Only me";
  }
  if (privacyOption === "global") {
    return "Global";
  }

  return "Friends";
};

export default usePrivacyOption;
