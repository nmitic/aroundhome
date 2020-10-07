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

  return inputData.reduce((acc, curr) => {
    const day = extractDay(curr.start_time);
    const allSlots = acc[day] ? [{
      start_time: curr.start_time,
      end_time: curr.end_time
    }] : [{}]

    return {
      ...acc,
      [day]: [
        {
          start_time: curr.start_time,
          end_time: curr.end_time
        },
        ...allSlots
      ]
    }
  }, {})
}