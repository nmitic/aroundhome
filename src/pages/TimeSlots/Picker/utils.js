import moment from "moment";

export const parseTime = isoString => moment(isoString).format("hh:mm");
export const parseDayAndTime = isoString => moment(isoString).format("dd:hh:mm");
