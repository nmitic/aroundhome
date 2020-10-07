import React from "react";

const Picker = ({
  name,
  id,
  selectedTimeSlot,
  setSelectedTimeSlot,
  availableTimeSlots,
  setTimeSlot
}) => {
  const parseTime = isoString => new Date(isoString).toLocaleTimeString('en', { timeStyle: 'short', hour12: false, timeZone: 'UTC' });

  const handleSelectTimeSlot = slot => {
    console.log(slot);

    setSelectedTimeSlot({
      ...selectedTimeSlot,
      [id]: slot
    })
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="picker">
      <div className="picker__company-name">{name}</div>
      {
        selectedTimeSlot[id] && (
          <div className="picker__selected-time-slot">
            {parseTime(selectedTimeSlot[id].start_time)} -
            {parseTime(selectedTimeSlot[id].end_time)} 
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
                        <div>
                          start time: {parseTime(item.start_time)}
                        </div>
                        <div>
                          end time: {parseTime(item.end_time)}
                        </div>
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