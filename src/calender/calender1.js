import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import data from './data.json';

let allSelectedDates = [];
data.forEach((item) => {
  allSelectedDates.push(new Date(item.year, item.month, item.day));
});

const addTitle = () => {
  data.forEach((ele) => {
    document.querySelector(`[aria-label="${new Date(ele.year, ele.month, ele.day)
      .toDateString()}"]`).innerHTML += ele.title
  });
}

export default function Example() {
  return (
    <div>
      <button onClick={addTitle}>add</button>
      <DayPicker
        initialMonth={new Date(2020, 4)}
        selectedDays={allSelectedDates}

      />
    </div>
  );
}