// eslint-disable-next-line import/no-extraneous-dependencies
import moment from "moment";

const useDate = (date, type) => {
  if (type === "message") {
    return moment(date).format("h:mm A");
  }

  return moment(date).format("DD MMMM YYYY . h:mma");
};

export default useDate;
