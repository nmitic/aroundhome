import React from "react";
import moment from "moment";
import {parseTime, parseDayAndTime} from './utils';

import PickerItem from './PickerItem/PickerItem';

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
  const validateSlot = (slot, selectedSlot) => {
    if (moment(slot.start_time).isSame(selectedSlot.start_time)) {
      return true;
    }
    return moment(slot.start_time).isBetween(selectedSlot.start_time, selectedSlot.end_time);
  };

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
    <div className="picker">
      <div className="picker__company-name">{name}</div>
      {
        selectedTimeSlot[id] && (
          <div className="picker__selected-time-slot">
            {parseDayAndTime(selectedTimeSlot[id].start_time)}-
            {parseDayAndTime(selectedTimeSlot[id].end_time)} 
          </div>
        )
      }
      <div className="picker__time-slot-listing">
        {
          Object.keys(availableTimeSlots).map((day, iterator) => {
            return (
              <div
                className="picker__time-slot-item" 
                key={iterator}
              >
                <div className="picker__time-slot-item-day">
                  {day}
                </div>
                {
                  availableTimeSlots[day].map((item, iterator) => {
                    return (
                      <div 
                        key={iterator}
                        onClick={() => handleSelectTimeSlot(item)}
                      >
                        <PickerItem 
                          startTime={item.start_time}
                          endTime={item.end_time}
                          disabled={isSlotAlreadyTaken(item)}
                        />
                      </div> 
                    )   
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Picker;