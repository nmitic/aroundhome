import React from 'react';
import {parseTime} from '../utils';

const PickerItem = ({startTime, endTime, disabled}) => {
  return (
    <div>
        {parseTime(startTime)}-{parseTime(endTime)} {disabled &&':disabled'}
    </div>
  )
}

export default PickerItem;