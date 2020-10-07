import React from "react";
import Picker from "./Picker/Picker";

const TimeSlots = () => {
  return (
    <div className="time-slots">
      {
        [1,2,3].map(item => {
          return (
            <Picker key={item}/>
          )
        })
      }
    </div>
  );
}

export default TimeSlots;