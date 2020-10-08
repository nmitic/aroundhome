import moment from "moment";

export const extractDay = isoDate => {
  const MAP_DAYS = [
    'Sunday',
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
  ];

  return MAP_DAYS[moment(isoDate).day()];
}
export const parseTime = isoString => moment(isoString).format("hh:mm");
