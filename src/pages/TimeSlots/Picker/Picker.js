import React, {Fragment} from "react";
import moment from "moment";
import {parseTime, extractDay} from '../utils';

import PickerItem from './PickerItem/PickerItem';

import {Styled} from './Picker.styled.js';

const Picker = ({
  name,
  id,
  selectedTimeSlot,
  setSelectedTimeSlot,
  availableTimeSlots,
  setTimeSlot
}) => {
  const handleSelectTimeSlot = slot => {
    setSelectedTimeSlot({
      ...selectedTimeSlot,
      [id]: slot
    })
  };
  const handleClearSlot = id => {
    const copiedState = {...selectedTimeSlot};
    delete copiedState[id];

    setSelectedTimeSlot(copiedState);
  }

  const validateSlot = (slot, selectedSlot) => {
    if (moment(slot.start_time).isSame(selectedSlot.start_time)) {
      return true;
    }
    return moment(slot.start_time).isBetween(selectedSlot.start_time, selectedSlot.end_time);
  }

  const isSlotAlreadyTaken = slot => {
    let isTaken = false;

    for (const selected in selectedTimeSlot) {
      if (selectedTimeSlot.hasOwnProperty(selected)) {
        const element = selectedTimeSlot[selected];

        if (isTaken) {
          break;
        }
        
        isTaken = validateSlot(slot, element);
      }
    }
    return !!isTaken;
  }

  return (
    <Styled.Container>
      <Styled.Name>{name}</Styled.Name>
      <Styled.SelectedSlot selected={!!selectedTimeSlot[id]}>
        {
          selectedTimeSlot[id] ? (
            <Fragment>
              <Styled.SelectedDay>
                {extractDay(selectedTimeSlot[id].start_time)}
              </Styled.SelectedDay>
              {parseTime(selectedTimeSlot[id].start_time)}-
              {parseTime(selectedTimeSlot[id].end_time)}
              <Styled.Clear onClick={() => handleClearSlot(id)}>clear</Styled.Clear>
            </Fragment>
          ) : "Select time slot"
        }
      </Styled.SelectedSlot>
      <Styled.Listing>
        {
          Object.keys(availableTimeSlots).map((day, iterator) => {
            return (
              <Styled.Item
                className="picker__time-slot-item" 
                key={iterator}
              >
                <Styled.Day>
                  {day}
                </Styled.Day>
                {
                  availableTimeSlots[day].map((item, iterator) => {
                    const disabled = isSlotAlreadyTaken(item);

                    return (
                      <PickerItem 
                        startTime={item.start_time}
                        endTime={item.end_time}
                        disabled={disabled}
                        key={iterator}
                        handleClick={!disabled ? () => handleSelectTimeSlot(item) : () => {}}
                    />
                    )   
                  })
                }
              </Styled.Item>
            )
          })
        }
      </Styled.Listing>
    </Styled.Container>
  );
}

export default Picker;