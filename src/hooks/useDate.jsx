// eslint-disable-next-line import/no-extraneous-dependencies
import moment from "moment";

const useDate = (date) => {
  return moment(date).format("DD MMMM YYYY . h:mma");
};

export default useDate;
