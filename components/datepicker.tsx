'use client';
import React, { useState } from 'react';
import Datepicker, { DateValueType } from 'react-tailwindcss-datepicker';

const DatePicker = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue: DateValueType) => {
    console.log('newValue:', newValue);
    //setValue(newValue);
  };

  return (
    <Datepicker
      asSingle={true}
      value={value}
      onChange={handleValueChange}
      showShortcuts={true}
    />
  );
};

export default DatePicker;
