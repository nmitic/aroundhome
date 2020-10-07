import React, {useEffect, useState} from "react";
import TimeSlotsRequest from './request';
import {transformSlots} from './dataTransforms';

import Picker from "./Picker/Picker";

const TimeSlots = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCompaniesAvailability();
  }, [])

  const fetchCompaniesAvailability = async () => {
    const data = await TimeSlotsRequest.getCompaniesAvailability();

    setData(data);
  }

  return (
    <div className="time-slots">
      {
        data && (
          data.map(item => {
            console.log(transformSlots(item.time_slots));

            return (
              <Picker 
                key={item.id} 
                name={item.name}
                id={item.id}
                availableTimeSlots={item.time_slots}
              />
            )
          })
        )
      }
    </div>
  );
}

export default TimeSlots;