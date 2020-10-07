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
          Object.keys(availableTimeSlots).map((day, iterator) => {
            console.log(availableTimeSlots.day);
            return (
              <div className="picker__time-slot-item" key={iterator}>
                <div className="picker__time-slot-item-day">
                  {day}
                </div>
                {
                  availableTimeSlots[day].map((item, iterator) => {
                    return (
                      <div key={iterator}>
                        start time: {item.start_time}
                        start time: {item.end_time}
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