import React from "react";

const Picker = ({
  companyName,
  companyId,
  selectedTimeSlot
}) => {
  return (
    <div className="picker">
      <div className="picker__company-name">{companyName}</div>
      <div className="picker__selected-time-slot">{selectedTimeSlot}</div>

      <div className="picker__time-slot-listing">
        {
          [1,2,3,4].map(timeSlot => timeSlot)
        }
      </div>
    </div>
  );
}

export default Picker;