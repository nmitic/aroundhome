 export const transformSlots = inputData => {
  const extractDay = isoDate => {
    const MAP_DAYS = [
      'Sunday',
      'Monday', 
      'Tuesday', 
      'Wednesday', 
      'Thursday', 
      'Friday', 
      'Saturday'
    ];
    const date = new Date(isoDate);

    return MAP_DAYS[date.getDay()];
  }

  return inputData.reduce((acc, curr, index, array) => {
    const day = extractDay(curr.start_time);
    // console.log(!!acc[day]);

    // const restOfSlots = acc[day] ? {
    //   start_time: array[index].start_time,
    //   end_time: array[day].end_time
    // } : {}

    const restOfSlots = acc[day] ? acc[day] : [];

    return {
      ...acc,
      [day]: [
        ...restOfSlots,
        {
          start_time: curr.start_time,
          end_time: curr.end_time
        }
      ]
    }
  }, {})
}