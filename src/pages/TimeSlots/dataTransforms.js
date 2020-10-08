 import {extractDay} from './utils';

 export const transformSlots = inputData => {
  return inputData.reduce((acc, curr, index, array) => {
    const day = extractDay(curr.start_time);
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