 export const transformSlots = inputData => {
  const extractDay = isoDate => {
    const MAP_DAYS = {
      0: "Monday",
      1: "Tuesday",
      2: "Wednesday",
      3: "Thursday",
      4: "Friday",
      5: "Saturday",
      6: "Sunday"
    }
    const date = new Date(isoDate);

    return MAP_DAYS[date.getDay()];
  }


  return inputData.reduce((acc, curr) => {
    const day = extractDay(curr.start_time);
    
    return {
      ...acc,
      [day]: {
        start_time: curr.start_time,
        end_time: curr.end_time
      }
    }
  }, {})
}