import React from 'react';
import PropTypes from 'prop-types';
import {isValidIsoDate} from '../../../../utils/customPropTypes';

import {parseTime} from '../../utils';

import {Styled} from './PickerItem.styled.js';

const PickerItem = ({
  startTime, 
  endTime, 
  disabled,
  handleClick
}) => {
  const parsedTime = {
    start: parseTime(startTime),
    end: parseTime(endTime)
  }
  return (
    <Styled.Item 
      disabled={disabled} 
      onClick={handleClick}
    >
      <Styled.Time dateTime={parsedTime.start}>
        {parsedTime.start}
      </Styled.Time>-
      <Styled.Time dateTime={parsedTime.end}>
        {parsedTime.end}
      </Styled.Time>
    </Styled.Item>
  )
}

PickerItem.propTypes = {
  startTime: isValidIsoDate,
  endTime: isValidIsoDate,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default PickerItem;