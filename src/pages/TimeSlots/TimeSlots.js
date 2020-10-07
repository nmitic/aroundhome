import React, {useEffect, useState} from "react";
import TimeSlotsRequest from './request';
import {transformSlots} from './dataTransforms';

import Picker from "./Picker/Picker";
import PickerSkeleton from './Picker/PickerSkeleton/PickerSkeleton';

const TimeSlots = () => {
  const [data, setData] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState({});

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
        data.length ? (
          data.map(item => {
            return (
              <Picker
                key={item.id} 
                name={item.name}
                id={item.id}
                availableTimeSlots={transformSlots(item.time_slots)}
                selectedTimeSlot={selectedTimeSlot}
                setSelectedTimeSlot={setSelectedTimeSlot}
              />
            )
          })
        ): 
        [1,2,3].map(item => {
          return <PickerSkeleton key={item}/>
        })
      }
    </div>
  );
}

export default TimeSlots;