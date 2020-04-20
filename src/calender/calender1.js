
import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import data from './data.json';
export default function Example() {
  return (
    <DayPicker
      initialMonth={new Date(2020, 4)}
      selectedDays={[
        new Date(data[0].year, data[0].month, data[0].day),
        new Date(data[1].year, data[1].month, data[1].day),
        new Date(data[2].year, data[2].month, data[2].day),
      ]}
    />
  );
}