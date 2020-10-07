import React from "react";

const Picker = ({
  name,
  id,
  selectedTimeSlot,
  availableTimeSlots
}) => {
  return (
    <div className="picker">
      <div className="picker__company-name">{name}</div>
      <div className="picker__selected-time-slot">{selectedTimeSlot}</div>

      <div className="picker__time-slot-listing">
        {
          availableTimeSlots.map(({start_time, end_time}) => {
            return (
              <div className="picker__time-slot-item">
                start time: {start_time}
                start time: {end_time}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Picker;